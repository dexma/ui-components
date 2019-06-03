import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import momentPropTypes from 'react-moment-proptypes';
import { GeneralPropTypes } from 'utils/propTypes';
import omit from 'lodash/omit';
import classNames from 'classnames';
import { DateRangePicker, DayPicker } from 'react-dates';
import styled from 'styled-components';

import Icon from 'components/Icon';
import Select from 'components/Select';

import 'react-dates/initialize';
import { StyledDatePicker } from 'styles/components/StyledDatePicker';
import {
  ISO_FORMAT,
  currentMonth,
  last28Days,
  last7Days,
  lastMonth,
  previousYear,
  today,
  yearToDate,
  yesterday,
} from 'utils/dates';
import 'react-dates/lib/css/_datepicker.css';

const NUMBER_OF_MONTHS = 3;
const START_DATE = 'startDate';
const END_DATE = 'endDate';
const DAY_SIZE = 20;

const propTypes = {
  ...GeneralPropTypes,
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  stateDateWrapper: PropTypes.func,
  periodOptions: PropTypes.arrayOf(PropTypes.object),
  periodDefault: PropTypes.object,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
  onDatesChange: PropTypes.func,
};

const withDatePickerFormat = (start, end) => ({
  startDate: start,
  endDate: end,
});

const custom = () => withDatePickerFormat(null, null);

const Dates = Object.freeze({
  CUSTOM: 'custom',
  TODAY: 'today',
  YESTERDAY: 'yesterday',
  LAST_7_DAYS: 'last_7_days',
  LAST_28_DAYS: 'last_28_days',
  CURRENT_MONTH: 'current_month',
  LAST_MONTH: 'last_month',
  YEAR_TO_DATE: 'year_to_date',
  PREVIOUS_YEAR: 'previous_year',
});

const defaultProps = {
  autoFocus: false,
  autoFocusEndDate: false,
  stateDateWrapper: date => date,
  startDateId: START_DATE,
  endDateId: END_DATE,
  numberOfMonths: NUMBER_OF_MONTHS,
};

class DatePicker extends PureComponent {
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
  }

  componentDidMount() {
    const { periodDefault } = this.props;
    const ranges =
      periodDefault && periodDefault.value
        ? this.datePickerRange(periodDefault.value, withDatePickerFormat)
        : null;
    if (ranges) {
      this.onDatesChange(ranges);
    }
  }

  onDatesChange = ({ startDate, endDate }) => {
    const { stateDateWrapper, onDatesChange } = this.props;
    const start = startDate ? stateDateWrapper(startDate) : null;
    const end = endDate ? stateDateWrapper(endDate) : null;
    this.setState(
      {
        startDate: start,
        endDate: end,
      },
      () =>
        onDatesChange &&
        onDatesChange({
          startDate: start,
          endDate: end,
        })
    );
  };

  onFocusChange = focusedInput => {
    this.setState({ focusedInput });
  };

  onSelectChange = ({ value }) => {
    const ranges = this.datePickerRange(value, withDatePickerFormat);
    if (value === 'custom') {
      this.onFocusChange(START_DATE);
    }
    this.onDatesChange(ranges);
  };

  datePickerRange = (range, parser = date => date) => {
    if (range === Dates.TODAY) return today(parser);
    if (range === Dates.YESTERDAY) return yesterday(parser);
    if (range === Dates.LAST_7_DAYS) return last7Days(parser);
    if (range === Dates.LAST_28_DAYS) return last28Days(parser);
    if (range === Dates.CURRENT_MONTH) return currentMonth(parser);
    if (range === Dates.LAST_MONTH) return lastMonth(parser);
    if (range === Dates.YEAR_TO_DATE) return yearToDate(parser);
    if (range === Dates.PREVIOUS_YEAR) return previousYear(parser);
    if (range === Dates.CUSTOM) return custom();
    return null;
  };

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    const dateRangePickerProps = omit(this.props, [
      'classNamePrefix',
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate',
      'stateDateWrapper',
      'periodOptions',
      'periodDefault',
    ]);
    const { periodOptions, periodDefault } = this.props;
    const classes = classNames(periodOptions && `with-select`);
    return (
      <Fragment>
        <StyledDatePicker>
          <div className={classes}>
            <DateRangePicker
              {...dateRangePickerProps}
              startDate={startDate}
              endDate={endDate}
              focusedInput={focusedInput}
              onDatesChange={this.onDatesChange}
              onFocusChange={this.onFocusChange}
              noBorder
              daySize={DAY_SIZE}
              horizontalMonthPadding={10}
              transitionDuration={0}
              hideKeyboardShortcutsPanel
              isOutsideRange={() => false}
              customArrowIcon={<span>-</span>}
              displayFormat={ISO_FORMAT}
              minimumNights={0}
              customInputIcon={<Icon name="calendar-small-page" />}
            />
          </div>
        </StyledDatePicker>
        {periodOptions && (
          <StyledSelect
            options={periodOptions}
            defaultValue={periodDefault}
            onChange={this.onSelectChange}
          />
        )}
      </Fragment>
    );
  }
}

const StyledSelect = styled(Select)`
  display: inline-block;
  width: 140px;
  float: left;
  .dexma-select__control {
    border-radius: 0px 3px 3px 0px;
    border-color: #cccccc;
    border-left: 0px;
    font-size: 12px;
  }
  .dexma-select__single-value {
    color: #333333;
  }
`;

StyledSelect.displayName = 'StyledSelect';

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export { DatePicker, NUMBER_OF_MONTHS, START_DATE, END_DATE, DAY_SIZE };
