import { RadioProps as AntRadioProps, RadioGroupProps as AntRadioGroupProps } from 'antd';
export type RadioProps = {
    dataId?: string;
} & AntRadioProps;
export type RadioGroupProps = {
    dataId?: string;
} & AntRadioGroupProps;
export declare const Radio: import('../../../../node_modules/react').ForwardRefExoticComponent<AntRadioProps & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
export declare const RadioGroup: import('../../../../node_modules/react').ForwardRefExoticComponent<AntRadioGroupProps & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
