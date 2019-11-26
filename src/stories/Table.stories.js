import React from 'react';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Row from 'components/Row';
import Paragraph from 'components/Paragraph';

import { columnsTable, dataTable } from 'test/mock/Table';
import { Table } from 'components/Table';

export default {
  title: 'Table',
  component: Table,
};

export const table = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have dots for show loading part of the UI you can customize
          with 2, 3 or 4 dot
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Table dataSource={dataTable} columns={columnsTable} />
      </Cell>
    </Row>
  </Grid>
);
