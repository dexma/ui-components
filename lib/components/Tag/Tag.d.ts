import { HTMLAttributes } from '../../../../node_modules/react';
export type TagProps = {
    dataId?: string;
    color?: string;
    icon?: string;
    closable?: boolean;
    onClose?: () => void;
    type?: 'normal' | 'rounded';
    variant?: 'primary' | 'outline';
    iconAriaLabel?: string;
} & HTMLAttributes<HTMLDivElement>;
export declare const Tag: import('../../../../node_modules/react').ForwardRefExoticComponent<{
    dataId?: string;
    color?: string;
    icon?: string;
    closable?: boolean;
    onClose?: () => void;
    type?: "normal" | "rounded";
    variant?: "primary" | "outline";
    iconAriaLabel?: string;
} & HTMLAttributes<HTMLDivElement> & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
