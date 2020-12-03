import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import theme from '../styles/theme';

import { StyledCell } from '../styles/components/StyledCell';

const propTypes = {
  /**
   * Responsive extra small size
   */
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  /**
   * Responsive small size
   */
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  /**
   * Responsive medium size
   */
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  /**
   * Responsive large size
   */
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  first: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  last: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
};

export const Cell = props => <StyledCell {...props} />;

StyledCell.displayName = 'StyledCell';

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default withTheme(Cell);
