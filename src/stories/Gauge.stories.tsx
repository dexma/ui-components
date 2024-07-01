import React from 'react';

import { Grid, Row, Paragraph, Cell, Gauge } from '@components';
import { mockCheckpointSeries, mockRangeSeries, mockSingleCheckpointSeries, mockSingleRangeSerie } from '../../tests/mock/Gauge';

export default {
    title: 'Gauge',
    component: Gauge,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Gauge</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Gauge
                    data-testid='gauge-chart'
                    type='DIAL'
                    title='Contador general Industrias ACME'
                    comparison={{
                        enabled: true,
                        value: 80,
                        color: '#00CC88',
                        period: {
                            from: null,
                            to: null,
                            type: 'TEXT',
                            text: 'Compared to last seven days',
                        },
                        showAsPercentage: false,
                    }}
                    ranges={[
                        {
                            color: '#00CC88',
                            from: 0,
                            to: 50,
                            tooltip: 'Good',
                        },
                        {
                            color: '#FE9753',
                            from: 50,
                            to: 75,
                            tooltip: 'So-So',
                        },
                        {
                            color: '#FD5754',
                            from: 75,
                            to: 100,
                            tooltip: 'Bad',
                        },
                    ]}
                    units='kWh'
                    indicator={{
                        color: '#FB4EDA',
                        tooltip: 'Contador general Industrias ACME: 50kWh',
                        value: 50,
                    }}
                    min={0}
                    max={100}
                    checkpoints={[{ color: '#000FFF', tooltip: 'Basic tooltip: 60kWh', value: 60 }]}
                    options={{ subtitle: { text: 'last seven days' } }}
                />
            </Cell>
        </Row>
    </Grid>
);

export const BasicGauge = () => (
    <Gauge
        type='DIAL'
        indicator={{
            color: '#00CC88',
            tooltip: 'Contador general Industrias ACME: 50kWh',
            value: 50,
        }}
        min={0}
        max={100}
    />
);

export const SingleRangeSerieGauge = () => (
    <Gauge
        type='DIAL'
        indicator={{
            color: '#00CC88',
            tooltip: 'Contador general Industrias ACME: 50kWh',
            value: 50,
        }}
        min={0}
        max={100}
        ranges={mockSingleRangeSerie}
    />
);

export const MultipleRangeSerieGauge = () => (
    <Gauge
        type='DIAL'
        indicator={{
            color: '#FB4EDA',
            tooltip: 'Contador general Industrias ACME: 50kWh',
            value: 50,
        }}
        min={0}
        max={100}
        ranges={mockRangeSeries}
    />
);

export const SingleCheckpointSerieGauge = () => (
    <Gauge
        type='DIAL'
        indicator={{
            color: '#FB4EDA',
            tooltip: 'Contador general Industrias ACME: 50kWh',
            value: 50,
        }}
        min={0}
        max={100}
        ranges={mockRangeSeries}
        checkpoints={mockSingleCheckpointSeries}
    />
);

export const MultipleCheckpointSerieGauge = () => (
    <Gauge
        type='DIAL'
        indicator={{
            color: '#FB4EDA',
            tooltip: 'Contador general Industrias ACME: 50kWh',
            value: 50,
        }}
        min={0}
        max={100}
        ranges={mockRangeSeries}
        checkpoints={mockCheckpointSeries}
    />
);
