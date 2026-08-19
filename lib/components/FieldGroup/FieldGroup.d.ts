import { HTMLAttributes, ReactNode } from '../../../../node_modules/react';
import { ButtonSize } from '../index.ts';
export declare enum FieldGroupType {
    RADIO = "radio",
    CHECKBOX = "checkbox"
}
export declare enum FieldGroupVariant {
    JOINED = "joined",
    SPLIT = "split",
    CUSTOM = "custom"
}
type FieldGroupProps<V> = {
    selectedValues: V;
    variant?: FieldGroupVariant;
    values: FieldGroupItem[];
    size?: ButtonSize;
    name?: string;
    vertical?: boolean;
    onChange?: (e: FieldGroupItem) => void;
    onFieldClick?: (e: FieldGroupItem) => void;
    dataId?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;
export type FieldGroupItem = {
    id: string;
    label?: ReactNode;
    icon?: string;
    name?: string;
    uniqueId?: string;
    value: string;
    tooltip?: string;
    isDisabled?: boolean;
    iconAriaLabel?: string;
};
export type RadioFieldGroupProps = FieldGroupProps<string | number>;
export type CheckboxFieldGroupProps = FieldGroupProps<Array<string | number>>;
export declare const RadioFieldGroup: import('../../../../node_modules/react').ForwardRefExoticComponent<{
    selectedValues: string | number;
    variant?: FieldGroupVariant;
    values: FieldGroupItem[];
    size?: ButtonSize;
    name?: string;
    vertical?: boolean;
    onChange?: (e: FieldGroupItem) => void;
    onFieldClick?: (e: FieldGroupItem) => void;
    dataId?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
export declare const CheckboxFieldGroup: import('../../../../node_modules/react').ForwardRefExoticComponent<{
    selectedValues: (string | number)[];
    variant?: FieldGroupVariant;
    values: FieldGroupItem[];
    size?: ButtonSize;
    name?: string;
    vertical?: boolean;
    onChange?: (e: FieldGroupItem) => void;
    onFieldClick?: (e: FieldGroupItem) => void;
    dataId?: string;
} & Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
export {};
