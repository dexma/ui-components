import { Theme } from '../../utils/theme';
import { ReactNode } from '../../../../node_modules/react';
type StyledAlertProps = {
    $type: string;
    $description?: ReactNode;
    $message: ReactNode;
    $showIcon?: boolean;
    theme: Theme;
};
declare const StyledAlert: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, StyledAlertProps>> & string;
export { StyledAlert };
