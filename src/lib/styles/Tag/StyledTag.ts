import get from 'lodash/get';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

import { type Theme } from '@utils/theme';
import { tagLineHeight, tagFontSize, tagPaddingX, tagPaddingY, white, fontWeightNormal, border, borderRadius } from '@utils/selectors';
import { StyledIcon } from '@styles/Icon/StyledIcon';

export type TagVariant = 'primary' | 'outline' | 'filled';

type TagColor = { base: string; tint?: string; border?: string; text?: string };

// Tag-only palette (Figma: Dexma DS > Tag). Anything not listed falls back to theme.color or a hex value.
const tagPresets = (theme: Theme): Record<string, TagColor> => ({
    red: { base: '#F25A5A' },
    green: { base: '#00CC87' },
    gray: { base: theme.color.gray, tint: theme.color.gray50, border: theme.color.gray200, text: theme.color.gray700 },
    success: { base: theme.color.successDefault, tint: theme.color.successLighter, border: theme.color.successLight },
    warning: { base: theme.color.warningDark, tint: theme.color.warningLight, border: theme.color.warningDefault },
    error: { base: theme.color.errorDefault, tint: theme.color.errorLighter, border: theme.color.errorLight },
});

export const getTagColors = (theme: Theme, color: string) => {
    const preset = tagPresets(theme)[color];
    const base = preset?.base ?? (color.startsWith('#') ? color : get(theme.color, color));
    return {
        base,
        tint: preset?.tint ?? transparentize(0.9, base),
        border: preset?.border ?? base,
        text: preset?.text ?? base,
    };
};

type StyledTagProps = {
    theme: Theme;
    $color: string;
    $type: 'normal' | 'rounded';
    $variant: TagVariant;
    $icon?: string;
    $closable?: boolean;
};

const getVariant = ({ theme, $color, $variant }: StyledTagProps) => {
    const c = getTagColors(theme, $color);
    const [background, borderColor, color] =
        $variant === 'primary' ? [c.base, c.base, white(theme)] : [c.tint, $variant === 'filled' ? 'transparent' : c.border, c.text];
    return css`
        background: ${background};
        border-color: ${borderColor};
        color: ${color};
        ${StyledIcon} {
            fill: ${color};
        }
    `;
};

const StyledTag = styled.div<StyledTagProps>`
    display: inline-flex;
    align-items: center;
    padding: ${(props) => tagPaddingX(props.theme)} ${(props) => tagPaddingY(props.theme)};
    font-size: ${(props) => tagFontSize(props.theme)};
    font-weight: ${(props) => fontWeightNormal(props.theme)};
    line-height: ${(props) => tagLineHeight(props.theme)};
    white-space: nowrap;
    cursor: default;
    opacity: 1;
    border: ${(props) => border(props.theme)};
    border-radius: ${(props) => (props.$type === 'rounded' ? '100px' : borderRadius(props.theme))};
    ${getVariant};
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
