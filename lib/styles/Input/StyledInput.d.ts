import { Theme } from '../../utils/theme';
export declare const getLoading: (props: any) => import('styled-components').RuleSet<object>;
export declare const getIcon: (props: any) => import('styled-components').RuleSet<object>;
declare const StyledInput: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $focused: boolean;
    $icon?: string;
    $isLoading?: boolean;
    theme: Theme;
}>> & string;
declare const StyledInputLabel: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, never>> & string;
export { StyledInput, StyledInputLabel };
