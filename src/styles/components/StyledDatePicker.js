import styled from 'styled-components';

const StyledDatePicker = styled.div`
  .DateInput {
    margin: 0px;
  }

  .DateInput,
  .DateInput_input {
    width: 100px;
  }
  .DateInput_input {
    padding: 0;
  }

  .DateInput_input {
    font-size: 12px;
    height: 30px;
    font-weight: normal;
    line-height: 12px;
    color: #333333;
    text-align: center;
    border: 1px solid #ccc;
  }

  .DateInput_input__focused {
    outline: 0;
    background: #fff;
  }

  .DateRangePickerInput_arrow {
    color: #ccc;
    margin: 0 10px;
  }

  // Calendar arrow
  .DateInput_fang {
    margin-top: 1px;
  }

  // Calendar Day
  .CalendarDay {
    border: 0px !important;
    text-align: center;
    font-size: 12px;
  }

  .CalendarDay__selected_span {
    background: #719f1a;
    border: 1px solid #719f1a;
    color: #fff;
  }

  .CalendarDay__selected,
  .CalendarDay__selected:active,
  .CalendarDay__selected:hover {
    background: #719f1a;
    border: 1px solid #719f1a;
    color: #fff;
  }

  .CalendarDay__hovered_span {
    background: #719f1a;
    border: 1px solid #719f1a;
    color: #fff;
  }

  .DayPickerNavigation_button__horizontalDefault {
    position: absolute;
    top: 15px;
    line-height: 0.78;
    border-radius: 50%;
    padding: 6px;
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

  // Calendar Month
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

  .DayPickerNavigation_button__horizontalDefault {
    position: absolute;
    top: 18px;
    line-height: 0.78;
    border-radius: 0px;
    padding: 6px;
    width: 10px;
    height: 10px;
  }
  DateRangePicker_picker {
    top: 55px !important;
  }
`;

export {
  StyledDatePicker
};
