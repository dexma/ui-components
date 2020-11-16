import React from 'react';

import Grid from '../components/Grid';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import Cell from '../components/Cell';
import Chart from '../components/Chart';

import {
  mockBasicArea,
  mockStackedBar,
  mockStackedBarNegative,
  mockMixed,
} from '../../test/mock/Chart';

import mvConsumptionDiscreteChart from '../../test/mock/mvConsumptionDiscreteChart';
import mvConsumptionAccumulatedTotalChart from '../../test/mock/mvConsumptionAccumulatedTotalChart';
import mvSavingsAccumulatedPercentageChart from '../../test/mock/mvSavingsAccumulatedPercentageChart';

export default {
  title: 'Chart',
  component: Chart,
};

export const mvExample = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">M&V Chart</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Consumo real vs referencia - Electricidad
        </Paragraph>
        <Chart options={mvConsumptionDiscreteChart} />
      </Cell>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Consumo acumulado real vs referencia - Electricidad
        </Paragraph>
        <Chart options={mvConsumptionAccumulatedTotalChart} />
      </Cell>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Ahorros porcentuales acumulados vs objetivo - Electricidad
        </Paragraph>
        <Chart options={mvSavingsAccumulatedPercentageChart} />
      </Cell>
    </Row>
  </Grid>
);

export const basicArea = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Basic area chart</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Chart options={mockBasicArea} />
      </Cell>
    </Row>
  </Grid>
);

export const stackedBar = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Basic area chart</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Chart options={mockStackedBar} />
      </Cell>
    </Row>
  </Grid>
);

export const stackedBarNegative = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Basic area chart</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Chart options={mockStackedBarNegative} />
      </Cell>
    </Row>
  </Grid>
);

export const mixed = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Basic area chart</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Chart options={mockMixed} />
      </Cell>
    </Row>
  </Grid>
);
