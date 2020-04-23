import styled from 'styled-components';
import {
  border,
  borderRadius,
  backgroundColor,
  boxShadow,
  fontColor,
  fontWeightSemiBold,
  iconColor,
  dataPickerHeight,
  dataPickerFontSize,
  gray100,
  primaryColor,
  primaryColorSvg,
  white,
  backgroundColorActive,
} from 'styles/selectors';

import { transparentize } from 'polished';

import { StyledSelect } from 'styles/components/StyledSelect';

const StyledDatePicker = styled.div`

    display: inline-flex;
    flex-direction: row;

  ${StyledSelect}{
    .select-styled__control{
      border-radius: ${props => {
        if (props.withSelect) {
          return `0 ${borderRadius(props)} ${borderRadius(props)} 0`;
        }
        return borderRadius(props);
      }};    
    }
  }

  .date-range {
    width: 215px;
    margin-right: -1px;
    .DateInput {
      width: calc(50% - 25px);
      height: 100%;
      background: transparent;
    }
    
    .DateRangePicker{
      display: block;
    }

    .DateRangePickerInput {
      align-items: center;
      background-color: hsl(0, 0%, 100%);
      border: ${border};
      border-radius: ${props => {
        if (props.withSelect) {
          return `${borderRadius(props)} 0 0 ${borderRadius(props)}`;
        }
        return borderRadius(props);
      }};
     cursor: default;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      height: ${dataPickerHeight};
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

    .DateInput_input {
      font-size: ${dataPickerFontSize};
      color: ${fontColor};
      box-sizing: border-box;
      text-align: center;
      padding: 0;
      outline: none;
      width: 100%;
      height: 100%;
      display: flex;
      align-content: center;
      align-items: center;
      font-weight: normal;
    background-color: transparent;
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
      color: ${primaryColor};
      font-weight: ${fontWeightSemiBold};
      border-color: ${primaryColor};
    }
    .DateInput_input + .DateInput_input {
      margin-left: 0;
    }

    .DateInput_fang {
      display: none;
    }

    .CalendarDay {
      border: 0px !important;
      text-align: center;
      font-size: 0.75rem;
    }

    .CalendarDay__default:hover {
      background-color: ${backgroundColor};
      border: 1px solid ${white};
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='25'%3E%3Ccircle cx='12' cy='12' r='11.715' stroke='%23${primaryColorSvg}' stroke-width='1' fill='white' /%3E%3C/svg%3E");
      color: ${fontColor};
    }

    .CalendarDay__selected:hover,
    .CalendarDay__selected_span:hover {
      background-color: ${props =>
        transparentize(0.7, backgroundColorActive(props))};
      border: 1px solid ${white};
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='25'%3E%3Ccircle cx='12' cy='12' r='11.715' stroke='%23${primaryColorSvg}' stroke-width='1' fill='white' /%3E%3C/svg%3E");
      color: ${fontColor};
    }

    .CalendarDay__selected,
    .CalendarDay__selected:active,
    .CalendarDay__selected_span,
    .CalendarDay__hovered_span,
    .CalendarDay__selected_span:active {
      background: ${props => transparentize(0.7, backgroundColorActive(props))};
      border: 1px solid ${props =>
        transparentize(0.7, backgroundColorActive(props))};
      color: ${fontColor};
    }

    .CalendarDay__selected_start,
    .CalendarDay__selected_end {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24' width='25'%3E%3Ccircle cx='12' cy='12' r='11.715' stroke='black' stroke-width='0' fill='%23${primaryColorSvg}' /%3E%3C/svg%3E");
      border-radius: 50%;
      background-color: ${props =>
        transparentize(0.7, backgroundColorActive(props))};
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
      margin-top: 0px;
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
    
    .DayPicker_weekHeader_li{
          text-transform: capitalize;
    }

    .CalendarMonth_caption {
      font-size: ${dataPickerFontSize};
      padding-bottom: 35px;
      color: ${fontColor};
      text-transform: capitalize;
    }

    .DayPickerNavigation_svg__horizontal {
      height: 10px;
      width: 10px;
      fill: ${iconColor};
      display: block;
    }

    .DayPicker__withBorder {
      box-shadow: ${boxShadow};
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
    width: 160px;
    .dexma-select__control {
      border-radius: 0px ${borderRadius} ${borderRadius} 0px;
      margin-left: -1px;
    }
  }
`;

export { StyledDatePicker };
