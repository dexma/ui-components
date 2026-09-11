import { render, screen } from '@testing-library/react';
import { expect, describe, it, vitest } from 'vitest';

import { Chart, Result, ResultVariants } from '@components';
import mvConsumptionDiscreteChart from './mock/mvConsumptionDiscreteChart';
import { mockSankey } from './mock/Chart';

describe('<Chart>', () => {
    it('Should render the chart correct', () => {
        render(<Chart options={mvConsumptionDiscreteChart} data-testid='test chart' />);
        expect(screen.getByTestId('test chart')).toBeTruthy();
    });
    it('Should render Real as the legend', () => {
        render(<Chart options={mvConsumptionDiscreteChart} />);
        expect(screen.getByText('Real')).toBeTruthy();
    });
    it('Should render Referencia as the legend', () => {
        render(<Chart options={mvConsumptionDiscreteChart} />);
        expect(screen.getByText('Referencia')).toBeTruthy();
    });
    it('Should render legend Y correct', () => {
        render(<Chart options={mvConsumptionDiscreteChart} />);
        expect(screen.queryAllByText('Consumo [kWh]')).toHaveLength(2);
    });
    it('Should render loading component', () => {
        render(<Chart options={mvConsumptionDiscreteChart} isLoading />);
        expect(screen.getByTestId('chart-loading')).toBeTruthy();
    });
    it('Should render error result component if showError is passed', () => {
        render(<Chart options={mvConsumptionDiscreteChart} showError errorContent={<Result variant={ResultVariants.ERROR} title='Error chart' info='Test info chart error' />} />);
        expect(screen.getByTestId('result-error')).toBeTruthy();
        expect(screen.getByTestId('chart-error')).toBeTruthy();
        expect(screen.getByText('Error chart')).toBeTruthy();
        expect(screen.getByText('Test info chart error')).toBeTruthy();
    });

    it('Should render a sankey diagram', () => {
        render(<Chart options={mockSankey} data-testid='sankey chart' />);
        expect(screen.getByTestId('sankey chart')).toBeTruthy();
        expect(screen.getAllByText('Energy flow by consumption point').length).toBeGreaterThan(0);
        expect(screen.getAllByText('HVAC').length).toBeGreaterThan(0);
    });

    it('Should properly handle the callback function', () => {
        const mockCallback = vitest.fn();
        render(<Chart options={mvConsumptionDiscreteChart} callback={mockCallback} data-testid='chart' />);
        expect(screen.getByTestId('chart')).toBeTruthy();

        expect(mockCallback).toBeCalled();
    });
});
