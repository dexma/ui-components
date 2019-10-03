import React from 'react';
import { mount, shallow } from 'enzyme';
import Theme from 'components/Theme';
import theme from 'styles/theme';

export function mountWithTheme(child) {
  return mount(child, {
    wrappingComponent: ({ children }) => (
      <Theme options={theme}>{children}</Theme>
    ),
  });
}

export function shallowWithTheme(child) {
  return shallow(child, {
    wrappingComponent: ({ children }) => (
      <Theme options={theme}>{children}</Theme>
    ),
  });
}
