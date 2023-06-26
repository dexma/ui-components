import { DatePicker as AntdPicker } from 'antd';
import { darken, lighten } from 'polished';
import styled, { createGlobalStyle, css } from 'styled-components';
import { primaryColor } from '../selectors';

const { RangePicker } = AntdPicker;

const getStylesInputAntdPicker = () => {
  // Input
  return css`
    &:hover,
    &:focus {
      border-color: ${primaryColor};
      border-right-width: 1px;
      box-shadow: 0px 0px 5px ${props => darken(0.1, props.theme.primary)};
    }
    &.ant-picker-focused {
      border-color: ${primaryColor};
      border-right-width: 1px;
      box-shadow: 0px 0px 5px ${props => darken(0.1, props.theme.primary)};
    }
  `;
};

const dropdownStyles = () => {
  return css`
    // Dropdown menu
    .ant-picker-dropdown {
      .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner,
      .ant-picker-cell-in-view.ant-picker-cell-range-start
        .ant-picker-cell-inner,
      .ant-picker-cell-in-view.ant-picker-cell-range-end
        .ant-picker-cell-inner {
        border-radius: 2px;
      }
    }

    // Today cell
    .ant-picker-dropdown
      .ant-picker-cell-in-view.ant-picker-cell-today
      .ant-picker-cell-inner::before {
      border-radius: 2px;
    }
    // Today footer

    .ant-picker-dropdown .ant-picker-today-btn {
      color: ${props => props.theme.primary};
    }

    // Now button
    .ant-picker-now-btn {
      color: ${props => props.theme.primary};
    }

    // Preset Tags

    .ant-picker-presets > ul > li {
      color: ${props => props.theme.primary} !important;
      background: ${props => lighten(0.5, props.theme.primary)} !important;
      border-color: ${props => props.theme.primary} !important;
      border: 1px solid;
    }
  `;
};

const StyledAntdDatePicker = styled(AntdPicker)`
  ${getStylesInputAntdPicker}
`;
const StyledAntdRangePicker = styled(RangePicker)`
  ${getStylesInputAntdPicker}
`;
const DropdownDatePickerStyles = createGlobalStyle`
    ${dropdownStyles};
`;

export {
  StyledAntdDatePicker,
  StyledAntdRangePicker,
  DropdownDatePickerStyles,
};
