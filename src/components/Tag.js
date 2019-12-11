import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Icon from 'components/Icon';
import theme from 'styles/theme';

import { StyledTag } from 'styles/components/StyledTag';
import get from 'lodash/get';

const propTypes = {
  /**
   Color related with theme
   */
  color: PropTypes.string,
  /**
   Icon name that need to be able on the assets/icons
   */
  icon: PropTypes.string,
  /**
   Click event
   */
  onClick: PropTypes.func,
  /**
   Type of a tag
   */
  type: PropTypes.oneOf(['normal', 'rounded']),
  /**
   Variant style
   */
  variant: PropTypes.oneOf(['primary', 'outline']),
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
  type: 'normal',
  variant: 'primary',
};

export const Tag = ({
  theme,
  color,
  icon,
  onClick,
  type,
  variant,
  dataCy,
  children,
}) => {
  const tagColor = get(theme.color, color);
  return (
    <StyledTag
      theme={theme}
      color={tagColor}
      type={type}
      variant={variant}
      onClick={onClick}
      dataCy={dataCy}
    >
      {icon && <Icon name={icon} size="small" />}
      {children && children}
    </StyledTag>
  );
};

StyledTag.displayName = 'StyledTag';

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default memo(withTheme(Tag));
