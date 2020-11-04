import React from 'react';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

import Tooltip from '../components/Tooltip';
import Button from '../components/Button';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

export const tooltip = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Alert component used when you need to show messages to users.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tooltip title="test" size="medium">
          <Button content="tooltip" />
        </Tooltip>
      </Cell>
    </Row>
  </Grid>
);
