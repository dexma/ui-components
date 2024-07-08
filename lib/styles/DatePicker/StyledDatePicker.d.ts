import { AntdDatePickerProps, AntdRangePickerProps } from '../../components/DatePicker';

declare const StyledAntdDatePicker: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<((import('antd/es/date-picker/generatePicker').PickerProps<import('dayjs').Dayjs> & {
    status?: "" | "warning" | "error" | undefined;
    hashId?: string | undefined;
    popupClassName?: string | undefined;
    rootClassName?: string | undefined;
}) & import('../../../../node_modules/react').RefAttributes<import('../../../../node_modules/react').Component<import('antd/es/date-picker/generatePicker').PickerProps<import('dayjs').Dayjs> & {
    status?: "" | "warning" | "error" | undefined;
    hashId?: string | undefined;
    popupClassName?: string | undefined;
    rootClassName?: string | undefined;
}, unknown, any>>) & import('styled-components/dist/types').BaseObject, AntdDatePickerProps>> & string & Omit<import('antd/es/date-picker').DatePickerType, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
declare const StyledAntdRangePicker: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<((import('antd/es/date-picker/generatePicker').RangePickerProps<import('dayjs').Dayjs> & {
    dropdownClassName?: string | undefined;
    popupClassName?: string | undefined;
}) & import('../../../../node_modules/react').RefAttributes<import('../../../../node_modules/react').Component<import('antd/es/date-picker/generatePicker').RangePickerProps<import('dayjs').Dayjs> & {
    dropdownClassName?: string | undefined;
    popupClassName?: string | undefined;
}, unknown, any>>) & import('styled-components/dist/types').BaseObject, AntdRangePickerProps>> & string & Omit<import('antd/es/date-picker/generatePicker/interface').PickerComponentClass<import('antd/es/date-picker/generatePicker').RangePickerProps<import('dayjs').Dayjs> & {
    dropdownClassName?: string | undefined;
    popupClassName?: string | undefined;
}, unknown>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
declare const DropdownDatePickerStyles: import('../../../../node_modules/react').NamedExoticComponent<import('styled-components').ExecutionProps & object>;
export { StyledAntdDatePicker, StyledAntdRangePicker, DropdownDatePickerStyles };
