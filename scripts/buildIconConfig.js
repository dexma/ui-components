const path = require('path');
const fs = require('fs');

const directoryIconsPath = path.join(__dirname, '../src/lib/assets/icons');
const directoryExportPath = path.join(__dirname, '../src/lib/config');

const formatIcon = (icon, name) => {
    const DOMParser = require('@xmldom/xmldom').DOMParser;
    const parser = new DOMParser();
    const dom = parser.parseFromString(icon, 'text/xml');
    const pathElement = dom.documentElement.getElementsByTagName('path');
    const circleElement = dom.documentElement.getElementsByTagName('circle');
    const svgConifg = [];

    if (pathElement.length > 0) {
        for (let x = 0; pathElement.length > x; x++) {
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
        for (let c = 0; circleElement.length > c; c++) {
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
        name: name,
        icon: svgConifg,
    };
};

const getIconElementsFromFiles = async (files) => {
    const iconFiles = [];
    for (const file in files) {
        const iconElement = await fs.readFileSync(`./src/lib/assets/icons/${files[file]}`, 'utf8');
        const iconConfig = formatIcon(iconElement, files[file].replace('.svg', ''));
        iconFiles.push(
            new Promise(function (resolve, reject) {
                resolve(iconConfig);
            })
        );
    }
    return Promise.all(iconFiles);
};

const main = async () => {
    try {
        const iconFiles = await fs.readdirSync(directoryIconsPath);
        const iconElements = await getIconElementsFromFiles(iconFiles);
        await fs.writeFileSync(`${directoryExportPath}/icon.ts`, 'export default' + JSON.stringify(iconElements));
        return 'ok';
    } catch (err) {
        console.log('err', err);
        return err;
    }
};

main();
