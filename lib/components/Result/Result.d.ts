import { ReactNode } from '../../../../node_modules/react';
export declare enum ResultVariants {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error",
    DELETED = "deleted",
    DEFAULT = "default"
}
export type ResultProps = {
    variant: ResultVariants;
    content?: ReactNode;
    title?: string;
    info?: string;
    size?: number;
    icon?: string;
    iconElement?: ReactNode;
    iconAriaLabel?: string;
};
export declare const Result: ({ title, info, variant, content, size, icon, iconElement, iconAriaLabel }: ResultProps) => import("react/jsx-runtime").JSX.Element;
