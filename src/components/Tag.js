import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import Icon from 'components/Icon';

import { StyledTag } from 'styles/components/StyledTag';
import get from 'lodash/get';

const propTypes = {
  ...GeneralPropTypes,
  /**
   Color related with theme
   */
  color: PropTypes.string,
  /**
   Icon name that need to be able on the assets/icons
   */
  icon: PropTypes.string,
  /**
   The type of the element
   */
  type: PropTypes.oneOf(['normal', 'rounded']),
  variant: PropTypes.oneOf(['primary', 'outline']),
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  type: 'normal',
  variant: 'primary',
};

export const Tag = ({ theme, color, icon, type, variant, children }) => {
  const tagColor = get(theme, color) || color;
  return (
    <StyledTag theme={theme} color={tagColor} type={type} variant={variant}>
      {icon && <Icon name={icon} size="small" />}
      {children && <span>children</span>}
    </StyledTag>
  );
};

StyledTag.displayName = 'StyledTag';

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default memo(withTheme(Tag));
