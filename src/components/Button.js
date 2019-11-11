/* eslint-disable react/button-has-type */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import Icon, { getIconSize } from 'components/Icon';
import Spinner from 'components/Spinner';

import { StyledButton } from 'styles/components/StyledButton';

export const BUTTON_TYPE = ['button', 'reset', 'submit', null];
export const BUTTON_SIZE = ['small', 'medium', 'large', 'xlarge'];
export const BUTTON_VARIANT = [
  'primary',
  'secondary',
  'outline',
  'destructive',
  'link',
];

const propTypes = {
  ...GeneralPropTypes,
  id: PropTypes.string,
  buttonRef: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.oneOf(BUTTON_TYPE),
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isCircle: PropTypes.bool,
  size: PropTypes.oneOf(BUTTON_SIZE),
  variant: PropTypes.oneOf(BUTTON_VARIANT),
  isExpanded: PropTypes.bool,
  isLoading: PropTypes.bool,
  debounceTime: PropTypes.number,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  type: 'button',
  isActive: false,
  isDisabled: false,
  isLoading: false,
  size: 'small',
  variant: 'secondary',
};

const getButtonIconSize = size => {
  if (size === 'small') return 'small';
  if (size === 'medium') return 'medium';
  if (size === 'large') return 'large';
  if (size === 'xlarge') return 'large';
  return 'small';
};
const Button = ({
  id,
  buttonRef,
  text,
  type,
  iconBefore,
  iconAfter,
  tooltip,
  onClick,
  onFocus,
  isActive,
  isDisabled,
  isExpanded,
  isLoading,
  isCircle,
  size,
  variant,
  debounceTime,
  dataCy,
  theme,
  children,
}) => {
  const classes = classNames(
    isActive && 'active',
    isExpanded && 'expanded',
    size && size,
    variant && variant
  );
  const handleClick =
    debounceTime > 0 ? debounce(onClick, debounceTime) : onClick;
  const spinnerSize = getIconSize(size);
  const iconSize = getButtonIconSize(size);
  return (
    <StyledButton
      id={id}
      ref={buttonRef}
      type={type}
      data-tooltip={tooltip}
      onClick={handleClick}
      onFocus={onFocus}
      disabled={isDisabled}
      className={classes}
      data-cy={dataCy}
      theme={theme}
      variant={variant}
      size={size}
      iconSize={iconSize}
      iconAfter={iconAfter}
      isCircle={isCircle}
      text={text}
    >
      {isLoading ? <Spinner size={spinnerSize} /> : null}
      {!isLoading && iconBefore ? (
        <Icon name={iconBefore} size={iconSize} color="white" />
      ) : null}
      {!isLoading && text ? text : null}
      {children || null}
      {!isLoading && iconAfter ? (
        <Icon name={iconAfter} size={iconSize} color="white" />
      ) : null}
    </StyledButton>
  );
};

StyledButton.displayName = 'StyledButton';

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default memo(withTheme(Button));
