import { default as React, HTMLAttributes } from '../../../../node_modules/react';

export type TagProps = {
    dataId?: string;
    color?: string;
    icon?: string;
    closable?: boolean;
    onClose?: () => void;
    type?: 'normal' | 'rounded';
    variant?: 'primary' | 'outline';
} & HTMLAttributes<HTMLDivElement>;
export declare const Tag: React.ForwardRefExoticComponent<Omit<{
    dataId?: string;
    color?: string;
    icon?: string;
    closable?: boolean;
    onClose?: () => void;
    type?: "normal" | "rounded";
    variant?: "primary" | "outline";
} & React.HTMLAttributes<HTMLDivElement>, "dataId"> & Partial<{
    dataId?: string;
}> & React.RefAttributes<unknown>>;
