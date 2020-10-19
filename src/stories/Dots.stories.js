import React from 'react';
import { Dots } from '../components/Dots';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

export default {
  title: 'Dots',
  component: Dots,
};

export const dots = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have dots for show loading part of the UI you can customize
          with 2, 3 or 4 dot
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Dots steps={4} />
      </Cell>
      <Cell xs={12}>
        <Dots steps={3} />
      </Cell>
    </Row>
  </Grid>
);
