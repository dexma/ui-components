import { Theme } from '../../utils/theme';
import { FieldGroupType } from '../../components/FieldGroup';
export declare const getSplitVariant: (props: StyledFieldGroupProps) => import('styled-components').RuleSet<object>;
export declare const getCustomVariant: (props: StyledFieldGroupProps) => import('styled-components').RuleSet<object>;
export declare const getVertical: () => import('styled-components').RuleSet<object>;
export declare const getHorizontal: () => import('styled-components').RuleSet<object>;
type StyledFieldGroupProps = {
    $vertical?: boolean;
    size?: string;
    $variant?: string;
    type?: FieldGroupType;
    theme: Theme;
};
declare const StyledFieldGroup: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledFieldGroupProps>> & string;
export { StyledFieldGroup };
