import { Theme } from '../../utils/theme';
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'small' | 'medium' | 'large' | 'xlarge';
export type TypographyWeight = 'light' | 'normal' | 'medium' | 'semiBold' | 'bold';
declare const StyledTypography: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $variant: TypographyVariant;
    $weight: TypographyWeight;
    $color: string;
    theme: Theme;
}>> & string;
export { StyledTypography };
