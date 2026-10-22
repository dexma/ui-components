import { InputHTMLAttributes } from '../../../../node_modules/react';
export declare const Input: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<{
    placeholder?: string;
    id?: string;
    icon?: string;
    label: string;
    title?: string;
    value?: string;
    isLoading?: boolean;
    type: "email" | "file" | "number" | "password" | "tel" | "text" | "url";
    name?: string;
    disabled?: boolean;
    dataId?: string;
    iconAriaLabel?: string;
    ariaLabel?: string;
    isItToSearch?: boolean;
    autoComplete?: string;
} & InputHTMLAttributes<HTMLInputElement> & import('../../../../node_modules/react').RefAttributes<HTMLInputElement> & {
    dataId?: string;
}, "ref"> & import('../../../../node_modules/react').RefAttributes<unknown>>;
