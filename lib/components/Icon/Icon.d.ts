import { default as React, SVGProps } from '../../../../node_modules/react';
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
} & SVGProps<SVGSVGElement>;
export declare const Icon: React.ForwardRefExoticComponent<Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
export default Icon;
