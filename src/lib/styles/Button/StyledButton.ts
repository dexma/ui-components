import styled, { css } from 'styled-components';
import { darken, saturate, transparentize, rgba } from 'polished';
import get from 'lodash/get';

import { type Theme } from '@utils/theme';
import { white, gray300, gray400, gray500, gray700, gray900, red, primaryColor, backgroundColor, buttonSize, borderRadius } from '@utils/selectors';
import { StyledIcon } from '@styles/Icon/StyledIcon';
import { StyledSpinner } from '@styles/Spinner/StyledSpinner';

export const getSpinnerWhite = () => css`
    ${StyledSpinner} {
        border-color: ${rgba(255, 255, 255, 0.1)};
        border-top-color: ${rgba(255, 255, 255, 1)};
    }
`;

export const getButtonBase = (theme: Theme) => css`
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
    transition:
        color 0.15s ease-in-out,
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    border-width: 1px;
    border-style: solid;
    border-radius: ${borderRadius(theme)};
`;

type ButtonSizeProps = {
    $size: string;
    theme: Theme;
};

export const getButtonSize = (props: ButtonSizeProps) => {
    const sizeProps = get(buttonSize(props.theme), props.$size);
    const { paddingX, fontSize, height } = sizeProps;
    return css`
        font-size: ${fontSize};
        padding: 0 ${paddingX};
        line-height: ${height};
        height: ${height};
    `;
};

export const getIconSize = (props: StyledButtonProps) => {
    const iconAfter = props.$iconAfter;
    const text = props.$text;

    let iconPaddding = 0.285;
    if (props.$size === 'medium') iconPaddding = 0.285;
    if (props.$size === 'large') iconPaddding = 0.5;
    if (props.$size === 'xlarge') iconPaddding = 0.7;

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
const getIconColor = (color: string, iconColor?: string) => iconColor ?? color;

export type ButtonVariantProps = {
    theme: Theme;
    disabled: boolean;
    $isLoading: boolean;
    $iconColor?: string;
};

export const getButtonVariantPrimary = (props: ButtonVariantProps) => {
    const newHoverColor = props.disabled || props.$isLoading ? primaryColor(props.theme) : darken(0.1, saturate(0.2, primaryColor(props.theme)));
    const newFocusColor = transparentize(0.3, primaryColor(props.theme));
    const color = white(props.theme);
    return css`
        color: ${color};
        border-color: ${primaryColor(props.theme)};
        background-color: ${primaryColor(props.theme)};
        ${StyledIcon} {
            fill: ${getIconColor(color, props.$iconColor)};
        }
        ${getSpinnerWhite()}
        &:hover {
            color: ${color};
            border-color: ${newHoverColor};
            background-color: ${newHoverColor};
            ${StyledIcon} {
                fill: ${getIconColor(color, props.$iconColor)};
            }
        }
        &:focus {
            box-shadow: 0px 0px 0px 2px ${newFocusColor};
        }
    `;
};

export const getButtonVariantSecondary = (props: ButtonVariantProps) => {
    const borderColor = gray300(props.theme);
    const borderColorHover = props.disabled || props.$isLoading ? borderColor : gray400(props.theme);
    const background = backgroundColor(props.theme);
    const backgroundHover = props.disabled || props.$isLoading ? background : gray400(props.theme);
    const color = gray900(props.theme);
    const colorHover = props.disabled || props.$isLoading ? color : white(props.theme);
    const newFocusColor = transparentize(0.3, borderColor);
    return css`
        color: ${color};
        border-color: ${borderColor};
        background-color: ${background};
        ${StyledIcon} {
            fill: ${getIconColor(color, props.$iconColor)};
        }
        &:hover {
            color: ${colorHover};
            border-color: ${borderColorHover};
            background-color: ${backgroundHover};
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
export const getButtonVariantOutline = (props: ButtonVariantProps) => {
    const borderColor = primaryColor(props.theme);
    const color = primaryColor(props.theme);
    const colorHover = props.disabled || props.$isLoading ? color : white(props.theme);
    const background = backgroundColor(props.theme);
    const backgroundHover = props.disabled || props.$isLoading ? background : borderColor;
    const newFocusColor = transparentize(0.3, borderColor);
    return css`
        color: ${color};
        border-color: ${borderColor};
        background-color: ${background};
        ${StyledIcon} {
            fill: ${getIconColor(color, props.$iconColor)};
        }
        &:hover {
            color: ${colorHover};
            border-color: ${borderColor};
            background-color: ${backgroundHover};
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

export const getButtonVariantDestructive = (props: ButtonVariantProps) => {
    const color = white(props.theme);
    const background = red(props.theme);
    const borderColor = background;
    const backgroundHover = props.disabled || props.$isLoading ? background : darken(0.1, saturate(0.2, red(props.theme)));
    const newFocusColor = transparentize(0.3, backgroundHover);
    return css`
        color: ${color};
        border-color: ${borderColor};
        background-color: ${background};
        ${getSpinnerWhite()}
        ${StyledIcon} {
            fill: ${getIconColor(color, props.$iconColor)};
        }
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
export const getButtonVariantLink = (props: ButtonVariantProps) => {
    const color = primaryColor(props.theme);
    const textDecorationHover = props.disabled || props.$isLoading ? 'none' : 'underline';
    return css`
        color: ${color};
        border-color: transparent;
        background-color: transparent;
        ${StyledIcon} {
            fill: ${getIconColor(color, props.$iconColor)};
        }
        &:hover {
            color: ${color};
            border-color: transparent;
            background-color: transparent;
            text-decoration: ${textDecorationHover};
        }
    `;
};
export const getButtonVariantIcon = (props: ButtonVariantProps) => {
    const color = gray500(props.theme);
    const hoverColor = gray700(props.theme);
    return css`
        color: ${color};
        border-color: transparent;
        background-color: transparent;
        ${StyledIcon} {
            fill: ${getIconColor(color, props.$iconColor)};
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
export const getButtonVariantIconSecondary = (props: ButtonVariantProps) => {
    const color = gray500(props.theme);
    const hoverColor = gray700(props.theme);
    const bgColorHover = transparentize(0.95, hoverColor);
    return css`
        color: ${color};
        border-color: transparent;
        background-color: transparent;
        ${StyledIcon} {
            fill: ${getIconColor(color, props.$iconColor)};
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
export const getButtonVariantIconOutline = (props: ButtonVariantProps) => {
    const color = gray500(props.theme);
    const hoverColor = gray700(props.theme);
    return css`
        color: ${color};
        border-color: transparent;
        background-color: transparent;
        ${StyledIcon} {
            fill: ${getIconColor(color, props.$iconColor)};
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
export const getButtonExpanded = () => css`
    display: block;
    width: 100%;
`;
export const getButtonDisabled = () => css`
    cursor: not-allowed;
    opacity: 0.65;
`;

export const getButtonLoading = (props: StyledButtonProps) => css`
    cursor: wait;
    ${StyledSpinner} {
        ${props.$text && `margin-right: .25rem`};
    }
`;

export const getButtonCircle = (props: StyledButtonProps) => {
    const sizeProps = get(buttonSize(props.theme), props.$size);
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

const StyledButton = styled.button<StyledButtonProps>`
    ${(props) => getButtonBase(props.theme)};
    ${(props) => props.$size && getButtonSize}
    ${getIconSize};
    ${(props) => props.$variant === 'primary' && getButtonVariantPrimary};
    ${(props) => props.$variant === 'secondary' && getButtonVariantSecondary};
    ${(props) => props.$variant === 'outline' && getButtonVariantOutline};
    ${(props) => props.$variant === 'destructive' && getButtonVariantDestructive};
    ${(props) => props.$variant === 'link' && getButtonVariantLink};
    ${(props) => props.$variant === 'icon' && getButtonVariantIcon};
    ${(props) => props.$variant === 'icon-secondary' && getButtonVariantIconSecondary};
    ${(props) => props.$variant === 'icon-outline' && getButtonVariantIconOutline};
    ${(props) => props.$isCircle && getButtonCircle};
    ${(props) => props.disabled && getButtonDisabled};
    ${(props) => props.$isLoading && getButtonLoading};
    ${(props) => props.$isExpanded && getButtonExpanded};
`;

export const getButtonGroupBase = () => css`
    ${StyledButton} {
        margin-right: 0;
        &:not(:last-child) {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }

        &:not(:first-child) {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            margin-left: -1px;
        }

        &:focus,
        &:active,
        &.active {
            box-shadow: none;
        }
    }
`;
const StyledButtonGroup = styled.div`
    ${getButtonGroupBase};
`;

export type StyledButtonProps = {
    $size: string;
    $variant: string;
    disabled: boolean;
    $isCircle: boolean;
    $isExpanded: boolean;
    $isLoading: boolean;
    $iconColor?: string;
    $iconAfter?: string;
    $text?: string;
    theme: Theme;
};

export { StyledButton, StyledButtonGroup };
