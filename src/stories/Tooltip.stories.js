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
          This is the complete tooltip, popover, dropdown, and menu solution for
          the web, you can check all the props in:
          https://atomiks.github.io/tippyjs/v6/all-props/
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tooltip content="Tooltip">
          <Button text="Test" iconBefore="vader"></Button>
        </Tooltip>
      </Cell>
    </Row>
  </Grid>
);
