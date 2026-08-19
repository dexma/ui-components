import { type ElementType, type HTMLAttributes, type ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { StyledTypography, type TypographyVariant, type TypographyWeight } from '@styles/Typography/StyledTypography';

export type TypographyProps = {
    /** `h1`–`h6` use the heading scale; `small`–`xlarge` use the paragraph scale. */
    variant?: TypographyVariant;
    weight?: TypographyWeight;
    color?: string;
    /** Rendered element. Set this for semantics — `variant` only controls type styles. */
    as?: ElementType;
    children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

/**
 * The text primitive for new screens: sizes and weights always come from the theme tokens.
 * Use this instead of an ad-hoc `styled.span` with font-size/font-weight literals.
 */
export const Typography = ({ variant = 'medium', weight = 'normal', color = 'gray700', as = 'span', children, ...props }: TypographyProps) => {
    const th = useContext(ThemeContext) || defaultTheme;

    return (
        <StyledTypography data-testid='typography' as={as} $variant={variant} $weight={weight} $color={color} theme={th} {...props}>
            {children}
        </StyledTypography>
    );
};

export default Typography;
