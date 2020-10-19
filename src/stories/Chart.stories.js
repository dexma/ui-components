import React from 'react';

import Grid from '../components/Grid';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import Cell from '../components/Cell';
import { Chart } from '../components/Chart';

import {
  mockBasicArea,
  mockStackedBar,
  mockStackedBarNegative,
  mockMixed,
} from '../../test/mock/Chart';

export default {
  title: 'Chart',
  component: Chart,
};

export const basicArea = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">Basic area chart</Paragraph>
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
        <Paragraph m="1rem 0 1rem 0">Basic area chart</Paragraph>
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
        <Paragraph m="1rem 0 1rem 0">Basic area chart</Paragraph>
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
        <Paragraph m="1rem 0 1rem 0">Basic area chart</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Chart options={mockMixed} />
      </Cell>
    </Row>
  </Grid>
);
