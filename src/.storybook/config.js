import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withTests } from '@storybook/addon-jest';
import results from 'test/jest-test-results';

//https://github.com/storybooks/storybook/tree/master/addons/info
addDecorator(withInfo);

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
