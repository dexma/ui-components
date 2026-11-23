import { HTMLAttributes } from '../../../../node_modules/react';
import { TagVariant } from '../../styles/Tag/StyledTag';
export type TagProps = {
    dataId?: string;
    /** Theme colour key, hex value, or a Tag preset: `red`, `green`, `gray`, `success`, `warning`, `error`. */
    color?: string;
    icon?: string;
    closable?: boolean;
    onClose?: () => void;
    type?: 'normal' | 'rounded';
    variant?: TagVariant;
    iconAriaLabel?: string;
} & HTMLAttributes<HTMLDivElement>;
export declare const Tag: import('../../../../node_modules/react').ForwardRefExoticComponent<{
    dataId?: string;
    /** Theme colour key, hex value, or a Tag preset: `red`, `green`, `gray`, `success`, `warning`, `error`. */
    color?: string;
    icon?: string;
    closable?: boolean;
    onClose?: () => void;
    type?: "normal" | "rounded";
    variant?: TagVariant;
    iconAriaLabel?: string;
} & HTMLAttributes<HTMLDivElement> & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
