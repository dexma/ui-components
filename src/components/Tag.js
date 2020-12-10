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
   * Set the tag as closable you can pass onClose
   */
  closable: PropTypes.bool,
  /**
   Close event you have to set closable true
   */
  onClose: PropTypes.func,
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
  closable: false,
  type: 'normal',
  variant: 'primary',
  theme: theme,
};

export const Tag = props => {
  const { icon, closable, children, onClose } = props;
  const tagProps = omit(props, ['children', 'onClose']);
  return (
    <StyledTag data-testid="tag" {...tagProps}>
      {icon && <Icon className="icon" name={icon} size="small" />}
      {children && children}
      {closable && (
        <Icon
          className="icon-close"
          name="close"
          size="small"
          onClick={onClose}
        />
      )}
    </StyledTag>
  );
};

StyledTag.displayName = 'StyledTag';

Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

export default withTheme(Tag);
