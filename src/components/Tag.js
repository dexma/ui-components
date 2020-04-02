import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Icon from 'components/Icon';
import theme from 'styles/theme';
import omit from 'lodash/omit';

import { StyledTag } from 'styles/components/StyledTag';

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
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
  type: 'normal',
  variant: 'primary',
};

export const Tag = props => {
  const { icon, children } = props;
  const tagProps = omit(props, ['icon', 'children']);
  return (
    <StyledTag data-testid="tag" {...tagProps}>
      {icon && <Icon name={icon} size="small" />}
      {children && children}
    </StyledTag>
  );
};

StyledTag.displayName = 'StyledTag';

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default withTheme(Tag);
