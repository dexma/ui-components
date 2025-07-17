import { CheckboxProps as AntCheckboxProps } from 'antd';
export type CheckboxProps = {
    dataId?: string;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
} & AntCheckboxProps;
export declare const Checkbox: import('../../../../node_modules/react').ForwardRefExoticComponent<{
    dataId?: string;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
} & AntCheckboxProps & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
