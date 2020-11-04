import React from 'react';
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
  placement: 'bottom',
  theme: theme,
};

export const Tooltip = props => {
  const { children, theme, position } = props;
  const tooltipProps = omit(props, ['theme']);
  return (
    <>
      <StyledTooltip theme={theme} />
      <Tippy arrow placement={position} {...tooltipProps}>
        {children}
      </Tippy>
    </>
  );
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default withTheme(Tooltip);
