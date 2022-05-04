import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import theme from '../styles/theme';

const propTypes = {
  options: PropTypes.shape({}),
};

export const Theme = ({ children, options }) => {
  if (!children) return null;
  const defaultTheme = theme;
  let themeProviderOptions;
  if (isEmpty(options)) {
    themeProviderOptions = defaultTheme;
  } else {
    themeProviderOptions = {
      ...defaultTheme,
      ...options,
      backgroundColorActive: options.backgroundColor
        ? options.backgroundColor
        : options.primary,
    };
  }
  return <ThemeProvider theme={themeProviderOptions}>{children}</ThemeProvider>;
};

Theme.propTypes = propTypes;

export default Theme;
