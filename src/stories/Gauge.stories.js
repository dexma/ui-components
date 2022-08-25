import React from 'react';

import Grid from '../components/Grid';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import Cell from '../components/Cell';
import Gauge from '../components/Gauge';
import {
  mockCheckpointSeries,
  mockRangeSeries,
  mockSingleCheckpointSeries,
  mockSingleRangeSerie,
} from '../../test/mock/Gauge';

export default {
  title: 'Gauge',
  component: Gauge,
};

export const gauge = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Gauge</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Gauge
          type="DIAL"
          name="Contador general Industrias ACME"
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
          color="#7cb5ec"
          units="kWh"
          indicator={{
            color: '#FB4EDA',
            tooltip: 'Contador general Industrias ACME: 50kWh',
            value: 50,
          }}
          min={0}
          max={100}
          checkpoints={[
            { color: 'blue', tooltip: 'Basic tooltip: 60kWh', value: 60 },
          ]}
        />
      </Cell>
    </Row>
  </Grid>
);

export const basicGauge = () => (
  <Gauge
    type="DIAL"
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
    type="DIAL"
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
    type="DIAL"
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
    type="DIAL"
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
    type="DIAL"
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
