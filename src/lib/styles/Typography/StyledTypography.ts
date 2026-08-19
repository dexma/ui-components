import get from 'lodash/get';
import styled, { css } from 'styled-components';

import { type Theme } from '@utils/theme';
import { headingFontSize, paragraphSize } from '@utils/selectors';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'small' | 'medium' | 'large' | 'xlarge';
export type TypographyWeight = 'light' | 'normal' | 'medium' | 'semiBold' | 'bold';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type ParagraphVariant = 'small' | 'medium' | 'large' | 'xlarge';

const isHeadingVariant = (variant: TypographyVariant): variant is HeadingVariant => variant.startsWith('h');

/**
 * Reuses the existing `heading.fontSize` and `paragraph.size` scales rather than introducing a
 * third one, so Typography cannot drift from Heading/Paragraph.
 */
const getVariant = (variant: TypographyVariant, theme: Theme) => {
    if (isHeadingVariant(variant)) {
        const fontSizes = headingFontSize(theme);
        return css`
            font-size: ${fontSizes ? fontSizes[variant] : 'inherit'};
        `;
    }

    const sizes = paragraphSize(theme);
    const size = sizes ? sizes[variant as ParagraphVariant] : undefined;
    return css`
        font-size: ${size ? size.fontSize : 'inherit'};
        line-height: ${size ? size.lineHeight : 'inherit'};
    `;
};

const getWeight = (weight: TypographyWeight, theme: Theme) => {
    const weights: Record<TypographyWeight, number | undefined> = {
        light: theme.fontWeightLight,
        normal: theme.fontWeightNormal,
        medium: theme.fontWeightMedium,
        semiBold: theme.fontWeightSemiBold,
        bold: theme.fontWeightBold,
    };

    return css`
        font-weight: ${weights[weight]};
    `;
};

const StyledTypography = styled.span<{ $variant: TypographyVariant; $weight: TypographyWeight; $color: string; theme: Theme }>`
    margin: 0;
    ${(props) => getVariant(props.$variant, props.theme)};
    ${(props) => getWeight(props.$weight, props.theme)};
    color: ${(props) => get(props.theme.color, props.$color)};
`;

export { StyledTypography };
