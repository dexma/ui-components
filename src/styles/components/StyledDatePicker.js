import styled from 'styled-components';

const StyledDatePicker = styled.div`
  display: inline-block;
  width: 215px;
  float: left;
  .DateInput {
    width: calc(50% - 25px);
    background: transparent;
  }

  .DateRangePickerInput {
    align-items: center;
    background-color: hsl(0, 0%, 100%);
    border-color: hsl(0, 0%, 80%);
    border-radius: 3px;
    border-style: solid;
    border-width: 1px;
    cursor: default;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: ${props => props.theme.globalHeightElements};
    outline: 0 !important;
    position: relative;
    transition: all 100ms;
    box-sizing: border-box;
    padding: 0 10px;
  }

  .with-select {
    .DateRangePickerInput {
      border-radius: 3px 0px 0px 3px;
    }
  }

  .DateRangePickerInput_calendarIcon {
    background: 0 0;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
    padding: 0px;
    margin: 0;
    outline: none;
    width: 25px;
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
    font-size: 12px;
    font-weight: normal;
    line-height: 12px;
    color: #333333;
    border: 0px;
    text-align: center;
    padding: 0;
    outline: none;
    width: 100%;
  }

  .DateRangePickerInput_arrow {
    display: inline-block;
    vertical-align: middle;
    color: #484848;
    width: 10px;
    text-align: center;
  }

  .DateInput_input__focused {
    outline: 0;
    background: #fff;
  }
  .DateInput_input + .DateInput_input {
    margin-top: -1px;
    margin-left: 0;
  }

  .DateInput_fang {
    margin-top: -18px;
  }

  .CalendarDay {
    border: 0px !important;
    text-align: center;
    font-size: 12px;
  }

  .CalendarDay__default:hover {
    background: #ccc;
    color: #000000;
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: #719f1a;
    border: 1px solid #719f1a;
    color: #fff;
  }

  .CalendarDay__selected_span,
  .CalendarDay__selected_span:active,
  .CalendarDay__selected_span:hover {
    background: #4a840f;
    border: 1px double #4a840f;
    color: #fff;
  }

  .CalendarDay__hovered_span {
    background: #719f1a;
    border: 1px solid #719f1a;
    color: #fff;
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
    color: #000;
  }

  .CalendarMonth_caption {
    font-size: 13px;
    padding-bottom: 35px;
  }

  .DayPickerNavigation_svg__horizontal {
    height: 10px;
    width: 10px;
    fill: #5e5e5e;
    display: block;
  }

  .DayPicker__withBorder {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.07);
    border-radius: 3px;
  }
  .dexma-icon {
    color: #333;
  }
`;

export { StyledDatePicker };
