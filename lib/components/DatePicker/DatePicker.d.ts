import { DatePickerProps } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import { Theme } from '../../utils/theme';
type CommonProps = {
    lang?: 'en' | 'bg' | 'br' | 'be' | 'ca' | 'da' | 'de' | 'el' | 'es' | 'fi' | 'fr' | 'it' | 'nl' | 'pl' | 'pt' | 'sl' | 'sv' | 'tr' | 'us' | 'zh';
    dataId?: string;
    'data-testid'?: string;
    theme?: Theme;
    label?: string;
    clearDateAriaLabel?: string;
    toIconAriaLabel?: string;
    calendarIconAriaLabel: string;
    prevPageIconAriaLabel: string;
    nextPageIconAriaLabel: string;
    superPrevPageIconAriaLabel: string;
    superNextPageIconAriaLabel: string;
};
export type AntdDatePickerProps = DatePickerProps & CommonProps;
export declare const AntdDatePicker: import('../../../../node_modules/react').ForwardRefExoticComponent<(AntdDatePickerProps & {
    dataId?: string;
}) & import('../../../../node_modules/react').RefAttributes<unknown>>;
export type AntdRangePickerProps = RangePickerProps & CommonProps;
export declare const AntdRangePicker: import('../../../../node_modules/react').ForwardRefExoticComponent<(AntdRangePickerProps & {
    dataId?: string;
}) & import('../../../../node_modules/react').RefAttributes<unknown>>;
type DatePickerType = {
    type: 'date' | 'range';
} & (AntdDatePickerProps | AntdRangePickerProps);
export declare const DatePicker: ({ type, ...props }: DatePickerType) => import("react/jsx-runtime").JSX.Element;
export {};
