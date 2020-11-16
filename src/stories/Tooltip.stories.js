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
        <Paragraph margin="1rem 0 1rem 0">A simple text popup tip.</Paragraph>
      </Cell>
      <Cell>
        <Tooltip content="Tooltip" trigger="click">
          <Button text="Click me"></Button>
        </Tooltip>
        <Tooltip content="Tooltip">
          <Button text="Test" iconBefore="vader"></Button>
        </Tooltip>
        <Tooltip content="Tooltip top" position="top">
          <Button
            text="Test top"
            iconBefore="vader"
            variant="secondary"
          ></Button>
        </Tooltip>
        <Tooltip content="Tooltip right" position="right">
          <Button iconBefore="help" isCircle></Button>
        </Tooltip>
      </Cell>
    </Row>
  </Grid>
);
