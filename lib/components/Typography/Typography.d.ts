import { ElementType, HTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { TypographyVariant, TypographyWeight } from '../../styles/Typography/StyledTypography';
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
export declare const Typography: ({ variant, weight, color, as, children, ...props }: TypographyProps) => import("react/jsx-runtime").JSX.Element;
export default Typography;
