import React from 'react';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';
import { Switch } from '../components/Switch';

export default {
  title: 'Switch',
  component: Switch,
};

export const defaultSwitch = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          A simple switch that changes value on click.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Switch defaultChecked />
      </Cell>
    </Row>
  </Grid>
);

export const sizes = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Switch size="small" />
      </Cell>
      <Cell xs={12}>
        <Switch />
      </Cell>
    </Row>
  </Grid>
);

export const disabled = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Switch defaultChecked={false} disabled />
      </Cell>
      <Cell xs={12}>
        <Switch defaultChecked disabled />
      </Cell>
    </Row>
  </Grid>
);
