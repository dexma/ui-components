import { default as React, HTMLAttributes, ReactNode } from '../../../../node_modules/react';
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
};
export type RadioFieldGroupProps = FieldGroupProps<string | number>;
export type CheckboxFieldGroupProps = FieldGroupProps<Array<string | number>>;
export declare const RadioFieldGroup: React.ForwardRefExoticComponent<Omit<{
    selectedValues: string | number;
    variant?: FieldGroupVariant;
    values: FieldGroupItem[];
    size?: ButtonSize;
    name?: string;
    vertical?: boolean;
    onChange?: (e: FieldGroupItem) => void;
    onFieldClick?: (e: FieldGroupItem) => void;
    dataId?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">, "dataId"> & Partial<{
    dataId?: string;
}> & React.RefAttributes<unknown>>;
export declare const CheckboxFieldGroup: React.ForwardRefExoticComponent<Omit<{
    selectedValues: (string | number)[];
    variant?: FieldGroupVariant;
    values: FieldGroupItem[];
    size?: ButtonSize;
    name?: string;
    vertical?: boolean;
    onChange?: (e: FieldGroupItem) => void;
    onFieldClick?: (e: FieldGroupItem) => void;
    dataId?: string;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onChange">, "dataId"> & Partial<{
    dataId?: string;
}> & React.RefAttributes<unknown>>;
export {};
