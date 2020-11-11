import React from 'react';
import { render } from '@testing-library/react';

import Chart from '../../src/components/Chart';
import mvConsumptionDiscreteChart from '../mock/mvConsumptionDiscreteChart';

describe('<Chart>', () => {
  it('Should render the chart correct', () => {
    const { getByTestId } = render(
      <Chart options={mvConsumptionDiscreteChart} />
    );
    expect(getByTestId("chart")).toBeTruthy();
  });
  it('Should render Real as the legend', () => {
    const { getByText } = render(
      <Chart options={mvConsumptionDiscreteChart} />
    );
    expect(getByText("Real")).toBeTruthy();
  });
  it('Should render Referencia as the legend', () => {
    const { getByText } = render(
      <Chart options={mvConsumptionDiscreteChart} />
    );
    expect(getByText("Referencia")).toBeTruthy();
  });
  it('Should render legend Y  correct', () => {
    const { getByText } = render(
      <Chart options={mvConsumptionDiscreteChart} />
    );
    expect(getByText("Consumo [kWh]")).toBeTruthy();
  });
});
