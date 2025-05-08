import { CheckboxProps as AntCheckboxProps } from 'antd';
export type CheckboxProps = {
    dataId?: string;
} & AntCheckboxProps;
export declare const Checkbox: import('../../../../node_modules/react').ForwardRefExoticComponent<AntCheckboxProps & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
