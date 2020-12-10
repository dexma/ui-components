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
        <Paragraph margin="1rem 0 1rem 0">
          Pagination is used for splitting up content or data into several
          pages, with a control for navigating to the next or previous page.
          Depending on the parents component width and / or number of available
          provided pages, the pagination component will automatically scale if
          required, some pages at the beginning / at the end of the list will be
          hidden with … symbol.
        </Paragraph>
        ´
      </Cell>
      <Cell xs={12}>
        <Pagination total={100} pageSize={10} defaultCurrent={6} />
      </Cell>
    </Row>
  </Grid>
);
