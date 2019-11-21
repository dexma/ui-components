/* eslint-disable react/button-has-type */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { withTheme } from 'styled-components';
import { withTooltip } from 'hoc/withTooltip';
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
  buttonRef: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.oneOf(BUTTON_TYPE),
  size: PropTypes.oneOf(BUTTON_SIZE).isRequired,
  variant: PropTypes.oneOf(BUTTON_VARIANT).isRequired,
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isCircle: PropTypes.bool,
  isExpanded: PropTypes.bool,
  debounceTime: PropTypes.number,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  type: 'button',
  size: 'small',
  variant: 'secondary',
  isDisabled: false,
  isLoading: false,
  isExpanded: false,
};

const getButtonIconSize = size => {
  if (size === 'small') return 'small';
  if (size === 'medium') return 'medium';
  if (size === 'large') return 'large';
  if (size === 'xlarge') return 'large';
  return 'small';
};

export const Button = ({
  buttonRef,
  text,
  type,
  iconBefore,
  iconAfter,
  tooltip,
  onClick,
  onFocus,
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
  const classes = classNames(isExpanded && 'expanded', size && size);
  const handleClick =
    debounceTime > 0 ? debounce(onClick, debounceTime) : onClick;
  const spinnerSize = getIconSize(size);
  const iconSize = getButtonIconSize(size);
  return (
    <StyledButton
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
      isDisabled={isDisabled}
      isLoading={isLoading}
    >
      {isLoading ? <Spinner size={spinnerSize} /> : null}
      {!isLoading && iconBefore ? (
        <Icon name={iconBefore} size={iconSize} color="white" />
      ) : null}
      {text || null}
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

export default memo(withTheme(withTooltip(Button)));
