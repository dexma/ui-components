import React from 'react';
import moment from 'moment';
import { currentMonth, lastMonth, ISO_FORMAT, NUMBER_OF_MONTHS } from '../../src/utils/dates';
import { DatePicker } from '../../src/components/DatePicker';
import { mockPeriodOptions } from '../mock/DatePicker';

import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const parseDate = (start, end) => ({
  startDate: start,
  endDate: end,
});

const customLabel = mockPeriodOptions[0].label;
const todayLabel = mockPeriodOptions[1].label;
const yesterdayLabel = mockPeriodOptions[2].label;
const last7Days = mockPeriodOptions[3].label;
const last28Days = mockPeriodOptions[4].label;
const currentMonthLabel = mockPeriodOptions[5].label;
const lastMonthLabel = mockPeriodOptions[6].label;

describe('<DatePicker>', () => {
  it('Should render the selector of period', () => {
    render(
      <DatePicker
        periodOptions={mockPeriodOptions}
        periodDefault={{ value: 'last_7_days', label: 'Last 7 days' }}
        language="fr"/>
      );
    expect(screen.getByTestId("select")).toBeInTheDocument();
  });
  it('Should not render the selector of period', () => {
    render(<DatePicker/>);
    expect(screen.queryByTestId("select-icon")).not.toBeInTheDocument();
  });
  it('Should have 3 month visible when user open the calendar', () => {
    const { container } = render(<DatePicker/>);
    const calendarButton = container.querySelector('.DateRangePickerInput_calendarIcon');
    fireEvent.click(calendarButton, { button: 1 });
    const visibleMonths = container.querySelectorAll("[data-visible='true']");
    expect(Array.from(visibleMonths)).toHaveLength(NUMBER_OF_MONTHS);
  });
  it('Should render correct period options labels passed', () => {
    const { container, getAllByTitle } = render(<DatePicker periodOptions={mockPeriodOptions}/>);

    fireEvent.mouseDown(container.querySelector('.select-styled__control'));

    expect(getAllByTitle(customLabel)).toBeTruthy();
    expect(getAllByTitle(todayLabel)).toBeTruthy();
    expect(getAllByTitle(yesterdayLabel)).toBeTruthy();
    expect(getAllByTitle(last7Days)).toBeTruthy();
    expect(getAllByTitle(last28Days)).toBeTruthy();
    expect(getAllByTitle(currentMonthLabel)).toBeTruthy();
    expect(getAllByTitle(lastMonthLabel)).toBeTruthy();
  });
  it('Should choose correct date when click on Today period', () => {
    const { container, getByText } = render(<DatePicker periodOptions={mockPeriodOptions}/>);
    const calendarButton = container.querySelector('.DateRangePickerInput_calendarIcon');
    fireEvent.mouseDown(container.querySelector('.select-styled__control'));
    fireEvent.click(getByText(todayLabel));
    fireEvent.click(calendarButton);
    const selectedDay = container.querySelectorAll("[data-visible='true'] .CalendarDay__selected");
    expect(Array.from(selectedDay)).toHaveLength(1);
  });
  it('Should choose correct date when click on Yesterday period', () => {
    const { container, getByText } = render(<DatePicker periodOptions={mockPeriodOptions}/>);
    const calendarButton = container.querySelector('.DateRangePickerInput_calendarIcon');
    fireEvent.mouseDown(container.querySelector('.select-styled__control'));
    fireEvent.click(getByText(yesterdayLabel));
    fireEvent.click(calendarButton);

    const selectedDay = container.querySelectorAll("[data-visible='true'] .CalendarDay__selected");

    expect(Array.from(selectedDay)).toHaveLength(1);
  });
  it('Should choose correct date range when click on Last 7 days period', () => {
    const { container, getByText } = render(<DatePicker periodOptions={mockPeriodOptions}/>);
    const calendarButton = container.querySelector('.DateRangePickerInput_calendarIcon');
    fireEvent.mouseDown(container.querySelector('.select-styled__control'));
    fireEvent.click(getByText(last7Days));
    fireEvent.click(calendarButton);
    const selectedDayStandAndEnd = container.querySelectorAll(".CalendarDay__selected");
    const selectedDayBetweenStartAndEnd = container.querySelectorAll(".CalendarDay__selected_span");

    expect(Array.from(selectedDayStandAndEnd)).toHaveLength(2);
    expect(Array.from(selectedDayBetweenStartAndEnd)).toHaveLength(5);
  });
  it('Should choose correct date range when click on Last 28 days period', () => {
    const { container, getByText } = render(<DatePicker periodOptions={mockPeriodOptions}/>);
    const calendarButton = container.querySelector('.DateRangePickerInput_calendarIcon');
    fireEvent.mouseDown(container.querySelector('.select-styled__control'));
    fireEvent.click(getByText(last28Days));
    fireEvent.click(calendarButton);
    const selectedDayStandAndEnd = container.querySelectorAll(".CalendarDay__selected");
    const selectedDayBetweenStartAndEnd = container.querySelectorAll(".CalendarDay__selected_span");

    expect(Array.from(selectedDayStandAndEnd)).toHaveLength(2);
    expect(Array.from(selectedDayBetweenStartAndEnd)).toHaveLength(26);
  });
  it('Should choose correct date range when click on Current month period', () => {
    const { container, getByText } = render(<DatePicker periodOptions={mockPeriodOptions}/>);
    const calendarButton = container.querySelector('.DateRangePickerInput_calendarIcon');
    fireEvent.mouseDown(container.querySelector('.select-styled__control'));
    fireEvent.click(getByText(currentMonthLabel));
    fireEvent.click(calendarButton);
    const selectedDayStandAndEnd = container.querySelectorAll(".CalendarDay__selected");
    const selectedDayBetweenStartAndEnd = container.querySelectorAll(".CalendarDay__selected_span");
    const daysInThisMonth = currentMonth(parseDate); //31
    const lastDayMonth = moment(daysInThisMonth.endDate, ISO_FORMAT).date();

    expect(Array.from(selectedDayStandAndEnd)).toHaveLength(2);
    expect(Array.from(selectedDayBetweenStartAndEnd)).toHaveLength(lastDayMonth - 2);
  });
  it('Should choose correct date range when click on Last month period', () => {
    const { container, getByText } = render(<DatePicker periodOptions={mockPeriodOptions}/>);
    const calendarButton = container.querySelector('.DateRangePickerInput_calendarIcon');

    fireEvent.mouseDown(container.querySelector('.select-styled__control'));
    fireEvent.click(getByText(lastMonthLabel));
    fireEvent.click(calendarButton);

    const selectedDayStandAndEnd = container.querySelectorAll(".CalendarDay__selected");
    const selectedDayBetweenStartAndEnd = container.querySelectorAll(".CalendarDay__selected_span");
    const daysInThisMonth = lastMonth(parseDate);
    const lastDayMonth = moment(daysInThisMonth.endDate, ISO_FORMAT).date();

    expect(Array.from(selectedDayStandAndEnd)).toHaveLength(2);
    expect(Array.from(selectedDayBetweenStartAndEnd)).toHaveLength(lastDayMonth - 2);
  });
  it('Should render correct placeholder', () => {
    const startDatePlaceholderText = "Start test placeholder";
    const endDatePlaceholderText = "End test placeholder";
    const { container } = render(<DatePicker
      periodOptions={mockPeriodOptions}
      startDatePlaceholderText={startDatePlaceholderText}
      endDatePlaceholderText={endDatePlaceholderText}
    />);
    const startDate = container.querySelector('#startDate');
    const endDate = container.querySelector('#endDate');
    expect(startDate.placeholder).toEqual(startDatePlaceholderText);
    expect(endDate.placeholder).toEqual(endDatePlaceholderText);
  });
  it('Should render NUMBER_OF_MONTHS * 7 days day of week', () => {
    const { container } = render(<DatePicker periodOptions={mockPeriodOptions}/>);
    const DayPickerWeekHeader = container.querySelectorAll(".DayPicker_weekHeader_li");
    expect(Array.from(DayPickerWeekHeader)).toHaveLength(NUMBER_OF_MONTHS * 7);
  });
  it('Should render End Date correct inside input text', () => {
    const { container } = render(<DatePicker periodOptions={mockPeriodOptions} language="es"/>);
    const DayPickerWeekHeader = container.querySelectorAll(".DayPicker_weekHeader_li");
    const lunes = DayPickerWeekHeader[0];
    const martes = DayPickerWeekHeader[1];
    const miercoles = DayPickerWeekHeader[2];
    const jueves = DayPickerWeekHeader[3];
    const viernes = DayPickerWeekHeader[4];
    const sabado = DayPickerWeekHeader[5];
    const domingo = DayPickerWeekHeader[6];
    expect(lunes.textContent).toEqual('lu');
    expect(martes.textContent).toEqual('ma');
    expect(miercoles.textContent).toEqual('mi');
    expect(jueves.textContent).toEqual('ju');
    expect(viernes.textContent).toEqual('vi');
    expect(sabado.textContent).toEqual('sá');
    expect(domingo.textContent).toEqual('do');
  });
  it('Should render correct placeholder select', () => {
    const periodLabel = "Test period label"
    const { getByText } = render(<DatePicker periodOptions={mockPeriodOptions} periodLabel={periodLabel}/>);
    const selectWithLabel = getByText(periodLabel);
    expect(selectWithLabel).toBeInTheDocument();
  });
});
