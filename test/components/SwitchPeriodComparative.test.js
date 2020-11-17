import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SwitchPeriodComparative, { getPreviousDate, getSamePeriodLastYear } from '../../src/components/SwitchPeriodComparative';
import { endDate, startDate } from '../mock/SwitchPeriodComparative';

describe('<SwitchPeriodComparative>', () => {
  it('Should have correct text', () => {
    const previousPeriodText = "previousPeriodText";
    const samePeriodLastYearText = "samePeriodLastYearText";
    const { getByText } = render(
      <div>
        <SwitchPeriodComparative
          selectedPeriod='previous_period'
          startDate={startDate}
          endDate={endDate}
          samePeriodLastYearText={samePeriodLastYearText}
          previousPeriodText={previousPeriodText}
        />
      </div>
    );
    expect(getByText(samePeriodLastYearText)).toBeTruthy();
    expect(getByText(previousPeriodText)).toBeTruthy();
  });
  it('Should have checked previous_period input', () => {
    const { getByDisplayValue } = render(
      <div>
        <SwitchPeriodComparative
          selectedPeriod='previous_period'
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    );
    const previousPeriodInput = getByDisplayValue('previous_period');
    const lastPeriodInput = getByDisplayValue('last_period');
    expect(previousPeriodInput).toBeChecked();
    expect(lastPeriodInput).not.toBeChecked();
  });
  it('Should have checked last_period input', () => {
    const { getByDisplayValue } = render(
      <div>
        <SwitchPeriodComparative
          selectedPeriod='last_period'
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    );
    const previousPeriodInput = getByDisplayValue('previous_period');
    const lastPeriodInput = getByDisplayValue('last_period');
    expect(lastPeriodInput).toBeChecked();
    expect(previousPeriodInput).not.toBeChecked();
  });
  it('Should render the correct', () => {
    const { getByTestId } = render(
      <div>
        <SwitchPeriodComparative
          selectedPeriod='previous_period'
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    );
    expect(getByTestId('switch-period-comparative')).toBeTruthy();
  });
  it('Should select the correct previous period', () => {
    const [
      previousStartDate,
      previousEndDate
    ] = getPreviousDate(
      startDate,
      endDate
    );
    const previousPeriod = `${previousStartDate} - ${previousEndDate}`;
    const { getByTestId } = render(
      <div>
        <SwitchPeriodComparative
          selectedPeriod='previous_period'
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    );
    expect(getByTestId('compare-period-previous-period-dates')).toHaveTextContent(previousPeriod);
  });
  it('Should select the correct last period', () => {
    const [lastYearStartDate, lastYearEndDate] = getSamePeriodLastYear(
      startDate,
      endDate
    );
    const lastYearPeriod = `${lastYearStartDate} - ${lastYearEndDate}`;
    const { getByTestId } = render(
      <div>
        <SwitchPeriodComparative
          selectedPeriod='last_period'
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    );
    expect(getByTestId('compare-period-last-period-dates')).toHaveTextContent(lastYearPeriod);
  });
  it('Should call onPeriodSelect', () => {
    const mockCallBack = jest.fn();
    const { getAllByTestId } = render(
      <SwitchPeriodComparative
        selectedPeriod='previous_period'
        startDate={startDate}
        endDate={endDate}
        onPeriodSelect={mockCallBack}
      />
    );
    const previousPeriodLabel = getAllByTestId('field-group-label')[0];
    const lastPeriodLabel = getAllByTestId('field-group-label')[1];
    fireEvent.click(previousPeriodLabel);
    expect(mockCallBack).not.toBeCalled();
    fireEvent.click(lastPeriodLabel);
    expect(mockCallBack).toBeCalled();
  });
});
