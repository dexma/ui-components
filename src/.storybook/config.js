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

const req = require.context('../stories', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
