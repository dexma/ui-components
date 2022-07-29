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
            value: 40,
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
          units=" kWh"
          value={60}
          min={0}
          max={100}
          checkpoints={[{ color: 'blue', tooltip: 'Basic tooltip', value: 60 }]}
        />
      </Cell>
    </Row>
  </Grid>
);

export const basicGauge = () => (
  <Gauge type="DIAL" value={59} min={0} max={100} />
);

export const SingleRangeSerieGauge = () => (
  <Gauge
    type="DIAL"
    color="#00CC88"
    value={59}
    min={0}
    max={100}
    ranges={mockSingleRangeSerie}
  />
);

export const MultipleRangeSerieGauge = () => (
  <Gauge
    type="DIAL"
    color="#FE9753"
    value={59}
    min={0}
    max={100}
    ranges={mockRangeSeries}
  />
);

export const SingleCheckpointSerieGauge = () => (
  <Gauge
    type="DIAL"
    color="#FE9753"
    value={59}
    min={0}
    max={100}
    ranges={mockRangeSeries}
    checkpoints={mockSingleCheckpointSeries}
  />
);

export const MultipleCheckpointSerieGauge = () => (
  <Gauge
    type="DIAL"
    color="#FE9753"
    value={59}
    min={0}
    max={100}
    ranges={mockRangeSeries}
    checkpoints={mockCheckpointSeries}
  />
);
