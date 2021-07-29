import styled, { css } from 'styled-components';
import { darken, saturate, transparentize, rgba } from 'polished';
import get from 'lodash/get';

import {
  white,
  gray200,
  gray300,
  gray400,
  gray500,
  gray700,
  gray900,
  red,
  primaryColor,
  backgroundColor,
  buttonSize,
  borderRadius,
  iconColor,
} from '../selectors';
import { StyledIcon } from './StyledIcon';
import { StyledSpinner } from './StyledSpinner';

export const getSpinnerWhite = () => css`
  ${StyledSpinner} {
    border-color: ${rgba(255, 255, 255, 0.1)};
    border-top-color: ${rgba(255, 255, 255, 1)};
  }
`;

export const getButtonBase = () => css`
  align-items: center;
  align-content: center;
  display: inline-flex;
  font-weight: normal;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  text-transform: none;
  outline: none;
  box-sizing: border-box;
  user-select: none;
  text-decoration: none;
  overflow: visible;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-width: 1px;
  border-style: solid;
  border-radius: ${borderRadius};
`;
export const getButtonSize = props => {
  const sizeProps = get(buttonSize(props), props.size);
  const { paddingX, fontSize, height } = sizeProps;
  return css`
    font-size: ${fontSize};
    padding: 0 ${paddingX};
    line-height: ${height};
    height: ${height};
  `;
};
export const getIconSize = props => {
  const iconAfter = props.iconAfter;
  const text = props.text;

  let iconPaddding = 0.285;
  if (props.size === 'medium') iconPaddding = 0.285;
  if (props.size === 'large') iconPaddding = 0.5;
  if (props.size === 'xlarge') iconPaddding = 0.7;

  let paddingPosition = 'right';
  if (iconAfter) paddingPosition = 'left';

  let marginPosition = 'left';
  if (iconAfter) marginPosition = 'right';

  return css`
    ${StyledIcon} {
      display: inline-flex;
      ${text &&
        `margin-${paddingPosition}: ${iconPaddding}rem !important;
              margin-${marginPosition}: -2px;`}
    }
  `;
};
export const getButtonVariantPrimary = props => {
  const newHoverColor = darken(0.1, saturate(0.2, primaryColor(props)));
  const newFocusColor = transparentize(0.3, primaryColor(props));
  const color = white(props);
  return css`
    color: ${color};
    border-color: ${primaryColor};
    background-color: ${primaryColor};
    ${StyledIcon} {
      fill: ${color};
    }
    ${getSpinnerWhite()}
    &:hover {
      color: ${color};
      border-color: ${newHoverColor};
      background-color: ${newHoverColor};
      ${StyledIcon} {
        fill: ${color};
      }
    }
    &:focus {
      box-shadow: 0px 0px 0px 2px ${newFocusColor};
    }
  `;
};
export const getButtonVariantSecondary = props => {
  const borderColor = gray400(props);
  const color = gray900(props);
  const colorHover = white(props);
  const colorIcon = iconColor(props);
  const background = backgroundColor(props);
  const newFocusColor = transparentize(0.3, borderColor);
  return css`
    color: ${color};
    border-color: ${borderColor};
    background-color: ${background};
    ${StyledIcon} {
      fill: ${colorIcon};
    }
    &:hover {
      color: ${colorHover};
      border-color: ${borderColor};
      background-color: ${borderColor};
      ${StyledIcon} {
        fill: ${colorHover};
      }
      ${getSpinnerWhite()}
    }
    &:focus {
      box-shadow: 0px 0px 0px 2px ${newFocusColor};
    }
  `;
};
export const getButtonVariantSecondary300 = props => {
  const borderColor = gray300(props);
  const color = gray900(props);
  const colorHover = white(props);
  const background = backgroundColor(props);
  const newFocusColor = transparentize(0.3, borderColor);
  return css`
    color: ${color};
    border-color: ${borderColor};
    background-color: ${background};
    ${StyledIcon} {
      fill: ${color};
    }
    &:hover {
      color: ${colorHover};
      border-color: ${borderColor};
      background-color: ${borderColor};
      ${StyledIcon} {
        fill: ${colorHover};
      }
    }
    &:focus {
      box-shadow: 0px 0px 0px 2px ${newFocusColor};
    }
  `;
};
export const getButtonVariantSecondary200 = props => {
  const borderColor = gray200(props);
  const color = gray900(props);
  const colorHover = white(props);
  const background = backgroundColor(props);
  const newFocusColor = transparentize(0.3, borderColor);
  return css`
    color: ${color};
    border-color: ${borderColor};
    background-color: ${background};
    ${StyledIcon} {
      fill: ${color};
    }
    &:hover {
      color: ${colorHover};
      border-color: ${borderColor};
      background-color: ${borderColor};
      ${StyledIcon} {
        fill: ${colorHover};
      }
    }
    &:focus {
      box-shadow: 0px 0px 0px 2px ${newFocusColor};
    }
  `;
};
export const getButtonVariantOutline = props => {
  const borderColor = primaryColor(props);
  const color = primaryColor(props);
  const colorHover = white(props);
  const background = backgroundColor(props);
  const newFocusColor = transparentize(0.3, borderColor);
  return css`
    color: ${color};
    border-color: ${borderColor};
    background-color: ${background};
    ${StyledIcon} {
      fill: ${color};
    }
    &:hover {
      color: ${colorHover};
      border-color: ${borderColor};
      background-color: ${borderColor};
      ${StyledIcon} {
        fill: ${colorHover};
      }
      ${getSpinnerWhite()}
    }
    &:focus {
      box-shadow: 0px 0px 0px 2px ${newFocusColor};
    }
  `;
};
export const getButtonVariantDestructive = props => {
  const color = white(props);
  const background = red(props);
  const borderColor = background;
  const backgroundHover = darken(0.1, saturate(0.2, red(props)));
  const newFocusColor = transparentize(0.3, backgroundHover);
  return css`
    color: ${color};
    border-color: ${borderColor};
    background-color: ${background};
    ${getSpinnerWhite()}
    &:hover {
      color: ${color};
      border-color: ${backgroundHover};
      background-color: ${backgroundHover};
    }
    &:focus {
      box-shadow: 0px 0px 0px 2px ${newFocusColor};
    }
  `;
};
export const getButtonVariantLink = props => {
  const color = primaryColor(props);
  return css`
    color: ${color};
    border-color: transparent;
    background-color: transparent;
    ${StyledIcon} {
      fill: ${color};
    }
    &:hover {
      color: ${color};
      border-color: transparent;
      background-color: transparent;
      text-decoration: underline;
    }
  `;
};
export const getButtonVariantIcon = props => {
  const color = gray500(props);
  const hoverColor = gray700(props);
  return css`
    color: ${color};
    border-color: transparent;
    background-color: transparent;
    ${StyledIcon} {
      fill: ${color};
    }
    &:hover {
      ${StyledIcon} {
        fill: ${hoverColor};
      }
      color: ${hoverColor};
      border-color: transparent;
      background-color: transparent;
      text-decoration: underline;
    }
  `;
};

export const getButtonVariantIconSecondary = props => {
  const color = gray500(props);
  const hoverColor = gray700(props);
  const bgColorHover = transparentize(0.95, hoverColor);
  return css`
    color: ${color};
    border-color: transparent;
    background-color: transparent;
    ${StyledIcon} {
      fill: ${color};
    }
    &:focus,
    &:hover {
      ${StyledIcon} {
        fill: ${hoverColor};
      }
      color: ${hoverColor};
      border-color: transparent;
      background-color: ${bgColorHover};
      text-decoration: underline;
    }
  `;
};
export const getButtonVariantIconOutline = props => {
  const color = gray500(props);
  const hoverColor = gray700(props);
  return css`
    color: ${color};
    border-color: transparent;
    background-color: transparent;
    ${StyledIcon} {
      fill: ${color};
    }
    &:hover {
      ${StyledIcon} {
        fill: ${hoverColor};
      }
      color: ${hoverColor};
      border-color: ${color};
      background-color: transparent;
      text-decoration: underline;
    }
  `;
};
export const getButtonExpanded = () => {
  return css`
    display: block;
    width: 100%;
  `;
};
export const getButtonDisabled = () => {
  return css`
    cursor: not-allowed;
    opacity: 0.65;
  `;
};
export const getButtonLoading = props => {
  return css`
    ${StyledSpinner} {
      ${props.text && `margin-right: .25rem`};
    }
  `;
};
export const getButtonCircle = props => {
  const sizeProps = get(buttonSize(props), props.size);
  const { height } = sizeProps;
  return css`
    width: ${height};
    border-radius: 50%;
    padding: 0;
    ${StyledIcon} {
      margin: 0 auto;
    }
  `;
};
const StyledButton = styled.button`
  ${getButtonBase};
  ${props => props.size && getButtonSize}
  ${getIconSize};
  ${props => props.variant === 'primary' && getButtonVariantPrimary};
  ${props => props.variant === 'secondary' && getButtonVariantSecondary};
  ${props => props.variant === 'outline' && getButtonVariantOutline};
  ${props => props.variant === 'destructive' && getButtonVariantDestructive};
  ${props => props.variant === 'link' && getButtonVariantLink};
  ${props => props.variant === 'icon' && getButtonVariantIcon};
  ${props =>
    props.variant === 'icon-secondary' && getButtonVariantIconSecondary};
  ${props => props.variant === 'icon-outline' && getButtonVariantIconOutline};
  ${props => props.isCircle && getButtonCircle};
  ${props => props.isDisabled && getButtonDisabled};
  ${props => props.isLoading && getButtonLoading};
  ${props => props.isExpanded && getButtonExpanded};
`;
export { StyledButton };
