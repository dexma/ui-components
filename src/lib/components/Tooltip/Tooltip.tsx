import { Tooltip as TooltipReact, type TooltipProps } from 'antd';
import { TooltipPlacement } from 'antd/lib/tooltip';

export type TooltipPropsExtended = TooltipProps & {
    position?: TooltipPlacement;
};

export const Tooltip = ({ position, placement, children, ...props }: TooltipPropsExtended) => (
    <TooltipReact placement={placement ?? position} {...props}>
        {children}
    </TooltipReact>
);

export default Tooltip;
