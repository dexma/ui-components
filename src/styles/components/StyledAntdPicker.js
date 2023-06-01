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
        background: ${props => lighten(0.1, props.theme.primary)};
        border-radius: 2px;
      }
    }
    // Range picker active input
    .ant-picker-range .ant-picker-active-bar {
      background: ${props => lighten(0.1, props.theme.primary)};
    }

    // Range picker periods
    // Background for selected cells
    .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single)::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single)::before {
      background: ${props => lighten(0.5, props.theme.primary)};
    }
    .ant-picker-cell-in-view.ant-picker-cell-in-range::before {
      background: ${props => lighten(0.5, props.theme.primary)};
    }
    // Background for periods selected
    .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-start.ant-picker-cell-range-hover::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-end.ant-picker-cell-range-hover::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-start:not(.ant-picker-cell-range-start-single).ant-picker-cell-range-hover-start::before,
    .ant-picker-cell-in-view.ant-picker-cell-range-end:not(.ant-picker-cell-range-end-single).ant-picker-cell-range-hover-end::before,
    .ant-picker-panel
      > :not(.ant-picker-date-panel)
      .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start::before,
    .ant-picker-panel
      > :not(.ant-picker-date-panel)
      .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end::before {
      background: ${props => lighten(0.25, props.theme.primary)};
    }
    .ant-picker-date-panel
      .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-start
      .ant-picker-cell-inner::after,
    .ant-picker-date-panel
      .ant-picker-cell-in-view.ant-picker-cell-in-range.ant-picker-cell-range-hover-end
      .ant-picker-cell-inner::after {
      background: ${props => lighten(0.25, props.theme.primary)};
    }
    // Borders for periods not selected or hovered
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-start:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end)::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-end:not(.ant-picker-cell-in-range):not(.ant-picker-cell-range-start):not(.ant-picker-cell-range-end)::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start-single::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-start.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-end-near-hover::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-start.ant-picker-cell-range-end.ant-picker-cell-range-start-near-hover::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-end.ant-picker-cell-range-end-single::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover:not(.ant-picker-cell-in-range)::after {
      border-top: 1px dashed ${props => lighten(0.5, props.theme.primary)};
      border-bottom: 1px dashed ${props => lighten(0.5, props.theme.primary)};
    }

    tr
      > .ant-picker-cell-in-view.ant-picker-cell-range-hover:first-child::after,
    tr
      > .ant-picker-cell-in-view.ant-picker-cell-range-hover-end:first-child::after,
    .ant-picker-cell-in-view.ant-picker-cell-start.ant-picker-cell-range-hover-edge-start.ant-picker-cell-range-hover-edge-start-near-range::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-start:not(.ant-picker-cell-range-hover-edge-start-near-range)::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-start::after {
      border-left: 1px dashed ${props => lighten(0.5, props.theme.primary)};
    }

    tr > .ant-picker-cell-in-view.ant-picker-cell-range-hover:last-child::after,
    tr
      > .ant-picker-cell-in-view.ant-picker-cell-range-hover-start:last-child::after,
    .ant-picker-cell-in-view.ant-picker-cell-end.ant-picker-cell-range-hover-edge-end.ant-picker-cell-range-hover-edge-end-near-range::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-edge-end:not(.ant-picker-cell-range-hover-edge-end-near-range)::after,
    .ant-picker-cell-in-view.ant-picker-cell-range-hover-end::after {
      border-right: 1px dashed ${props => lighten(0.5, props.theme.primary)};
    }

    // Header dropdown
    .ant-picker-header-view button:hover {
      color: ${props => lighten(0.1, props.theme.primary)};
    }

    // Today cell
    .ant-picker-dropdown
      .ant-picker-cell-in-view.ant-picker-cell-today
      .ant-picker-cell-inner::before {
      border: 1px solid ${props => lighten(0.1, props.theme.primary)};
      border-radius: 2px;
    }
    // Today footer

    .ant-picker-dropdown .ant-picker-today-btn {
      color: ${props => props.theme.primary};
    }

    // Range link picker
    .ant-picker-ranges > li > a {
      color: ${props => props.theme.primary};
    }
    .ant-picker-ranges > li > button,
    .ant-picker-ranges > li > button:hover {
      background: ${props => props.theme.primary};
      border-color: ${props => props.theme.primary};
    }

    // Week selected
    .ant-picker-week-panel-row-selected td,
    .ant-picker-week-panel-row-selected:hover td {
      background: ${props => lighten(0.1, props.theme.primary)};
    }

    .ant-picker-dropdown
      .ant-picker-week-panel-row-selected
      td.ant-picker-cell:before {
      background: ${props => lighten(0.1, props.theme.primary)};
    }

    .ant-picker-dropdown
      .ant-picker-week-panel-row-selected
      td.ant-picker-cell:before {
      background: ${props => lighten(0.1, props.theme.primary)};
    }

    // Time picker
    .ant-picker-time-panel-column
      > li.ant-picker-time-panel-cell-selected
      .ant-picker-time-panel-cell-inner {
      background: ${props => lighten(0.5, props.theme.primary)};
    }

    // Preset ranges buttons
    .ant-picker-preset {
      .ant-tag {
        color: ${props => props.theme.primary} !important;
        background: ${props => lighten(0.5, props.theme.primary)} !important;
        border-color: ${props => props.theme.primary} !important;
      }
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
