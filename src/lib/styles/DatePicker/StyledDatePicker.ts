import { DatePicker as AntdDatePicker } from 'antd';
import { darken, lighten } from 'polished';
import styled, { createGlobalStyle, css } from 'styled-components';
import { primaryColor } from '@utils/selectors';
import { AntdDatePickerProps, type AntdRangePickerProps } from '@components/DatePicker';

const { RangePicker } = AntdDatePicker;

const getStylesInputAntdPicker = (props: AntdRangePickerProps | AntdDatePickerProps) =>
    // Input
    css`
        &:hover,
        &:focus {
            border-color: ${primaryColor(props.theme)};
            border-right-width: 1px;
            box-shadow: 0px 0px 5px ${darken(0.1, props.theme?.primary)};
        }
        &.ant-picker-focused {
            border-color: ${primaryColor(props.theme)};
            border-right-width: 1px;
            box-shadow: 0px 0px 5px ${darken(0.1, props.theme?.primary)};
        }
    `;

const dropdownStyles = () => css`
    // Dropdown menu
    .ant-picker-dropdown {
        .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
        .ant-picker-cell-in-view.ant-picker-cell-range-start .ant-picker-cell-inner,
        .ant-picker-cell-in-view.ant-picker-cell-range-end .ant-picker-cell-inner {
            border-radius: 2px;
        }
    }

    // Today cell
    .ant-picker-dropdown .ant-picker-cell-in-view.ant-picker-cell-today .ant-picker-cell-inner::before {
        border-radius: 2px;
    }
    // Today footer

    .ant-picker-dropdown .ant-picker-today-btn {
        color: ${(props) => props.theme.primary};
    }

    // Now button
    .ant-picker-now-btn {
        color: ${(props) => props.theme.primary};
    }

    // Preset Tags
    .ant-picker-presets > ul > li {
        color: ${(props) => props.theme.primary} !important;
        background: ${(props) => lighten(0.5, props.theme.primary)} !important;
        border-color: ${(props) => props.theme.primary} !important;
        border: 1px solid;
    }
`;

const StyledAntdDatePicker = styled(AntdDatePicker) <AntdDatePickerProps>`
    ${getStylesInputAntdPicker}
`;
const StyledAntdRangePicker = styled(RangePicker) <AntdRangePickerProps>`
    ${getStylesInputAntdPicker}
`;
const DropdownDatePickerStyles = createGlobalStyle`
    ${dropdownStyles};
`;

export { StyledAntdDatePicker, StyledAntdRangePicker, DropdownDatePickerStyles };
