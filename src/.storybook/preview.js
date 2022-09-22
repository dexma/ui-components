import React from 'react';
import { GlobalStyle, StorybookStyles } from '../styles/global';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <StorybookStyles />
      <div style={{ minHeight: '300px' }}>
        <Story />
      </div>
    </>
  ),
];
