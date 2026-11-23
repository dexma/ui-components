import { Theme } from '../../utils/theme';
type StyledCellProps = {
    $direction?: string;
    $xs?: number;
    $xsOffset?: number;
    $sm?: number;
    $smOffset?: number;
    $md?: number;
    $mdOffset?: number;
    $lg?: number;
    $lgOffset?: number;
    theme: Theme;
};
declare const StyledCell: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledCellProps>> & string;
export { StyledCell };
