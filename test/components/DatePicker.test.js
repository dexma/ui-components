import React from 'react';
import { shallow, mount } from 'enzyme';
import moment from 'moment';
import sinon from 'sinon';
import DatePicker from 'components/DatePicker';

import {
  ISO_FORMAT,
  NUMBER_OF_MONTHS,
  START_DATE,
  END_DATE,
  DAY_SIZE
} from 'utils/dates';

import { DateRangePicker } from 'react-dates';

const periodOptions = [
  { value: 'custom', label: 'Custom' },
  { value: 'today', label: 'Today' },
  { value: 'yesterday', label: 'Yesterday' },
  { value: 'last_7_days', label: 'Last 7 days' },
  { value: 'last_28_days', label: 'Last 28 days' },
  { value: 'current_month', label: 'Current month' },
  { value: 'last_month', label: 'Last month' },
  { value: 'year_to_date', label: 'Year to date' },
  { value: 'previous_year', label: 'Previous year' },
];

describe('<DatePicker>', () => {
  it('should render correct number of months', () => {
    const datePicker = shallow(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().numberOfMonths).toEqual(
      NUMBER_OF_MONTHS
    );
  });
  it('should render correct number of months', () => {
    const datePicker = shallow(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().numberOfMonths).toEqual(
      NUMBER_OF_MONTHS
    );
  });
  it('should render correct start date id', () => {
    const datePicker = shallow(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().startDateId).toEqual(
      START_DATE
    );
  });
  it('should render correct end date id', () => {
    const datePicker = shallow(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().endDateId).toEqual(
      END_DATE
    );
  });
  it('should render correct format', () => {
    const datePicker = shallow(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().displayFormat).toEqual(
      ISO_FORMAT
    );
  });
  it('should render correct day size', () => {
    const datePicker = shallow(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().daySize).toEqual(DAY_SIZE);
  });
  it('should render correct no border', () => {
    const datePicker = shallow(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().noBorder).toBeTruthy;
  });
  it('should render correct hide keyboard prop', () => {
    const datePicker = shallow(<DatePicker />);
    expect(datePicker.find(DateRangePicker).props().hideKeyboardShortcutsPanel)
      .toBeFalsy;
  });
  it('should not call stateDateWrapper to parse date', () => {
    const parseDateStub = sinon.stub();
    const dateFake = moment('2002-09-11');
    const datePicker = mount(<DatePicker stateDateWrapper={parseDateStub} />);
    datePicker.instance().onDatesChange({
      startDate: null,
      endDate: null,
    });
    expect(parseDateStub.callCount).toEqual(0);
  });
  it('should call stateDateWrapper 1 time to parse date', () => {
    const parseDateStub = sinon.stub();
    const dateFake = moment('2002-09-11');
    const datePicker = mount(<DatePicker stateDateWrapper={parseDateStub} />);
    datePicker.instance().onDatesChange({
      startDate: dateFake,
      endDate: null,
    });

    expect(parseDateStub.callCount).toEqual(1);
  });
  it('should call stateDateWrapper 2 time to parse date', () => {
    const parseDateStub = sinon.stub();
    const dateFake = moment('2002-09-11');
    const datePicker = mount(<DatePicker stateDateWrapper={parseDateStub} />);
    datePicker.instance().onDatesChange({
      startDate: dateFake,
      endDate: dateFake,
    });
    expect(parseDateStub.callCount).toEqual(2);
  });
  it('shouldnt call onDatesChangeStub time to pass data', () => {
    const onDatesChangeStub = sinon.stub();
    const dateFake = moment('2002-09-11');
    const datePicker = mount(<DatePicker />);
    datePicker.instance().onDatesChange({
      startDate: dateFake,
      endDate: dateFake,
    });
    expect(onDatesChangeStub.callCount).toEqual(0);
  });
  it('should have focusedInput correct passing autoFocus', () => {
    const datePicker = shallow(<DatePicker autoFocus={true} />);
    expect(datePicker.instance().state.focusedInput).toEqual(START_DATE);
  });
  it('should have focusedInput correct passing autoFocusEndDate', () => {
    const datePicker = shallow(<DatePicker autoFocusEndDate={true} />);
    expect(datePicker.instance().state.focusedInput).toEqual(END_DATE);
  });
  it('should render the select component', () => {
    const datePicker = shallow(<DatePicker periodOptions={periodOptions} />);
    expect(datePicker.find('StyledSelect').length).toEqual(1);
  });
  it('shouldn´t render the select component', () => {
    const datePicker = shallow(<DatePicker />);
    expect(datePicker.find('StyledSelect').length).toEqual(0);
  });
  it('passing default select option have valid status date', () => {
    const datePicker = mount(
      <DatePicker
        periodOptions={periodOptions}
        periodDefault={{ value: 'last_7_days', label: 'Last 7 days' }}
      />
    );
    expect(datePicker.instance().state.startDate.isValid()).toBeTruthy;
    expect(datePicker.instance().state.endDate.isValid()).toBeTruthy;
  });
});
