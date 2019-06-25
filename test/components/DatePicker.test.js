import React from 'react';
import { mount } from 'enzyme';
import moment from 'moment';
import sinon from 'sinon';
import DatePicker from 'components/DatePicker';
import Theme from 'components/Theme';

import {
  ISO_FORMAT,
  NUMBER_OF_MONTHS,
  START_DATE,
  END_DATE,
  DAY_SIZE,
  DATE_RANGE
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
  it('should not call stateDateWrapper to parse date', () => {
    const parseDateStub = sinon.stub();
    const datePicker = mount(
      <Theme>
        <DatePicker stateDateWrapper={parseDateStub} />
      </Theme>
    ).find('DatePicker');
    datePicker.instance().onDatesChange({
      startDate: null,
      endDate: null,
    });
    expect(parseDateStub.callCount).toEqual(0);
  });
  it('should call stateDateWrapper 1 time to parse date', () => {
    const parseDateStub = sinon.stub();
    const dateFake = moment('2002-09-11');
    const datePicker = mount(
        <Theme>
          <DatePicker stateDateWrapper={parseDateStub} />
        </Theme>
      ).find('DatePicker');
    datePicker.instance().onDatesChange({
      startDate: dateFake,
      endDate: null,
    });

    expect(parseDateStub.callCount).toEqual(1);
  });
  it('should call stateDateWrapper 2 time to parse date', () => {
    const parseDateStub = sinon.stub();
    const dateFake = moment('2002-09-11');
    const datePicker = mount(
      <Theme>
        <DatePicker stateDateWrapper={parseDateStub} />
      </Theme>
    ).find('DatePicker');
    datePicker.instance().onDatesChange({
      startDate: dateFake,
      endDate: dateFake,
    });
    expect(parseDateStub.callCount).toEqual(2);
  });
  it('shouldnt call onDatesChangeStub time to pass data', () => {
    const onDatesChangeStub = sinon.stub();
    const dateFake = moment('2002-09-11');
    const datePicker = mount(
      <Theme>
        <DatePicker/>
      </Theme>
    ).find('DatePicker');
    datePicker.instance().onDatesChange({
      startDate: dateFake,
      endDate: dateFake,
    });
    expect(onDatesChangeStub.callCount).toEqual(0);
  });
  it('should have focusedInput correct passing autoFocus', () => {
    const datePicker = mount(
      <Theme>
        <DatePicker autoFocus/>
      </Theme>
    ).find('DatePicker');
    expect(datePicker.instance().state.focusedInput).toEqual(START_DATE);
  });
  it('should have focusedInput correct passing autoFocusEndDate', () => {
    const datePicker = mount(
      <Theme>
        <DatePicker autoFocusEndDate/>
      </Theme>
    ).find('DatePicker');
    expect(datePicker.instance().state.focusedInput).toEqual(END_DATE);
  });
  it('passing default select option have valid status date', () => {
    const datePicker = mount(
      <Theme>
        <DatePicker
          periodOptions={periodOptions}
          periodDefault={{ value: 'last_7_days', label: 'Last 7 days' }}
        />
      </Theme>
    ).find('DatePicker');
    expect(datePicker.instance().state.startDate.isValid()).toBeTruthy;
    expect(datePicker.instance().state.endDate.isValid()).toBeTruthy;
  });
});
