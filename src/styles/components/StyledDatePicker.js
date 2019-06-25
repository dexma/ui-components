import styled from 'styled-components';
import {
  border,
  borderRadius,
  backgroundColor,
  backgroundColorActive,
  backgroundColorSelected,
  fontSize,
  fontColor,
  iconColor,
  componentHeight,
} from 'styles/selectors';

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
      border: ${border};
      border-radius: ${borderRadius};
      cursor: default;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      min-height: ${componentHeight};
      outline: 0 !important;
      position: relative;
      transition: all 100ms;
      box-sizing: border-box;
      padding: 0 10px;
    }

    .DateRangePickerInput_calendarIcon {
      background: 0 0;
      border: 0;
      color: ${iconColor};
      font: inherit;
      line-height: normal;
      overflow: visible;
      cursor: pointer;
      vertical-align: middle;
      padding: 0px;
      margin: 0;
      outline: none;
      width: 15px;
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
      font-size: ${fontSize};
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
      margin-top: -21px;
    }

    .CalendarDay {
      border: 0px !important;
      text-align: center;
      font-size: ${fontSize};
    }

    .CalendarDay__default:hover {
      background: ${backgroundColorSelected};
      color: ${fontColor};
    }

    .CalendarDay__selected,
    .CalendarDay__selected:active,
    .CalendarDay__selected:hover,
    .CalendarDay__hovered_span,
    .CalendarDay__selected_span,
    .CalendarDay__selected_span:active,
    .CalendarDay__selected_span:hover {
      background: ${backgroundColorActive};
      border: 1px solid ${backgroundColorActive};
      color: ${backgroundColor};
    }

    .DateRangePicker_picker {
      top: 50px !important;
    }

    .DayPickerNavigation_button__horizontalDefault {
      position: absolute;
      top: 18px;
      line-height: 0.78;
      border-radius: 0px;
      padding: 4px;
      width: 20px;
      height: 20px;
    }
    .DayPickerNavigation_leftButton__horizontalDefault {
      left: 15px;
    }
    .DayPickerNavigation_rightButton__horizontalDefault {
      right: 15px;
    }

    .DayPicker_weekHeader {
      top: 50px;
    }

    .CalendarMonth_caption {
      font-size: ${fontSize};
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
      border: ${border};
      background-color: ${backgroundColor};
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
