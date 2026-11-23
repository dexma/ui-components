import { Theme } from '../../utils/theme';
export type TagVariant = 'primary' | 'outline' | 'filled';
export declare const getTagColors: (theme: Theme, color: string) => {
    base: string;
    tint: string;
    border: string;
    text: string;
};
type StyledTagProps = {
    theme: Theme;
    $color: string;
    $type: 'normal' | 'rounded';
    $variant: TagVariant;
    $icon?: string;
    $closable?: boolean;
};
declare const StyledTag: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledTagProps>> & string;
export { StyledTag };
