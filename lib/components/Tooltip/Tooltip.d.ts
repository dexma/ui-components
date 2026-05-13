import { TooltipProps } from 'antd';
import { TooltipPlacement } from 'antd/lib/tooltip';
export type TooltipPropsExtended = TooltipProps & {
    position?: TooltipPlacement;
};
export declare const Tooltip: ({ position, placement, children, ...props }: TooltipPropsExtended) => import("react/jsx-runtime").JSX.Element;
export default Tooltip;
