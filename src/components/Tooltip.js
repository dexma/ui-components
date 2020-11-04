import React, { forwardRef } from 'react';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';
import { StyledTooltip } from '../styles/components/StyledTooltip';

import theme from '../styles/theme';

const propTypes = {
  /**
   Specifies which direction to position the tooltip
   */
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  position: 'bottom',
  theme: theme,
};

export const Tooltip = forwardRef((props, ref) => {
  const { theme, position } = props;
  const tooltipProps = omit(props, ['theme', 'position']);
  return (
    <>
      <StyledTooltip theme={theme} />
      <Tippy ref={ref} arrow placement={position} {...tooltipProps} />
    </>
  );
});

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default withTheme(Tooltip);
