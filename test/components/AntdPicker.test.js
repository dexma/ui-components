import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import dayjs from 'dayjs';
import AntdPicker from '../../src/components/AntdPicker';

describe('<AntPicker>', () => {
  describe('AntdDatePicker', () => {
    it('should render a basic Date picker', () => {
      render(<AntdPicker type="date" />);
      const dateInput = screen.getByTestId('antd-date-picker');
      expect(dateInput).toBeTruthy();
    });
    describe('Days', () => {
      const dateValue = '10-05-2022';
      it('should change Date input value when a value is entered', () => {
        // Given
        render(<AntdPicker type="date" />);
        const dateInput = screen.getByTestId('antd-date-picker');
        // When
        fireEvent.mouseDown(dateInput);
        fireEvent.change(dateInput, { target: { value: dateValue } });
        // Then
        expect(screen.findByDisplayValue(dateValue)).toBeTruthy();
      });
      it('should execute onChange function once when "Today" preset is clicked', () => {
        const onChangeFunction = jest.fn();
        // Given
        render(
          <AntdPicker
            type="date"
            format="DD-MM-yyyy"
            onChange={onChangeFunction}
          />
        );
        const dateInput = screen.getByTestId('antd-date-picker');
        // When
        fireEvent.mouseDown(dateInput);
        const todayLink = screen.getByText('Today');
        fireEvent.click(todayLink);
        // Then
        expect(onChangeFunction).toBeCalledTimes(1);
      });
      it('should execute onChange function once when click "15" number day on dropdown menu', async () => {
        const onChangeFunction = jest.fn();
        const daySelected = 15;
        // Given
        render(
          <AntdPicker
            type="date"
            format="DD-MM-yyyy"
            onChange={onChangeFunction}
          />
        );
        const dateInput = screen.getByTestId('antd-date-picker');
        // When
        fireEvent.mouseDown(dateInput);
        const day15Button = await screen.findByText(daySelected);
        fireEvent.click(day15Button);
        // Then
        expect(onChangeFunction).toBeCalledTimes(1);
      });
    });
    describe('Month', () => {
      const monthValue = '05-2022';
      it('should change Date input value when a value is entered', () => {
        // Given
        render(<AntdPicker type="date" picker="month" format="MM/yyyy" />);
        const dateInput = screen.getByTestId('antd-date-picker');
        // When
        fireEvent.mouseDown(dateInput);
        fireEvent.change(dateInput, { target: { value: monthValue } });
        // Then
        expect(screen.findByDisplayValue(monthValue)).toBeTruthy();
      });
      it('should execute onChange function once when click the current month on dropdown menu', async () => {
        const onChangeFunction = jest.fn();
        const currentMonthValue = dayjs().format('MMM');
        // Given
        render(
          <AntdPicker
            type="date"
            picker="month"
            onChange={onChangeFunction}
            format="MM/yyyy"
          />
        );
        const dateInput = screen.getByTestId('antd-date-picker');
        // When
        fireEvent.mouseDown(dateInput);
        const currentMonthButton = await screen.findByText(currentMonthValue);
        fireEvent.click(currentMonthButton);
        // Then
        expect(onChangeFunction).toBeCalledTimes(1);
      });
    });
    describe('Year', () => {
      it('should change Date input value when a value is entered', () => {
        const yearValue = '2022';
        // Given
        render(<AntdPicker type="date" picker="year" format="yyyy" />);
        const dateInput = screen.getByTestId('antd-date-picker');
        // When
        fireEvent.mouseDown(dateInput);
        fireEvent.change(dateInput, { target: { value: yearValue } });
        // Then
        expect(screen.findByDisplayValue(yearValue)).toBeTruthy();
      });
      it('should execute onChange function once when click the current year on dropdown menu', async () => {
        const onChangeFunction = jest.fn();
        const currentYearValue = dayjs().format('YYYY');
        // Given
        render(
          <AntdPicker
            type="date"
            picker="year"
            onChange={onChangeFunction}
            format="yyyy"
          />
        );
        const dateInput = screen.getByTestId('antd-date-picker');
        // When
        fireEvent.mouseDown(dateInput);
        const currentYearButton = await screen.findByText(currentYearValue);
        fireEvent.click(currentYearButton);
        // Then
        expect(onChangeFunction).toBeCalledTimes(1);
      });
    });
    describe('Days and time', () => {
      it('should change start datetime input value when values are entered', async () => {
        // Given
        const startDateValue = '10-05-2022 10:30';
        const endDateValue = '13-05-2022 11:30';
        render(<AntdPicker type="range" format="DD/MM/yyyy HH:mm" />);
        // When
        const startDateInput = screen.getByPlaceholderText('Start date');
        const endDateInput = screen.getByPlaceholderText('End date');
        fireEvent.mouseDown(startDateInput);
        fireEvent.change(startDateInput, { target: { value: startDateValue } });
        fireEvent.mouseDown(endDateInput);
        fireEvent.change(endDateInput, { target: { value: endDateValue } });
        // Then
        expect(screen.getByDisplayValue(startDateValue)).toBeTruthy();
        expect(screen.getByDisplayValue(endDateValue)).toBeTruthy();
      });
      it('should change values of start date when a preset range is clicked', async () => {
        const onChangeFunction = jest.fn();
        const todayValue = dayjs().format('DD/MM/YYYY HH:mm');
        // Given
        render(
          <AntdPicker
            type="date"
            format="DD/MM/YYYY HH:mm"
            onChange={onChangeFunction}
          />
        );
        // When
        const startDateInput = screen.getByPlaceholderText('Select date');
        fireEvent.mouseDown(startDateInput);
        const todayLink = screen.getByText('Today');
        fireEvent.click(todayLink);
        // Then
        expect(onChangeFunction).toBeCalledTimes(1);
        expect(await screen.findByDisplayValue(todayValue)).toBeTruthy();
      });
    });
  });
  describe('AntdRangePicker', () => {
    it('should render a basic Range picker', () => {
      render(<AntdPicker type="range" />);
      const dateInput = screen.getByTestId('antd-range-picker');
      expect(dateInput).toBeTruthy();
    });
    describe('Days', () => {
      it('should change start date input value and end date input value when values are entered', async () => {
        // Given
        const startDateValue = '10-05-2022';
        const endDateValue = '13-05-2022';
        render(<AntdPicker type="range" />);
        // When
        const startDateInput = screen.getByPlaceholderText('Start date');
        const endDateInput = screen.getByPlaceholderText('End date');
        fireEvent.mouseDown(startDateInput);
        fireEvent.change(startDateInput, { target: { value: startDateValue } });
        fireEvent.mouseDown(endDateInput);
        fireEvent.change(endDateInput, { target: { value: endDateValue } });
        // Then
        expect(screen.getByDisplayValue(startDateValue)).toBeTruthy();
        expect(screen.getByDisplayValue(endDateValue)).toBeTruthy();
      });
      it('should change values of start and end date when a preset range is clicked', async () => {
        const onChangeFunction = jest.fn();
        // Given
        render(
          <AntdPicker
            format="DD/MM/YYYY"
            type="range"
            ranges={[
              {
                label: 'This Month',
                value: [dayjs().startOf('month'), dayjs().endOf('month')],
              },
            ]}
            onChange={onChangeFunction}
          />
        );
        // When
        const startDateInput = screen.getByPlaceholderText('Start date');
        fireEvent.mouseDown(startDateInput);
        const thisMonthLink = screen.getByText('This Month');
        fireEvent.click(thisMonthLink);
        // Then
        expect(onChangeFunction).toBeCalledTimes(1);
        expect(
          await screen.findByDisplayValue(
            dayjs()
              .startOf('month')
              .format('DD/MM/YYYY')
          )
        ).toBeTruthy();
        expect(
          await screen.findByDisplayValue(
            dayjs()
              .endOf('month')
              .format('DD/MM/YYYY')
          )
        ).toBeTruthy();
      });
      it('should change values of start and end date when "15" and "16" numbers are selected on dropdown menu', async () => {
        const onChangeFunction = jest.fn();
        const daySelected = 15;
        const nextDaySelected = 16;
        // Given
        render(
          <AntdPicker
            type="range"
            onChange={onChangeFunction}
            format="DD/MM/YYYY"
          />
        );
        // When
        const startDateInput = screen.getByPlaceholderText('Start date');
        fireEvent.mouseDown(startDateInput);
        const todayButton = screen.getAllByText(daySelected)[0];
        fireEvent.click(todayButton);
        const endDateInput = screen.getByPlaceholderText('End date');
        fireEvent.mouseDown(endDateInput);
        const tomorrowButton = screen.getAllByText(nextDaySelected)[0];
        fireEvent.click(tomorrowButton);
        // Then
        expect(onChangeFunction).toBeCalledTimes(1);
        expect(
          await screen.findByDisplayValue(
            dayjs()
              .date(daySelected)
              .format('DD/MM/YYYY')
          )
        ).toBeTruthy();
        expect(
          await screen.findByDisplayValue(
            dayjs()
              .date(nextDaySelected)
              .format('DD/MM/YYYY')
          )
        ).toBeTruthy();
      });
    });
    describe('Month', () => {
      it('should change start date input value and end date input value when values are entered', async () => {
        // Given
        const startDateValue = '05-2022';
        const endDateValue = '06-2022';
        render(<AntdPicker type="range" picker="month" />);
        // When
        const startDateInput = screen.getByPlaceholderText('Start month');
        const endDateInput = screen.getByPlaceholderText('End month');
        fireEvent.mouseDown(startDateInput);
        fireEvent.change(startDateInput, { target: { value: startDateValue } });
        fireEvent.mouseDown(endDateInput);
        fireEvent.change(endDateInput, { target: { value: endDateValue } });
        // Then
        expect(screen.getByDisplayValue(startDateValue)).toBeTruthy();
        expect(screen.getByDisplayValue(endDateValue)).toBeTruthy();
      });
      it('should change values of start and end date when a preset range is clicked', async () => {
        const currentMonth = dayjs();
        const expectedCurrentMonth = currentMonth.format('MM/YYYY');
        const lastMonth = dayjs().add(2, 'months');
        const expectedLastMonth = lastMonth.format('MM/YYYY');
        const onChangeFunction = jest.fn();
        // Given
        render(
          <AntdPicker
            type="range"
            picker="month"
            format="MM/YYYY"
            ranges={[
              { label: 'Next 2 Months', value: [currentMonth, lastMonth] },
            ]}
            onChange={onChangeFunction}
          />
        );
        // When
        const startDateInput = screen.getByPlaceholderText('Start month');
        fireEvent.mouseDown(startDateInput);
        const nextTwoMonthsLink = screen.getByText('Next 2 Months');
        fireEvent.click(nextTwoMonthsLink);
        // Then
        expect(onChangeFunction).toBeCalledTimes(1);
        expect(
          await screen.findByDisplayValue(expectedCurrentMonth)
        ).toBeTruthy();
        expect(await screen.findByDisplayValue(expectedLastMonth)).toBeTruthy();
      });
    });
    describe('Year', () => {
      it('should change start date input value and end date input value when values are entered', async () => {
        // Given
        const startDateValue = '2022';
        const endDateValue = '2023';
        render(<AntdPicker type="range" picker="year" />);
        // When
        const startDateInput = screen.getByPlaceholderText('Start year');
        const endDateInput = screen.getByPlaceholderText('End year');
        fireEvent.mouseDown(startDateInput);
        fireEvent.change(startDateInput, { target: { value: startDateValue } });
        fireEvent.mouseDown(endDateInput);
        fireEvent.change(endDateInput, { target: { value: endDateValue } });
        // Then
        expect(await screen.findByDisplayValue(startDateValue)).toBeTruthy();
        expect(await screen.findByDisplayValue(endDateValue)).toBeTruthy();
      });
      it('should change values of start and end date when a preset range is clicked', async () => {
        const currentYear = dayjs();
        const expectedCurrentYear = currentYear.format('YYYY');
        const lastYear = dayjs().add(2, 'year');
        const expectedLastYear = lastYear.format('YYYY');
        const onChangeFunction = jest.fn();
        // Given
        render(
          <AntdPicker
            type="range"
            picker="year"
            format="YYYY"
            ranges={[{ label: 'Next 2 Years', value: [currentYear, lastYear] }]}
            onChange={onChangeFunction}
          />
        );
        // When
        const startDateInput = screen.getByPlaceholderText('Start year');
        fireEvent.mouseDown(startDateInput);
        const thisMonthLink = screen.getByText('Next 2 Years');
        fireEvent.click(thisMonthLink);
        // Then
        expect(onChangeFunction).toBeCalledTimes(1);
        expect(
          await screen.findByDisplayValue(expectedCurrentYear)
        ).toBeTruthy();
        expect(await screen.findByDisplayValue(expectedLastYear)).toBeTruthy();
      });
    });
    describe('Days and time', () => {
      it('should change start datetime input value and end dateinput input value when values are entered', async () => {
        // Given
        const startDateValue = '10-05-2022 10:30';
        const endDateValue = '13-05-2022 11:30';
        render(<AntdPicker type="range" format="DD/MM/yyyy HH:mm" />);
        // When
        const startDateInput = screen.getByPlaceholderText('Start date');
        const endDateInput = screen.getByPlaceholderText('End date');
        fireEvent.mouseDown(startDateInput);
        fireEvent.change(startDateInput, { target: { value: startDateValue } });
        fireEvent.mouseDown(endDateInput);
        fireEvent.change(endDateInput, { target: { value: endDateValue } });
        // Then
        expect(screen.getByDisplayValue(startDateValue)).toBeTruthy();
        expect(screen.getByDisplayValue(endDateValue)).toBeTruthy();
      });
      it('should change values of start and end datetime when a preset range is clicked', async () => {
        const onChangeFunction = jest.fn();
        // Given
        render(
          <AntdPicker
            type="range"
            ranges={[
              {
                label: 'Today',
                value: [dayjs().startOf('day'), dayjs().endOf('day')],
              },
            ]}
            format="DD/MM/YYYY HH:mm"
            onChange={onChangeFunction}
          />
        );
        // When
        const startDateInput = screen.getByPlaceholderText('Start date');
        fireEvent.mouseDown(startDateInput);
        const todayLink = screen.getByText('Today');
        fireEvent.click(todayLink);
        // Then
        expect(onChangeFunction).toBeCalledTimes(1);
        expect(
          await screen.findByDisplayValue(
            dayjs()
              .startOf('day')
              .format('DD/MM/YYYY HH:mm')
          )
        ).toBeTruthy();
        expect(
          await screen.findByDisplayValue(
            dayjs()
              .endOf('day')
              .format('DD/MM/YYYY HH:mm')
          )
        ).toBeTruthy();
      });
    });
  });
});
