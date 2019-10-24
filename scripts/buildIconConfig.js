const path = require('path');
const fs = require('fs');

const directoryIconsPath = path.join(__dirname, '../src/assets/icons');
const directoryExportPath = path.join(__dirname, '../src/config');

const formatIcon = (icon, name) => {
  // eslint-disable-next-line global-require
  const DOMParser = require('xmldom').DOMParser;
  const parser = new DOMParser();
  const dom = parser.parseFromString(icon, 'text/xml');
  const pathElement = dom.documentElement.getElementsByTagName('path');
  const svgConifg = [];
  for (let x = 0; pathElement.length > x; x++) {
    const itemPath = pathElement.item(x);
    const d = itemPath.getAttribute('d');
    const opacity = itemPath.getAttribute('opacity');
    const clipRule = itemPath.getAttribute('clip-rule');
    const fillRule = itemPath.getAttribute('fill-rule');
    const svgPathConfig = {
      d: d || {},
      opacity: opacity || {},
      clipRule: clipRule || {},
      fillRule: fillRule || {},
    };
    svgConifg.push(svgPathConfig);
  }
  return {
    name: name,
    icon: svgConifg,
  };
};

const getIconElementsFromFiles = async files => {
  const iconFiles = [];
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const file in files) {
    const iconElement = await fs.readFileSync(
      `../src/assets/icons/${files[file]}`,
      'utf8'
    );
    const iconConfig = formatIcon(iconElement, files[file].replace('.svg', ''));
    iconFiles.push(
      new Promise(function(resolve, reject) {
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
    await fs.writeFileSync(
      `${directoryExportPath}/icon.json`,
      JSON.stringify(iconElements)
    );
    return 'ok';
  } catch (err) {
    return err;
  }
};

main();
