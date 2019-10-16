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

const getButtonBase = () => css`
  align-items: center;
  align-content: center;
  display: inline-flex;
  font-weight: 600;
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
  margin: 0;
  border-radius: ${borderRadius};
`;
const getButtonSize = props => {
  let sizeCss = ``;
  const sizeArray = Object.entries(buttonSize(props));
  sizeArray.forEach(sizeItem => {
    const [size, sizeProps] = sizeItem;
    const { paddingY, paddingX, fontSize } = sizeProps;
    sizeCss += `
          &.${size} {
            font-size: ${fontSize};
            padding: ${paddingY} ${paddingX};
            line-height: 1.5rem;
          }
        `;
  });
  return css`
    ${sizeCss}
  `;
};
const getButtonVariantPrimary = props => {
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
const getButtonVariantSecondary = props => {
  const borderColor = gray400(props);
  const color = gray900(props);
  const background = backgroundColor(props);
  return css`
    &.secondary {
      color: ${color};
      border-color: ${borderColor};
      background-color: ${background};
      &:hover {
        color: ${color};
        border-color: ${borderColor};
        background-color: ${background};
        box-shadow: 0px 0px 0px 1px ${borderColor};
      }
    }
  `;
};
const getButtonVariantOutline = props => {
  const borderColor = primaryColor(props);
  const color = primaryColor(props);
  const background = backgroundColor(props);
  return css`
    &.outline {
      color: ${color};
      border-color: ${borderColor};
      background-color: ${background};
      &:hover {
        color: ${color};
        border-color: ${borderColor};
        background-color: ${background};
        box-shadow: 0px 0px 0px 1px ${borderColor};
      }
    }
  `;
};
const getButtonVariantDestructive = props => {
  const color = white(props);
  const background = magenta(props);
  const borderColor = background;
  const backgroundHover = darken(0.1, saturate(0.2, magenta(props)));
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
    }
  `;
};
const getButtonVariantLink = props => {
  const color = primaryColor(props);
  return css`
    &.link {
      color: ${color};
      border-color: transparent;
      background-color: transparent;
      &:hover {
        color: ${color};
        border-color: transparent;
        background-color: transparent;
        text-decoration: underline;
      }
    }
  `;
};
const getButtonExpanded = () => {
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
  ${getButtonVariantPrimary};
  ${getButtonVariantSecondary};
  ${getButtonVariantOutline};
  ${getButtonVariantDestructive};
  ${getButtonVariantLink};
  ${props => !props.isExpanded && getButtonExpanded};
  svg {
    width: 30px;
    height: 30px;
    margin: -10px 0px -10px -10px;
  }
`;
export { StyledButton };
