import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import theme from 'styles/theme';

import { StyledCell } from 'styles/components/StyledCell';

const propTypes = {
  /**
   * Responsive extra small size
   */
  xs: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /**
   * Responsive small size
   */
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /**
   * Responsive medium size
   */
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /**
   * Responsive large size
   */
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  first: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  last: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  /**
   * Component class
   */
  className: PropTypes.string,
  /**
   * The cypress identifier
   */
  dataCy: PropTypes.string,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
  /**
   * Children node
   */
  children: PropTypes.node,
};

const defaultProps = {
  theme: theme,
};

export const Cell = props => <StyledCell {...props} />;

StyledCell.displayName = 'StyledCell';

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default memo(withTheme(Cell));
