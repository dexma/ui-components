import React from 'react';

import { Grid, Cell, Result, Row, Paragraph, Chart, ResultVariants } from '@components';
import { mockBasicArea, mockStackedBar, mockStackedBarNegative, mockMixed, mockHeatmap } from '../../tests/mock/Chart';
import mvConsumptionDiscreteChart from '../../tests/mock/mvConsumptionDiscreteChart';
import mvConsumptionAccumulatedTotalChart from '../../tests/mock/mvConsumptionAccumulatedTotalChart';
import mvSavingsAccumulatedPercentageChart from '../../tests/mock/mvSavingsAccumulatedPercentageChart';

export default {
    title: 'Chart',
    component: Chart,
    tags: ['autodocs'],
    argTypes: {
        dataId: {
            control: {
                disable: true,
            },
        },
    },
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Wrapper for Highcharts to allow for some specific customisations. For deep information about this component visit the official highcharts documentation.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic Line Chart.</Paragraph>
                <Chart options={mvConsumptionDiscreteChart} />
            </Cell>
        </Row>
    </Grid>
);

export const MvExample = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>M&V Chart</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Consumo real vs referencia - Electricidad</Paragraph>
                <Chart options={mvConsumptionDiscreteChart} />
            </Cell>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Consumo acumulado real vs referencia - Electricidad</Paragraph>
                <Chart options={mvConsumptionAccumulatedTotalChart} />
            </Cell>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Ahorros porcentuales acumulados vs objetivo - Electricidad</Paragraph>
                <Chart options={mvSavingsAccumulatedPercentageChart} />
            </Cell>
        </Row>
    </Grid>
);

export const Loading = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic area chart loading.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Chart options={mockBasicArea} isLoading />
            </Cell>
        </Row>
    </Grid>
);

export const Error = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic area chart with Result variant error</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Chart
                    options={mockBasicArea}
                    showError
                    errorContent={
                        <Result
                            variant={ResultVariants.ERROR}
                            title='Submission Failed'
                            info='Please check and modify the following information before resubmitting.'
                            content={<button type='button'>Cancel</button>}
                        />
                    }
                />
            </Cell>
        </Row>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic area chart with Result variant success</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Chart
                    options={mockBasicArea}
                    showError
                    errorContent={
                        <Result variant={ResultVariants.SUCCESS} title='Submission Success' info='Please check and modify the following information before resubmitting.' />
                    }
                />
            </Cell>
        </Row>
    </Grid>
);

export const BasicArea = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic area chart.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Chart options={mockBasicArea} />
            </Cell>
        </Row>
    </Grid>
);

export const StackedBar = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic stacked chart.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Chart options={mockStackedBar} />
            </Cell>
        </Row>
    </Grid>
);

export const StackedBarNegative = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic area chart.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Chart options={mockStackedBarNegative} />
            </Cell>
        </Row>
    </Grid>
);

export const Mixed = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic mixed chart.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Chart options={mockMixed} />
            </Cell>
        </Row>
    </Grid>
);

export const Heatmap = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic heatmap.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Chart options={mockHeatmap} />
            </Cell>
        </Row>
    </Grid>
);
