import { SVGProps } from '../../../../node_modules/react';
import { default as defaultTheme } from '../../utils/theme';
export declare enum IconSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    XLARGE = "xlarge"
}
export declare const getIconSize: (size?: number | string | IconSize) => number;
export type IconProps = {
    name?: string;
    color?: string | keyof typeof defaultTheme.color;
    size?: number | string | IconSize;
    ariaLabel: string;
} & Omit<SVGProps<SVGSVGElement>, 'aria-label'>;
export declare const Icon: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<IconProps, "ref"> & import('../../../../node_modules/react').RefAttributes<SVGSVGElement>>;
export default Icon;
