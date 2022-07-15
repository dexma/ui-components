import React from 'react';
import { Tooltip as TooltipReact } from 'antd';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import theme from '../styles/theme';

const propTypes = {
  /**
   * Determines the tooltip position.
   */
  position: PropTypes.oneOf([
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight',
    'left',
    'leftBottom',
    'leftTop',
    'right',
    'rightBottom',
    'rightTop',
  ]),
  /**
   * The content of the tooltip.
   */
  title: PropTypes.string,
  /**
   * Config z-index of Tooltip
   */
  zIndex: PropTypes.number,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
};

export const Tooltip = props => {
  const { position, placement } = props;

  return <TooltipReact placement={position || placement} {...props} />;
};

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default withTheme(Tooltip);
