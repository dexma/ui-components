/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import get from 'lodash/get';
import isNumber from 'lodash/isNumber';
import omit from 'lodash/omit';

import icons from '../config/icon';
import theme from '../styles/theme';
import { StyledIcon } from '../styles/components/StyledIcon';

const propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  theme: PropTypes.shape({}),
};

const defaultProps = {
  name: 'vader',
  color: 'iconColor',
  size: 'large',
  theme: theme,
};

export const getIconSize = size => {
  if (isNumber(size)) return size;
  if (size === 'small') return 16;
  if (size === 'medium') return 20;
  if (size === 'large') return 24;
  if (size === 'xlarge') return 32;
  return 24;
};

const getIconPaths = name => {
  let config = [];
  icons.forEach(item => {
    if (item.name === name) {
      config = item.icon;
    }
  });
  return config.map((itemConfig, i) => {
    const { tag, transform } = itemConfig;
    switch (tag) {
      case 'path':
        const { d, opacity, clipRule, fillRule } = itemConfig;
        return (
          <path
            key={i}
            d={d}
            opacity={opacity}
            clipRule={clipRule}
            fillRule={fillRule}
            transform={transform}
          />
        );
      case 'circle':
        const { cx, cy, r } = itemConfig;
        return <circle key={i} cx={cx} cy={cy} r={r} transform={transform} />;
      default:
        return null;
    }
  });
};

export const Icon = props => {
  const { name, color, size, theme } = props;
  const fillColor = get(theme, color);
  const pathElements = getIconPaths(name);
  const iconSize = getIconSize(size);
  const iconProps = omit(props, ['name', 'color', 'size']);
  return (
    <StyledIcon
      width={iconSize}
      height={iconSize}
      viewBox="0 0 24 24"
      strokeWidth="0"
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      fillColor={fillColor}
      data-testid="icon"
      {...iconProps}
    >
      {pathElements}
    </StyledIcon>
  );
};

StyledIcon.displayName = 'StyledIcon';

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default withTheme(Icon);
