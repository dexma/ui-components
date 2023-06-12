const path = require('path');

// Export a function. Accept the base config as the only param.
const config = {
  stories: ['../stories/*.@(js|md)'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-jest',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-mdx-gfm',
  ],
  docs: {
    autodocs: true,
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      fastRefresh: true,
      builder: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  },
  core: {},
};
export default config;
