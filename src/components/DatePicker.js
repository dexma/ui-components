import React, { Component } from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { GeneralPropTypes } from 'utils/propTypes';
import omit from 'lodash/omit';
import 'react-dates/initialize';
import { DateRangePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { StyledDatePicker } from 'styles/components/StyledDatePicker';

const ISO_FORMAT = 'DD-MM-YYYY';
const NUMBER_OF_MONTHS = 3;
const START_DATE = 'startDate';
const END_DATE = 'endDate';
const DAY_SIZE = 20;

const propTypes = {
  ...GeneralPropTypes,
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  stateDateWrapper: PropTypes.func,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
};

const defaultProps = {
  autoFocus: false,
  autoFocusEndDate: false,
  stateDateWrapper: date => date,
  startDateId: START_DATE,
  endDateId: END_DATE,
  numberOfMonths: NUMBER_OF_MONTHS,
};

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
      focusedInput: focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { stateDateWrapper } = this.props;
    this.setState({
      startDate: startDate && stateDateWrapper(startDate),
      endDate: endDate && stateDateWrapper(endDate),
    });
  };

  onFocusChange = focusedInput => {
    this.setState({ focusedInput });
  };

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    const props = omit(this.props, [
      'classNamePrefix',
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'stateDateWrapper',
    ]);
    return (
      <StyledDatePicker>
        <DateRangePicker
          {...props}
          startDate={startDate}
          endDate={endDate}
          focusedInput={focusedInput}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          noBorder={true}
          daySize={DAY_SIZE}
          horizontalMonthPadding={10}
          transitionDuration={0}
          hideKeyboardShortcutsPanel={true}
          isOutsideRange={() => false}
          customArrowIcon={<span>-</span>}
        />
      </StyledDatePicker>
    );
  }
}

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export {
  DatePicker,
  ISO_FORMAT,
  NUMBER_OF_MONTHS,
  START_DATE,
  END_DATE,
  DAY_SIZE
};
