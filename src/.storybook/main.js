const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../stories/*.@(js|md)'],
  addons: [
    '@storybook/addon-jest/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs/preset',
  ],
};
