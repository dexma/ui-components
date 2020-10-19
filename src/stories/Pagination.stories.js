import React from 'react';

import { Pagination } from '../components/Pagination';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const paginations = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">Basic pagination</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Pagination total={100} pageSize={10} defaultCurrent={6} />
      </Cell>
    </Row>
  </Grid>
);
