import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { StyledSpinner } from '../styles/components/StyledSpinner';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Set the color name for the spinner, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
   */
  color: PropTypes.string,
  /**
   * Size base on the theme
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  color: 'gray400',
  size: 24,
  theme: theme,
};

export const Spinner = props => {
  return <StyledSpinner data-testid="spinner" {...props} />;
};

StyledSpinner.displayName = 'StyledSpinner';

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default withTheme(Spinner);
