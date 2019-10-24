import styled, { css } from 'styled-components';
import { darken, saturate, transparentize } from 'polished';
import {
  white,
  gray400,
  gray900,
  magenta,
  primaryColor,
  backgroundColor,
  buttonSize,
  borderRadius,
} from 'styles/selectors';

import { StyledIcon } from 'styles/components/StyledIcon';

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
  margin: 0.375rem;
  border-radius: ${borderRadius};
`;
export const getButtonSize = props => {
  let sizeCss = ``;
  const sizeArray = Object.entries(buttonSize(props));
  sizeArray.forEach(sizeItem => {
    const [size, sizeProps] = sizeItem;
    const { paddingX, fontSize, height } = sizeProps;
    sizeCss += `
          &.${size} {
            font-size: ${fontSize};
            padding: 0 ${paddingX};
            line-height: ${height};
            height: ${height};
          }
        `;
  });
  return css`
    ${sizeCss}
  `;
};
export const getIconSize = props => {
  let sizeCss = ``;
  const sizeArray = Object.entries(buttonSize(props));
  const iconAfter = props.iconAfter;
  const text = props.text;

  sizeArray.forEach(sizeItem => {
    const [size] = sizeItem;

    let iconPaddding = 0.3;
    if (size === 'medium') iconPaddding = 0.5;
    if (size === 'large') iconPaddding = 0.7;
    if (size === 'xlarge') iconPaddding = 0.9;

    let paddingPosition = 'right';
    if (iconAfter) paddingPosition = 'left';

    let marginPosition = 'left';
    if (iconAfter) marginPosition = 'right';

    sizeCss += `
          &.${size} {
            ${StyledIcon} {
              display: inline-flex;
              ${text &&
                `margin-${paddingPosition}: ${iconPaddding}rem !important;
              margin-${marginPosition}: -2px;`}
            }
          }
        `;
  });
  return css`
    ${sizeCss}
  `;
};
export const getButtonVariantPrimary = props => {
  const newHoverColor = darken(0.1, saturate(0.2, primaryColor(props)));
  const newFocusColor = transparentize(0.3, primaryColor(props));
  const color = white(props);
  return css`
    &.primary {
      color: ${color};
      border-color: ${primaryColor};
      background-color: ${primaryColor};
      &:hover {
        color: ${color};
        border-color: ${newHoverColor};
        background-color: ${newHoverColor};
      }
      &:focus {
        box-shadow: 0px 0px 0px 2px ${newFocusColor};
      }
    }
  `;
};
export const getButtonVariantSecondary = props => {
  const borderColor = gray400(props);
  const color = gray900(props);
  const colorHover = white(props);
  const background = backgroundColor(props);
  const newFocusColor = transparentize(0.3, borderColor);
  return css`
    &.secondary {
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
        box-shadow: 0px 0px 0px 1px ${borderColor};
        ${StyledIcon} {
          fill: ${colorHover};
        }
      }
      &:focus {
        box-shadow: 0px 0px 0px 2px ${newFocusColor};
      }
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
    &.outline {
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
        box-shadow: 0px 0px 0px 1px ${borderColor};
        ${StyledIcon} {
          fill: ${colorHover};
        }
      }
      &:focus {
        box-shadow: 0px 0px 0px 2px ${newFocusColor};
      }
    }
  `;
};
export const getButtonVariantDestructive = props => {
  const color = white(props);
  const background = magenta(props);
  const borderColor = background;
  const backgroundHover = darken(0.1, saturate(0.2, magenta(props)));
  const newFocusColor = transparentize(0.3, backgroundHover);
  return css`
    &.destructive {
      color: ${color};
      border-color: ${borderColor};
      background-color: ${background};
      &:hover {
        color: ${color};
        border-color: ${backgroundHover};
        background-color: ${backgroundHover};
      }
      &:focus {
        box-shadow: 0px 0px 0px 2px ${newFocusColor};
      }
    }
  `;
};
export const getButtonVariantLink = props => {
  const color = primaryColor(props);
  return css`
    &.link {
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
    }
  `;
};
export const getButtonExpanded = () => {
  return css`
    &.expanded {
      &.small,
      &.medium,
      &.large,
      &.xlarge {
        display: block;
        width: 100%;
      }
    }
  `;
};
const StyledButton = styled.button`
  ${getButtonBase};
  ${getButtonSize};
  ${getIconSize};
  ${getButtonVariantPrimary};
  ${getButtonVariantSecondary};
  ${getButtonVariantOutline};
  ${getButtonVariantDestructive};
  ${getButtonVariantLink};
  ${props => !props.isExpanded && getButtonExpanded};
`;
export { StyledButton };
