import React from 'react';
import { Progress } from 'components/Progress';
import Grid from 'components/Grid';
import Row from 'components/Row';
import Cell from 'components/Cell';
import Paragraph from 'components/Paragraph';

export default {
  title: 'Progress',
  component: Progress,
};

export const progress = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Display the current progress of an operation flow.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Progress percent={20} text="20%" color="grey" />
        <Progress percent={40} text="40%" color="red" />
        <Progress percent={60} text="60%" color="amber" />
        <Progress percent={80} text="80%" color="green" />
      </Cell>
    </Row>
  </Grid>
);

export const progressTransparent = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Display the current progress of an operation flow.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Progress percent={20} text="20%" color="grey" isTransparent />
        <Progress percent={40} text="40%" color="red" isTransparent />
        <Progress percent={60} text="60%" color="amber" isTransparent />
        <Progress percent={80} text="80%" color="green" isTransparent />
      </Cell>
    </Row>
  </Grid>
);

const oneMark = [{ value: 30, color: 'black' }];
const twoMark = [
  { value: 20, color: 'blue' },
  { value: 50, color: 'black' },
];

export const marks = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Display the current progress of an operation flow.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Progress percent={10} text="10%" color="red" marks={oneMark} />
        <Progress percent={40} text="40%" color="green" marks={twoMark} />
      </Cell>
    </Row>
  </Grid>
);
