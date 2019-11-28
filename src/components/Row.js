import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import theme from 'styles/theme';
import { StyledRow } from 'styles/components/StyledRow';

const propTypes = {
  reverse: PropTypes.bool,
  start: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  center: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  end: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  top: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  middle: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  bottom: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  around: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  between: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
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
  reverse: false,
};

export const Row = props => <StyledRow {...props} />;

StyledRow.displayName = 'StyledRow';

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default memo(withTheme(Row));
