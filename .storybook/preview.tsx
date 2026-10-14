import React from 'react';
import type { Preview } from '@storybook/react';
import defaultTheme from '../src/lib/utils/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, StorybookStyles } from '../src/lib/utils/global';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },

    decorators: [
        (Story: any) => (
            <div style={{ minHeight: '300px' }}>
                <GlobalStyle />
                <StorybookStyles />
                <ThemeProvider theme={defaultTheme}>
                    <Story />
                </ThemeProvider>
            </div>
        ),
    ],

    tags: ['autodocs', 'autodocs'],
};

export default preview;
