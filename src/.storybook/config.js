import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import results from 'test/jest-test-results';

import { GlobalStyle, StorybookStyles } from 'styles/global';

addDecorator(withA11y);

addDecorator(
  withTests({
    results,
  })
);

addDecorator(story => (
  <>
    <GlobalStyle />
    <StorybookStyles />
    {story()}
  </>
));

configure(
  [
    require.context('../stories', true, /\.stories\.mdx$/),
    require.context('../stories', true, /\.stories\.js$/),
  ],
  module
);
