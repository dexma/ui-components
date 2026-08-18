import path, { join } from 'path';
import { fileURLToPath } from 'url';
import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'fs';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const fontSourcePath = join(dirname, '../node_modules/@fontsource-variable/montserrat');
const distPath = join(dirname, '../dist');
const distFontsPath = join(distPath, 'fonts');

/**
 * Only the subsets the platform ships translations for:
 *   latin      -> en_US, es_ES, ca_ES, de_DE, fr_FR, it_IT, pt_PT
 *   latin-ext  -> pl_PL (Polish diacritics)
 *   cyrillic   -> bg_BG
 * zh_CN is not covered by Montserrat at all and falls through to the CJK entries of the
 * fontFamily stack via unicode-range. cyrillic-ext / vietnamese / italics are unused
 * (the only italic in the library is the `dfn` reset rule, which browsers synthesise).
 */
const subsets = ['latin', 'latin-ext', 'cyrillic'];

// Registered as 'Montserrat' (the name used by theme.ts fontFamily) — deliberately NOT the
// 'Montserrat Variable' name that @fontsource-variable's own CSS uses.
const buildFontFace = (subset, unicodeRange) =>
    [
        `/* montserrat-${subset}-wght-normal */`,
        '@font-face {',
        "    font-family: 'Montserrat';",
        '    font-style: normal;',
        '    font-display: swap;',
        '    font-weight: 100 900;',
        `    src: url(./fonts/montserrat-${subset}-wght-normal.woff2) format('woff2-variations');`,
        `    unicode-range: ${unicodeRange};`,
        '}',
    ].join('\n');

const main = () => {
    try {
        const unicodeRanges = JSON.parse(readFileSync(join(fontSourcePath, 'unicode.json'), 'utf8'));

        mkdirSync(distFontsPath, { recursive: true });

        const fontFaces = subsets.map((subset) => {
            const file = `montserrat-${subset}-wght-normal.woff2`;
            copyFileSync(join(fontSourcePath, 'files', file), join(distFontsPath, file));

            return buildFontFace(subset, unicodeRanges[subset]);
        });

        // Montserrat is SIL OFL 1.1 — the license text must accompany any redistribution of the
        // font software, and shipping the woff2 files in the npm package is redistribution.
        copyFileSync(join(fontSourcePath, 'LICENSE'), join(distFontsPath, 'LICENSE'));

        writeFileSync(join(distPath, 'fonts.css'), `${fontFaces.join('\n\n')}\n`);

        return 'ok';
    } catch (err) {
        console.log('err', err);
        return err;
    }
};

main();
