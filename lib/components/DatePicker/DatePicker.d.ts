import { default as React } from '../../../../node_modules/react';
import { DatePickerProps } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import { Theme } from '../../utils/theme';

type CommonProps = {
    lang?: 'en' | 'bg' | 'br' | 'be' | 'ca' | 'da' | 'de' | 'el' | 'es' | 'fi' | 'fr' | 'it' | 'nl' | 'pl' | 'pt' | 'sl' | 'sv' | 'tr' | 'us' | 'zh';
    dataId?: string;
    'data-testid'?: string;
    theme?: Theme;
};
export type AntdDatePickerProps = DatePickerProps & CommonProps;
export declare const AntdDatePicker: React.ForwardRefExoticComponent<Omit<AntdDatePickerProps, "dataId"> & Partial<{
    dataId?: string;
}> & React.RefAttributes<unknown>>;
export type AntdRangePickerProps = RangePickerProps & CommonProps;
export declare const AntdRangePicker: React.ForwardRefExoticComponent<Omit<AntdRangePickerProps, "dataId"> & Partial<{
    dataId?: string;
}> & React.RefAttributes<unknown>>;
type DatePickerType = {
    type: 'date' | 'range';
} & (AntdDatePickerProps | AntdRangePickerProps);
export declare const DatePicker: ({ type, ...props }: DatePickerType) => import("react/jsx-runtime").JSX.Element;
export {};
