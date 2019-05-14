import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import styled from 'styled-components';
import { GeneralPropTypes } from 'utils/propTypes';
import omit from 'lodash/omit';

import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { formatDate, parseDate } from 'react-day-picker/moment';

const propTypes = {
  ...GeneralPropTypes,
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  stateDateWrapper: PropTypes.func
};

const ISO_FORMAT = 'DD-MM-YYYY';
const NUMBER_OF_MONTHS = 3;

const defaultProps = {
  classNamePrefix: 'date-picker',
  stateDateWrapper: date => date
};

const StyledDatePicker = styled.div`
.CalendarDay__selected_span {
  background: #719f1a;
  color: #fff;
}
.DateRangePickerInput {
  background: none !important;
}
.DateRangePickerInput_arrow {
  width: 20px;
}
.DateRangePickerInput_arrow .DateRangePickerInput_arrow_svg {
  display: none;
}
.DateRangePicker .DateInput_input {
  text-align: left;
  margin-right: 10px;
}
.CalendarDay__highlighted_calendar:hover {
  background: blue;

}
.CalendarDay__hovered_span,
.CalendarDay__hovered_span:hover {
  background: #719f1a;
  border: 1px solid #719f1a;
  color: white
}
.CalendarDay__hovered_span:active {
  background: #719f1a;
  border: 1px solid #719f1a;
  color: white
}

.DateInput_input__focused {
  border-bottom: 2px solid #719f1a;
}
.CalendarDay {
  font-size: 11px;
}
.CalendarDay__default {
  border: white 1px solid;
}

.DayPickerNavigation_button__default {
  transform:scale(0.7)
}
.DateInput {
  margin-right: 10px;
}
.DateInput, .DateInput_input {
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
  text-shadow: 0 1px 0px rgba(255, 255, 255, 0.75);
}

.DayPickerNavigation_leftButton__horizontal {
  left: 0;
}
.DayPickerNavigation_rightButton__horizontal {
  right: 0;
}
.CalendarMonth_caption {
  font-size: 16px;
  padding-top: 27px;
  text-transform: capitalize;
}

.DateRangePicker_picker{
  z-index: 999;
}

.range-datepicker{
  input:focus{
    box-shadow: none!important;
  }
}

.DayPicker_weekHeader_li{
  text-transform: capitalize;
}`;


class DatePicker extends Component {
  constructor(props) {
    super(props);

    let focusedInput = null;
    if (props.autoFocus) {
      focusedInput = START_DATE;
    } else if (props.autoFocusEndDate) {
      focusedInput = END_DATE;
    }

    this.state = {
      focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    const { stateDateWrapper } = this.props;
    this.setState({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate),
    });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }
  render() {
    const { focusedInput, startDate, endDate } = this.state;
    // autoFocus, autoFocusEndDate, initialStartDate and initialEndDate are helper props for the
    // example wrapper but are not props on the SingleDatePicker itself and
    // thus, have to be omitted.
    const props = omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'stateDateWrapper',
    ]);
    return (
      <StyledDatePicker>
        <div>
          <DateRangePicker
            {...props}
            onDatesChange={this.onDatesChange}
            onFocusChange={this.onFocusChange}
            focusedInput={focusedInput}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </StyledDatePicker>
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default DatePicker;
