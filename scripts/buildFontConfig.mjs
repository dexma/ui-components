import path, { join } from 'path';
import { fileURLToPath } from 'url';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

/**
 * TO CHANGE THE PLATFORM FONT:
 *   1. `npm i -D @fontsource-variable/<newfont>` (and remove the old devDependency)
 *   2. Point FONT_PACKAGE below at it
 *   3. Update `fontFamily` in src/lib/utils/theme.ts so the new family is first in the stack
 *      (this script fails the build if the two disagree)
 *   4. Update tests/Typography.test.ts, which asserts the canonical stack
 * Everything else — file names, family name, dist/fonts.css, consumer imports — derives
 * automatically from the package's own metadata.
 */
const FONT_PACKAGE = '@fontsource-variable/montserrat';

/**
 * Only the subsets the platform ships translations for:
 *   latin      -> en_US, es_ES, ca_ES, de_DE, fr_FR, it_IT, pt_PT
 *   latin-ext  -> pl_PL (Polish diacritics)
 *   cyrillic   -> bg_BG
 * zh_CN is not covered by this font and falls through to the CJK entries of the fontFamily
 * stack via unicode-range. Italics are unused (browsers synthesise the `dfn` reset rule).
 */
const SUBSETS = ['latin', 'latin-ext', 'cyrillic'];

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const fontSourcePath = join(dirname, '../node_modules', FONT_PACKAGE);
const themePath = join(dirname, '../src/lib/utils/theme.ts');
const distPath = join(dirname, '../dist');
const distFontsPath = join(distPath, 'fonts');

// Registered under the plain family name from the package metadata (e.g. 'Montserrat') —
// deliberately NOT the "<Family> Variable" name that @fontsource-variable's own CSS uses,
// so it matches the `fontFamily` stack in theme.ts.
const buildFontFace = (family, id, subset, unicodeRange) =>
    [
        `/* ${id}-${subset}-wght-normal */`,
        '@font-face {',
        `    font-family: '${family}';`,
        '    font-style: normal;',
        '    font-display: swap;',
        '    font-weight: 100 900;',
        `    src: url(./fonts/${id}-${subset}-wght-normal.woff2) format('woff2-variations');`,
        `    unicode-range: ${unicodeRange};`,
        '}',
    ].join('\n');

const main = () => {
    const { family, id } = JSON.parse(readFileSync(join(fontSourcePath, 'metadata.json'), 'utf8'));
    const unicodeRanges = JSON.parse(readFileSync(join(fontSourcePath, 'unicode.json'), 'utf8'));

    // Guard: the registered family must be the first entry of the theme stack, or every
    // consumer would silently render fallbacks. Fails the build instead.
    const theme = readFileSync(themePath, 'utf8');
    const stackMatch = theme.match(/export const fontFamily =\s*\n?\s*'([^']+)'/);
    if (!stackMatch || !stackMatch[1].startsWith(`"${family}"`)) {
        throw new Error(
            `Font mismatch: ${FONT_PACKAGE} registers '${family}' but the fontFamily stack in ` +
                `src/lib/utils/theme.ts does not start with "${family}". Update the stack (see the ` +
                'checklist at the top of this script).'
        );
    }

    const missing = SUBSETS.filter((subset) => !unicodeRanges[subset]);
    if (missing.length > 0) {
        throw new Error(`Subsets not provided by ${FONT_PACKAGE}: ${missing.join(', ')}. Available: ${Object.keys(unicodeRanges).join(', ')}`);
    }

    mkdirSync(distFontsPath, { recursive: true });

    const fontFaces = SUBSETS.map((subset) => {
        const file = `${id}-${subset}-wght-normal.woff2`;
        copyFileSync(join(fontSourcePath, 'files', file), join(distFontsPath, file));

        return buildFontFace(family, id, subset, unicodeRanges[subset]);
    });

    // SIL OFL: the license text must accompany any redistribution of the font software, and
    // shipping the woff2 files in the npm package is redistribution.
    copyFileSync(join(fontSourcePath, 'LICENSE'), join(distFontsPath, 'LICENSE'));

    writeFileSync(join(distPath, 'fonts.css'), `${fontFaces.join('\n\n')}\n`);
};

try {
    main();
} catch (err) {
    // Fail loudly: a zero exit here would let CI publish a package with no fonts in it.
    console.error(err);
    process.exitCode = 1;
}
