import React from 'react';

import Grid from '../components/Grid';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import Cell from '../components/Cell';
import { Chart } from '../components/Chart';
import Button from '../components/Button';

import {
  mockBasicArea,
  mockStackedBar,
  mockStackedBarNegative,
  mockMixed,
  mockHeatmap,
} from '../../test/mock/Chart';

import mvConsumptionDiscreteChart from '../../test/mock/mvConsumptionDiscreteChart';
import mvConsumptionAccumulatedTotalChart from '../../test/mock/mvConsumptionAccumulatedTotalChart';
import mvSavingsAccumulatedPercentageChart from '../../test/mock/mvSavingsAccumulatedPercentageChart';
import Result from '../components/Result';

export default {
  title: 'Chart',
  component: Chart,
  argTypes: {
    dataId: {
      control: {
        disable: true,
      },
    },
  },
};

export const basic = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Wrapper for Highcharts to allow for some specific customisations. For
          deep information about this component visit the official highcharts
          documentation.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Basic Line Chart.</Paragraph>
        <Chart options={mvConsumptionDiscreteChart} />
      </Cell>
    </Row>
  </Grid>
);

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

export const chartLoading = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Basic area chart loading.</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Chart options={mockBasicArea} isLoading />
      </Cell>
    </Row>
  </Grid>
);

export const chartError = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Basic area chart with Result variant error
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Chart
          options={mockBasicArea}
          showError
          errorContent={
            <Result
              variant="error"
              title="Submission Failed"
              info="Please check and modify the following information before resubmitting."
              content={<Button variant="destructive" text="Cancel" />}
            />
          }
        />
      </Cell>
    </Row>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Basic area chart with Result variant success
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Chart
          options={mockBasicArea}
          showError
          errorContent={
            <Result
              variant="success"
              title="Submission Success"
              info="Please check and modify the following information before resubmitting."
            />
          }
        />
      </Cell>
    </Row>
  </Grid>
);

export const basicArea = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Basic area chart.</Paragraph>
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
        <Paragraph margin="1rem 0 1rem 0">Basic stacked chart.</Paragraph>
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
        <Paragraph margin="1rem 0 1rem 0">Basic area chart.</Paragraph>
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
        <Paragraph margin="1rem 0 1rem 0">Basic mixed chart.</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Chart options={mockMixed} />
      </Cell>
    </Row>
  </Grid>
);

export const heatmap = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Basic heatmap.</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Chart options={mockHeatmap} />
      </Cell>
    </Row>
  </Grid>
);
