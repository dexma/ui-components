import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';

import theme from '../styles/theme';
import { StyledTag } from '../styles/components/StyledTag';
import Icon from './Icon';

const propTypes = {
  /**
   * Set the color name for the tag, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
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
  type: 'normal',
  variant: 'primary',
  theme: theme,
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
