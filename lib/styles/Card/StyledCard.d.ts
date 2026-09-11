import { Theme } from '../../utils/theme';
export declare const getHorizontal: () => import('styled-components').RuleSet<object>;
export declare const getTextTruncate: () => import('styled-components').RuleSet<object>;
type StyledCardProps = {
    theme: Theme;
    $isHorizontal?: boolean;
    $hasFooter?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
};
declare const StyledCard: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledCardProps>> & string;
declare const StyledCardLink: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, StyledCardProps>> & string;
export { StyledCard, StyledCardLink };
