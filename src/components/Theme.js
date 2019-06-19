import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import theme from 'styles/theme';

const propTypes = {
  options: PropTypes.objectOf(PropTypes.object),
};

const Theme = ({ children, options }) => {
  if (!children) return null;
  const defaultTheme = theme;
  let themeProviderOptions;
  if (isEmpty(options)) {
    themeProviderOptions = defaultTheme;
  } else {
    themeProviderOptions = Object.assign(defaultTheme, options);
  }
  return <ThemeProvider theme={themeProviderOptions}>{children}</ThemeProvider>;
};

Theme.propTypes = propTypes;

export default Theme;
