import { default as React, ReactNode } from '../../../../node_modules/react';

export declare const Input: React.ForwardRefExoticComponent<Omit<Omit<{
    placeholder?: string;
    id?: string;
    icon?: string;
    label?: string | ReactNode;
    title?: string;
    value?: string;
    isLoading?: boolean;
    type?: string;
    name?: string;
    disabled?: boolean;
    dataId?: string;
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>, "dataId"> & Partial<{
    dataId?: string;
}>, "ref"> & React.RefAttributes<unknown>>;
