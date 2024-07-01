import styled, { css } from 'styled-components';
import { darken, saturate } from 'polished';

import { type Theme } from '@utils/theme';
import { gray50, gray200, gray300, gray500, primaryColor, borderRadius, white } from '@utils/selectors';
import { StyledIcon } from '@styles/Icon/StyledIcon';
import {
    type ButtonVariantProps,
    type StyledButtonProps,
    getButtonBase,
    getButtonSize,
    getButtonVariantPrimary,
    getButtonVariantSecondary,
    getIconSize,
} from '@styles/Button/StyledButton';
import { FieldGroupType } from '@components/FieldGroup';

export const getSplitVariant = (props: StyledFieldGroupProps) => css`
    label {
        &.active {
            &:hover {
                background: ${primaryColor(props.theme)}!important;
                border-color: ${primaryColor(props.theme)}!important;
            }
        }
    }
    label:not(:last-child) {
        border-radius: ${borderRadius(props.theme)};
        margin-left: 0px;
    }
    label:not(:first-child) {
        border-radius: 4px;
        margin-left: 6px;
    }
    label + label {
        margin-top: -1px;
        margin-left: 0;
    }
`;

export const getCustomVariant = (props: StyledFieldGroupProps) => css`
    label {
        padding: 0px 8px !important;
        &:hover {
            ${StyledIcon} {
                fill: ${white(props.theme)}!important;
            }
        }
        &.active {
            background: ${white(props.theme)};
            border: 2px solid ${primaryColor(props.theme)};
            ${StyledIcon} {
                fill: ${primaryColor(props.theme)}!important;
            }
            &:hover {
                background: ${white(props.theme)};
                ${() => {
                    let newCss = '';
                    if (props.type === FieldGroupType.RADIO) {
                        newCss = `
              border-color: ${primaryColor}!important;
            `;
                    }
                    return newCss;
                }}
            }
        }
    }
    label:not(:last-child) {
        border-radius: ${borderRadius(props.theme)};
        margin-left: 0px;
        margin-top: -1px;
    }
    label:not(:first-child) {
        border-radius: 4px;
        margin-left: 6px;
    }
    label + label {
        margin-top: -1px;
        margin-left: 0;
    }
`;

export const getVertical = () => css`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    label:not(:last-child) {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }
    label:not(:first-child) {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
    label + label {
        margin-top: -1px;
        margin-left: 0;
    }
`;

export const getHorizontal = () => css`
    display: inline-block;
    label:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    label:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    label + label {
        margin-left: -1px;
    }
    label:not(:disabled) {
        cursor: pointer;
    }
`;
type StyledFieldGroupProps = {
    $vertical?: boolean;
    size?: string;
    variant?: string;
    type?: FieldGroupType;
    theme: Theme;
};
const StyledFieldGroup = styled.div<StyledFieldGroupProps>`
    position: relative;
    vertical-align: middle;
    ${(props) => (props.$vertical ? getVertical() : getHorizontal())}
    label {
        ${(props) => getButtonBase(props.theme)};
        ${(props) => props.size && getButtonSize({ $size: props.size, theme: props.theme })}
        ${(props) => getIconSize(props as StyledButtonProps)};
        ${(props) => getButtonVariantSecondary({ ...(props as ButtonVariantProps), $iconColor: gray500(props.theme) })};
        margin: 0;
        &.active {
            ${(props) => getButtonVariantPrimary(props as ButtonVariantProps)};
        }
        &.disabled {
            cursor: not-allowed;
            background-color: ${(props) => gray50(props.theme)};
            color: ${(props) => gray300(props.theme)};
            ${StyledIcon} {
                fill: ${(props) => gray300(props.theme)}!important;
            }
            &:hover {
                ${StyledIcon} {
                    fill: ${(props) => gray300(props.theme)}!important;
                }
            }
            border-color: ${(props) => gray200(props.theme)};
        }
    }
    .active + .active {
        border-left: 1px solid ${(props) => darken(0.1, saturate(0.2, primaryColor(props.theme)))};
    }
    input {
        opacity: 0;
        width: 0px;
    }
    ${(props) => props.variant === 'split' && getSplitVariant(props)}
    ${(props) => props.variant === 'custom' && getCustomVariant(props)}
`;
export { StyledFieldGroup };
