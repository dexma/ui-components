import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import Icon from 'components/Icon';

import { StyledTag } from 'styles/components/StyledTag';

const propTypes = {
  ...GeneralPropTypes,
  color: PropTypes.string,
  icon: PropTypes.string,
  type: PropTypes.oneOf(['normal', 'rounded']),
  variant: PropTypes.oneOf(['primary', 'outline']),
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  type: 'normal',
  variant: 'primary',
};

const Tag = ({ theme, color, icon, type, variant, children }) => {
  return (
    <StyledTag theme={theme} color={color} type={type} variant={variant}>
      {icon && <Icon name={icon} size="small" />}
      <span>{children && children}</span>
    </StyledTag>
  );
};

StyledTag.displayName = 'StyledTag';

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default memo(withTheme(Tag));
