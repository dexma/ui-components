import { default as React, ButtonHTMLAttributes, ReactNode } from '../../../../node_modules/react';

export declare enum ButtonSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    XLARGE = "xlarge"
}
export declare const BUTTON_VARIANT: string[];
export declare const ButtonGroup: (props: any) => import("react/jsx-runtime").JSX.Element;
export type ButtonProps = {
    text?: string;
    size?: string | ButtonSize;
    variant?: string;
    iconBefore?: string;
    iconAfter?: string;
    iconColor?: string;
    tooltip?: string;
    onClick?: (e?: any) => void;
    onFocus?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isCircle?: boolean;
    isExpanded?: boolean;
    debounceTime?: number;
    children?: ReactNode;
    dataId?: string;
    'data-testid'?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export declare const Button: React.ForwardRefExoticComponent<Omit<{
    text?: string;
    size?: string | ButtonSize;
    variant?: string;
    iconBefore?: string;
    iconAfter?: string;
    iconColor?: string;
    tooltip?: string;
    onClick?: (e?: any) => void;
    onFocus?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isCircle?: boolean;
    isExpanded?: boolean;
    debounceTime?: number;
    children?: ReactNode;
    dataId?: string;
    'data-testid'?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>, "dataId"> & Partial<{
    dataId?: string;
}> & React.RefAttributes<unknown>>;
