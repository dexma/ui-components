import React from 'react';
import { render, screen } from '@testing-library/react';

import Chart from '../../src/components/Chart';
import mvConsumptionDiscreteChart from '../mock/mvConsumptionDiscreteChart';
import Result from '../../src/components/Result';

describe('<Chart>', () => {
  it('Should render the chart correct', () => {
    const { getByTestId } = render(
      <Chart options={mvConsumptionDiscreteChart} />
    );
    expect(getByTestId('chart')).toBeTruthy();
  });
  it('Should render Real as the legend', () => {
    const { getByText } = render(
      <Chart options={mvConsumptionDiscreteChart} />
    );
    expect(getByText('Real')).toBeTruthy();
  });
  it('Should render Referencia as the legend', () => {
    const { getByText } = render(
      <Chart options={mvConsumptionDiscreteChart} />
    );
    expect(getByText('Referencia')).toBeTruthy();
  });
  it('Should render legend Y  correct', () => {
    const { getByText } = render(
      <Chart options={mvConsumptionDiscreteChart} />
    );
    expect(getByText('Consumo [kWh]')).toBeTruthy();
  });
  it('Should render loading component', () => {
    render(<Chart options={mvConsumptionDiscreteChart} isLoading />);
    expect(screen.getByTestId('chart-loading')).toBeTruthy();
  });
  it('Should render error result component if showError is passed', () => {
    render(
      <Chart
        options={mvConsumptionDiscreteChart}
        showError
        errorContent={
          <Result
            variant="error"
            title="Error chart"
            info="Test info chart error"
          />
        }
      />
    );
    expect(screen.getByTestId('result-error')).toBeTruthy();
    expect(screen.getByTestId('chart-error')).toBeTruthy();
    expect(screen.getByText('Error chart')).toBeTruthy();
    expect(screen.getByText('Test info chart error')).toBeTruthy();
  });

  it('Should properly handle the callback function', () => {
    const mockCallback = jest.fn();
    const { result, getByTestId } = render(
      <Chart options={mvConsumptionDiscreteChart} callback={mockCallback} />
    );
    expect(getByTestId('chart')).toBeTruthy();

    expect(mockCallback).toBeCalled();
  });
});
