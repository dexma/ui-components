import path, { join } from 'path';
import { fileURLToPath } from 'url';
import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { DOMParser } from '@xmldom/xmldom';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const directoryIconsPath = join(dirname, '../src/lib/assets/icons');
const directoryExportPath = join(dirname, '../src/lib/config');

const formatIcon = (icon, name) => {
    const parser = new DOMParser();
    const dom = parser.parseFromString(icon, 'text/xml');
    const pathElement = dom.documentElement.getElementsByTagName('path');
    const circleElement = dom.documentElement.getElementsByTagName('circle');
    const svgConifg = [];

    if (pathElement.length > 0) {
        for (let x = 0; pathElement.length > x; x += 1) {
            const itemPath = pathElement.item(x);
            const d = itemPath.getAttribute('d');
            const opacity = itemPath.getAttribute('opacity');
            const clipRule = itemPath.getAttribute('clip-rule');
            const fillRule = itemPath.getAttribute('fill-rule');
            const svgPathConfig = {
                tag: 'path',
                d: d || {},
                opacity: opacity || {},
                clipRule: clipRule || {},
                fillRule: fillRule || {},
            };
            svgConifg.push(svgPathConfig);
        }
    }

    if (circleElement.length > 0) {
        for (let c = 0; circleElement.length > c; c += 1) {
            const itemPathCircle = circleElement.item(c);
            const cx = itemPathCircle.getAttribute('cx');
            const cy = itemPathCircle.getAttribute('cy');
            const r = itemPathCircle.getAttribute('r');
            const transform = itemPathCircle.getAttribute('transform');
            const svgPathConfigCircle = {
                tag: 'circle',
                cx: cx || {},
                cy: cy || {},
                r: r || {},
                transform: transform || '',
            };
            svgConifg.push(svgPathConfigCircle);
        }
    }

    return {
        name,
        icon: svgConifg,
    };
};

const getIconElementsFromFiles = async (files) =>
    Promise.all(
        Object.values(files).map((file) => {
            const iconElement = readFileSync(`./src/lib/assets/icons/${file}`, 'utf8');
            const iconConfig = formatIcon(iconElement, file.replace('.svg', ''));

            return new Promise((resolve) => {
                resolve(iconConfig);
            });
        })
    );

const main = async () => {
    try {
        const iconFiles = readdirSync(directoryIconsPath);
        const iconElements = await getIconElementsFromFiles(iconFiles);
        writeFileSync(`${directoryExportPath}/icon.ts`, `export default${JSON.stringify(iconElements)}`);
        return 'ok';
    } catch (err) {
        console.log('err', err);
        return err;
    }
};

main();
