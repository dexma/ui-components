const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../stories/*.@(js|md)'],
  addons: [
    '@storybook/addon-jest',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-links',
  ],
};
