/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { withTheme } from 'styled-components';

import { withTooltip } from '../hoc/withTooltip';
import theme from '../styles/theme';
import Icon, { getIconSize } from './Icon';
import Spinner from './Spinner';

import { StyledButton } from '../styles/components/StyledButton';
import { StyledButtonGroup } from '../styles/components/StyledButtonGroup';

export const BUTTON_TYPE = ['button', 'reset', 'submit', null];
export const BUTTON_SIZE = ['small', 'medium', 'large', 'xlarge'];
export const BUTTON_VARIANT = [
  'primary',
  'secondary',
  'outline',
  'destructive',
  'link',
  'icon',
  'icon-secondary',
  'icon-outline',
];

const propTypes = {
  id: PropTypes.string,
  buttonRef: PropTypes.func,
  className: PropTypes.string,
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
  dataCy: PropTypes.string,
  theme: PropTypes.shape({}),
};

const defaultProps = {
  type: 'button',
  size: 'medium',
  variant: 'primary',
  isDisabled: false,
  isLoading: false,
  isExpanded: false,
  theme: theme,
};

const getButtonIconSize = size => {
  if (size === 'small') return 'small';
  if (size === 'medium') return 'medium';
  if (size === 'large') return 'large';
  if (size === 'xlarge') return 'large';
  return 'small';
};

export const ButtonGroup = props => {
  return <StyledButtonGroup {...props} />;
};

export const Button = ({
  id,
  buttonRef,
  className,
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
  const classes = classNames(isExpanded && 'expanded', size && size, className);
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

export default withTheme(withTooltip(Button));
