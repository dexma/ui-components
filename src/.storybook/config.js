import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import results from 'test/jest-test-results';

//https://github.com/storybooks/storybook/tree/master/addons/info
addDecorator(withA11y);

addDecorator(
  withTests({
    results,
  })
);

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../stories', true, /\.stories\.mdx$/),
    require.context('../stories', true, /\.stories\.js$/),
  ],
  module
);
