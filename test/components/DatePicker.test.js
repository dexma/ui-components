import React from 'react';
import { mount, shallow } from 'enzyme';
import moment from 'moment';
import { DatePicker } from '../../src/components/DatePicker';
import { render, screen } from '@testing-library/react'

import {
  ISO_FORMAT,
  NUMBER_OF_MONTHS,
  START_DATE,
  END_DATE,
  DAY_SIZE,
  DATE_RANGE,
} from 'utils/dates';

import { DateRangePicker } from 'react-dates';

const periodOptions = [
  { value: 'custom', label: 'Custom' },
  { value: DATE_RANGE.TODAY, label: 'Today' },
  { value: DATE_RANGE.YESTERDAY, label: 'Yesterday' },
  { value: DATE_RANGE.LAST_7_DAYS, label: 'Last 7 days' },
  { value: DATE_RANGE.LAST_28_DAYS, label: 'Last 28 days' },
  { value: DATE_RANGE.CURRENT_MONTH, label: 'Current month' },
  { value: DATE_RANGE.LAST_MONTH, label: 'Last month' },
  { value: DATE_RANGE.YEAR_TO_DATE, label: 'Year to date' },
  { value: DATE_RANGE.PREVIOUS_YEAR, label: 'Previous year' },
];

const requiredProps = {
  onDatesChange: () => {},
  onFocusChange: () => {},
  startDateId: 'startDate',
  endDateId: 'endDate',
};

describe('<DatePicker>', () => {
  it('should render correct number of months', () => {
    const datePicker = mount(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().numberOfMonths).toEqual(
      NUMBER_OF_MONTHS
    );
  });
  it('should render correct start date id', () => {
    const datePicker = mount(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().startDateId).toEqual(
      START_DATE
    );
  });
  it('should render correct end date id', () => {
    const datePicker = mount(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().endDateId).toEqual(
      END_DATE
    );
  });
  it('should render correct format', () => {
    const datePicker = mount(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().displayFormat).toEqual(
      ISO_FORMAT
    );
  });
  it('should render correct day size', () => {
    const datePicker = mount(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().daySize).toEqual(DAY_SIZE);
  });
  it('should render correct no border', () => {
    const datePicker = mount(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().noBorder).toBeTruthy;
  });
  it('should render correct hide keyboard prop', () => {
    const datePicker = mount(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().hideKeyboardShortcutsPanel)
      .toBeFalsy;
  });

});
