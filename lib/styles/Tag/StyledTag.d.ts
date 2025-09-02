import { Theme } from '../../utils/theme';
export declare const getTagPrimary: (props: StyledTagProps) => import('styled-components').RuleSet<object>;
export declare const getTagOutline: (props: StyledTagProps) => import('styled-components').RuleSet<object>;
type StyledTagProps = {
    theme: Theme;
    $color: string;
    $type: 'normal' | 'rounded';
    $variant: 'primary' | 'outline';
    $icon?: string;
    $closable?: boolean;
};
declare const StyledTag: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledTagProps>> & string;
export { StyledTag };
