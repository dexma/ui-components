import { ButtonHTMLAttributes, ReactNode } from '../../../../node_modules/react';
export declare enum ButtonSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    XLARGE = "xlarge"
}
export declare const BUTTON_VARIANT: string[];
export declare const ButtonGroup: (props: any) => import("react/jsx-runtime").JSX.Element;
type CommonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: string | ButtonSize;
    variant?: string;
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
};
type ButtonTextProps = CommonButtonProps & {
    kind: 'button';
    text: string;
};
type IconButtonProps = CommonButtonProps & {
    kind: 'iconButton';
    iconColor?: string;
    iconBefore?: string;
    iconAfter?: string;
    iconAriaLabel: string;
};
type IconTextButtonProps = CommonButtonProps & {
    kind: 'iconTextButton';
    text: string;
    iconColor?: string;
    iconBefore?: string;
    iconAfter?: string;
};
export type ButtonProps = (Omit<ButtonTextProps, 'kind'> & {
    kind?: 'button';
}) | IconButtonProps | IconTextButtonProps;
export declare const Button: import('../../../../node_modules/react').ForwardRefExoticComponent<(Omit<ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: string | ButtonSize;
    variant?: string;
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
} & {
    kind: "iconButton";
    iconColor?: string;
    iconBefore?: string;
    iconAfter?: string;
    iconAriaLabel: string;
} & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement> & {
    dataId?: string;
}, "ref"> | Omit<ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: string | ButtonSize;
    variant?: string;
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
} & {
    kind: "iconTextButton";
    text: string;
    iconColor?: string;
    iconBefore?: string;
    iconAfter?: string;
} & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement> & {
    dataId?: string;
}, "ref"> | Omit<Omit<ButtonTextProps, "kind"> & {
    kind?: "button";
} & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement> & {
    dataId?: string;
}, "ref">) & import('../../../../node_modules/react').RefAttributes<unknown>>;
export {};
