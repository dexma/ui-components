import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import momentPropTypes from 'react-moment-proptypes';
import omit from 'lodash/omit';
import classNames from 'classnames';

import Icon from 'components/Icon';
import Select from 'components/Select';

import {
  NUMBER_OF_MONTHS,
  START_DATE,
  END_DATE,
  DAY_SIZE,
  ISO_FORMAT,
  DATE_RANGE,
  currentMonth,
  last28Days,
  last7Days,
  lastMonth,
  previousYear,
  today,
  yearToDate,
  yesterday,
} from 'utils/dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { StyledDatePicker } from 'styles/components/StyledDatePicker';

const withDatePickerFormat = (start, end) => ({
  startDate: start,
  endDate: end,
});

const custom = () => withDatePickerFormat(null, null);

const propTypes = {
  ...GeneralPropTypes,
  autoFocus: PropTypes.bool,
  autoFocusEndDate: PropTypes.bool,
  stateDateWrapper: PropTypes.func,
  periodOptions: PropTypes.arrayOf(PropTypes.object),
  periodDefault: PropTypes.objectOf(PropTypes.string),
  periodLabel: PropTypes.string,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,
  onDatesChange: PropTypes.func,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  autoFocus: false,
  autoFocusEndDate: false,
  stateDateWrapper: date => date,
  startDateId: START_DATE,
  endDateId: END_DATE,
  numberOfMonths: NUMBER_OF_MONTHS,
};

export class DatePicker extends PureComponent {
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
    if (range === DATE_RANGE.TODAY) return today(parser);
    if (range === DATE_RANGE.YESTERDAY) return yesterday(parser);
    if (range === DATE_RANGE.LAST_7_DAYS) return last7Days(parser);
    if (range === DATE_RANGE.LAST_28_DAYS) return last28Days(parser);
    if (range === DATE_RANGE.CURRENT_MONTH) return currentMonth(parser);
    if (range === DATE_RANGE.LAST_MONTH) return lastMonth(parser);
    if (range === DATE_RANGE.YEAR_TO_DATE) return yearToDate(parser);
    if (range === DATE_RANGE.PREVIOUS_YEAR) return previousYear(parser);
    if (range === DATE_RANGE.CUSTOM) return custom();
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
    const {
      periodOptions,
      periodDefault,
      periodLabel,
      theme,
      dataCy,
    } = this.props;
    const classes = classNames('date-range', periodOptions && `with-select`);
    return (
      <StyledDatePicker
        theme={theme}
        focusedInput={focusedInput}
        withSelect={periodOptions}
      >
        <div className={classes} data-cy={dataCy}>
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
            customArrowIcon={<Icon name="arrow_left" size="small" />}
            displayFormat={ISO_FORMAT}
            minimumNights={0}
            customInputIcon={
              <Icon name="calendar_range" size="xlarge" color="gray500" />
            }
            navPrev={<Icon name="chevron_left_l" size={10} color="gray600" />}
            navNext={<Icon name="chevron_right_l" size={10} color="gray600" />}
          />
        </div>
        {periodOptions && (
          <div className="select">
            <Select
              options={periodOptions}
              defaultValue={periodDefault}
              placeholder={periodLabel}
              onChange={this.onSelectChange}
              isSearchable={false}
            />
          </div>
        )}
      </StyledDatePicker>
    );
  }
}

StyledDatePicker.displayName = 'StyledDatePicker';

DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

export default withTheme(DatePicker);
