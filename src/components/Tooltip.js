import React, { forwardRef } from 'react';
import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';
import { StyledTooltip } from '../styles/components/StyledTooltip';

import theme from '../styles/theme';

const propTypes = {
  /**
   * Determines if the tooltip has an arrow.
   */
  arrow: PropTypes.bool,
  /**
   * Determines the tooltip position.
   */
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /**
   * The content of the tooltip.
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Delay in ms once a trigger event is fired before a tooltip shows or hides.
   */
  delay: PropTypes.number,
  /**
   * Duration in ms of the transition animation.
   */
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  /**
   * Invoked once the tooltip has been created.
   */
  onCreate: PropTypes.func,
  /**
   * Invoked once the tooltip has been destroyed.
   */
  onDestroy: PropTypes.func,
  /**
   * Invoked once the tooltip has been fully hidden and unmounted from the DOM.
   */
  onHidden: PropTypes.func,
  /**
   * Invoked once the tooltip begins to show.
   */
  onShow: PropTypes.func,
  /**
   * Specifies the role attribute on the tooltip element.
   */
  role: PropTypes.string,
  /**
   * Determines the events that cause the tooltip to show. Multiple event names are separated by spaces.
   */
  trigger: PropTypes.string,
};

const defaultProps = {
  arrow: true,
  position: 'bottom',
  role: 'tooltip',
  theme: theme,
};

export const Tooltip = forwardRef((props, ref) => {
  const { theme, position } = props;
  const tooltipProps = omit(props, ['theme', 'position']);
  return (
    <>
      <StyledTooltip theme={theme} />
      <Tippy ref={ref} placement={position} {...tooltipProps} />
    </>
  );
});

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default withTheme(Tooltip);
