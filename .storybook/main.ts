import type { StorybookConfig } from '@storybook/react-vite';
const config: StorybookConfig = {
    stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: [/\.stories\.ts?$/],
                },
                loaderOptions: {
                    prettierConfig: { printWidth: 80, singleQuote: false },
                },
            },
        },
        '@chromatic-com/storybook'
    ],

    framework: {
        name: '@storybook/react-vite',
        options: {},
    },

    docs: {},

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
};
export default config;
