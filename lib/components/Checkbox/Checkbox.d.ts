import { default as React } from '../../../../node_modules/react';
import { CheckboxProps as AntCheckboxProps } from 'antd';
export type CheckboxProps = {
    dataId?: string;
} & AntCheckboxProps;
export declare const Checkbox: React.ForwardRefExoticComponent<AntCheckboxProps & {
    dataId?: string;
} & React.RefAttributes<unknown>>;
