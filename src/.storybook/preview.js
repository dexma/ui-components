import React from 'react';
import { GlobalStyle, StorybookStyles } from '../styles/global';

export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <StorybookStyles />
      <Story />
    </>
  ),
];
