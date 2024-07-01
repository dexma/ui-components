import get from 'lodash/get';
import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished';

import { type Theme } from '@utils/theme';
import { tagLineHeight, tagFontSize, tagPaddingX, tagPaddingY, white, fontWeightSemiBold, border, borderRadius } from '@utils/selectors';
import { StyledIcon } from '@styles/Icon/StyledIcon';

const getTagColor = (theme: Theme, color: string) => get(theme.color, color);

export const getTagPrimary = (props: StyledTagProps) => {
    const themeColor = getTagColor(props.theme, props.$color);
    const { theme } = props;
    return css`
        border-color: ${themeColor};
        color: ${white(theme)};
        ${StyledIcon} {
            fill: ${white(theme)};
        }
    `;
};

export const getTagOutline = (props: StyledTagProps) => {
    const themeColor = props.$color.startsWith('#') ? props.$color : getTagColor(props.theme, props.$color);
    const tagBackgroundColor = transparentize(0.9, themeColor);
    const tagColor = darken(0.1, themeColor);
    return css`
        border-color: ${themeColor};
        color: ${tagColor};
        background: ${tagBackgroundColor};
        ${StyledIcon} {
            fill: ${tagColor};
        }
    `;
};

type StyledTagProps = {
    theme: Theme;
    $color: string;
    $type: 'normal' | 'rounded';
    $variant: 'primary' | 'outline';
    $icon?: string;
    $closable?: boolean;
};

const StyledTag = styled.div<StyledTagProps>`
    display: inline-flex;
    align-items: center;
    padding: ${(props) => tagPaddingX(props.theme)} ${(props) => tagPaddingY(props.theme)};
    font-size: ${(props) => tagFontSize(props.theme)};
    font-weight: ${(props) => fontWeightSemiBold(props.theme)};
    line-height: ${(props) => tagLineHeight(props.theme)};
    white-space: nowrap;
    cursor: default;
    opacity: 1;
    border: ${(props) => border(props.theme)};
    background: ${(props) => (props.$color.startsWith('#') ? props.$color : getTagColor(props.theme, props.$color))};
    border-radius: ${(props) => (props.$type === 'rounded' ? '16px' : borderRadius(props.theme))};
    ${(props) => props.$variant === 'primary' && getTagPrimary(props)};
    ${(props) => props.$variant === 'outline' && getTagOutline(props)};
    ${StyledIcon} {
        ${(props) =>
            props.$icon &&
            css`
                &.icon {
                    margin-right: 3px;
                    margin-left: -2px;
                }
            `};
        ${(props) =>
            props.$closable &&
            css`
                &.icon-close {
                    cursor: pointer;
                    margin-right: -2px;
                    margin-left: 3px;
                }
            `};
    }
`;

export { StyledTag };
