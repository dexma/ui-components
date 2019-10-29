import styled from 'styled-components';
import {
  border,
  borderRadius,
  backgroundColor,
  fontSize,
  fontColor,
  iconColor,
  dataPickerHeight,
  dataPickerFontSize,
  gray100,
  primaryColor,
  primaryColorSvg,
  white,
} from 'styles/selectors';

import { transparentize } from 'polished';

const StyledDatePicker = styled.div`
  .date-range {
    display: inline-block;
    width: 215px;
    float: left;

    &.with-select {
      .DateRangePickerInput {
        border-radius: ${borderRadius} 0px 0px ${borderRadius};
      }
    }

    .DateInput {
      width: calc(50% - 25px);
      background: transparent;
    }

    .DateRangePickerInput {
      align-items: center;
      background-color: hsl(0, 0%, 100%);
      border: ${props => {
        if (props.focusedInput) {
          return `1px solid ${primaryColor(props)}`;
        }
        return border(props);
      }};
      border-radius: ${borderRadius};
      cursor: default;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      min-height: ${dataPickerHeight};
      outline: 0 !important;
      position: relative;
      transition: all 100ms;
      box-sizing: border-box;
      padding: 0 10px;
    }

    .DateRangePickerInput_calendarIcon {
      background: 0 0;
      border: 0;
         color: ${props => {
           if (props.focusedInput) {
             return primaryColor(props);
           }
           return iconColor(props);
         }};
      font: inherit;
      line-height: normal;
      overflow: visible;
      cursor: pointer;
      vertical-align: middle;
      padding: 0px;
      margin: 0;
      outline: none;
      width: 20px;
      display: flex;
      align-content: center;
      align-items: center;
    }

    .DateRangePickerInput > div:first-child input {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
      margin-right: -0.5px;
    }

    .DateRangePickerInput > div:last-child input {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
      margin-left: -0.5px;
    }

    .DateInput {
      &:first-of-type {
        .DateInput_input {
        }
      }
      &:last-of-type {
        .DateInput_input {
        }
      }
    }

    .DateInput_input {
      font-size: ${dataPickerFontSize};
      font-weight: normal;
      line-height: ${fontSize};
      color: ${fontColor};
      border: 0px;
      text-align: center;
      padding: 0;
      outline: none;
      width: 100%;
      display: flex;
      align-content: center;
      align-items: center;
    }

    .DateRangePickerInput_arrow {
      vertical-align: middle;
      color: ${iconColor};
      display: flex;
      align-content: center;
      align-items: center;
      text-align: center;
    }

    .DateInput_input__focused {
      outline: 0;
      background: ${backgroundColor};
    }
    .DateInput_input + .DateInput_input {
      margin-top: -1px;
      margin-left: 0;
    }

    .DateInput_fang {
      display: none;
    }

    .CalendarDay {
      border: 0px !important;
      text-align: center;
      font-size: ${dataPickerFontSize};
    }

    .CalendarDay__default:hover {
      background-color: ${backgroundColor};
      border: 1px solid ${white};
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='25'%3E%3Ccircle cx='12' cy='12' r='11.715' stroke='%23${primaryColorSvg}' stroke-width='1' fill='white' /%3E%3C/svg%3E");
      color: ${fontColor};
    }

    .CalendarDay__selected:hover,
    .CalendarDay__selected_span:hover {
      background-color: ${props => transparentize(0.7, primaryColor(props))};
      border: 1px solid ${white};
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='25'%3E%3Ccircle cx='12' cy='12' r='11.715' stroke='%23${primaryColorSvg}' stroke-width='1' fill='white' /%3E%3C/svg%3E");
      color: ${fontColor};
    }

    .CalendarDay__selected,
    .CalendarDay__selected:active,
    .CalendarDay__selected_span,
    .CalendarDay__hovered_span,
    .CalendarDay__selected_span:active {
      background: ${props => transparentize(0.7, primaryColor(props))};
      border: 1px solid ${props => transparentize(0.7, primaryColor(props))};
      color: ${fontColor};
    }

    .CalendarDay__selected_start,
    .CalendarDay__selected_end {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='25'%3E%3Ccircle cx='12' cy='12' r='11.715' stroke='black' stroke-width='0' fill='%23${primaryColorSvg}' /%3E%3C/svg%3E");
      border-radius: 50%;
      background-color: ${props => transparentize(0.7, primaryColor(props))};
      color: ${white};
    }

    .CalendarDay__selected_start {
      &.CalendarDay__selected_end {
        background-color: ${backgroundColor};
      }
    }

    .CalendarDay__selected_end {
      &.CalendarDay__selected_start {
        background-color: ${backgroundColor};
      }
    }

    .CalendarDay__selected_start {
      border-radius: 50% 0 0 50%;
    }

    .CalendarDay__selected_end {
      border-radius: 0 50% 50% 0;
    }

    .DateRangePicker_picker {
      top: ${dataPickerHeight}!important;
    }

    .DayPickerNavigation_button__horizontal {
      position: absolute;
      top: 18px;
      line-height: 0.78;
      width: 28px;
      height: 28px;
      border: none;
      border-radius: 50%;
      padding: 0;
      background-color: ${gray100};
      text-align: center;
      display: flex;
      align-content: center;
      align-items: center;
      justify-content: center;
      &:first-child {
        left: 15px;
      }
      &:last-child {
        right: 15px;
      }
    }

    .DayPicker_weekHeader {
      top: 50px;
    }

    .CalendarMonth_caption {
      font-size: ${dataPickerFontSize};
      padding-bottom: 35px;
      color: ${fontColor};
    }

    .DayPickerNavigation_svg__horizontal {
      height: 10px;
      width: 10px;
      fill: ${iconColor};
      display: block;
    }

    .DayPicker__withBorder {
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
      border-radius: 3px;
    }

    .DayPickerNavigation_button__default {
      border: none;
      border-radius: 50%;
      padding: 0;
      background-color: ${gray100};
    }

    .DayPicker_weekHeader,
    .dexma-icon {
      color: ${iconColor};
    }
  }

  .select {
    display: inline-block;
    width: 160px;
    float: left;
    .dexma-select__control {
      border-radius: 0px ${borderRadius} ${borderRadius} 0px;
      margin-left: -1px;
    }
  }
`;

export { StyledDatePicker };
