import React from 'react';
import { Button } from 'components/Button';
import Grid from 'components/Grid';
import Row from 'components/Row';
import Cell from 'components/Cell';

export default {
  title: 'Button',
  component: Button,
};

export const buttons = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Button text="Primary" variant="primary" />
        <Button text="Secondary" variant="secondary" />
        <Button text="Outline" variant="outline" />
        <Button text="Destructive" variant="destructive" />
        <Button text="Link" variant="link" />
        <Button text="Disabled" variant="primary" isDisabled />
      </Cell>
    </Row>
  </Grid>
);

export const sizes = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Button variant="primary" size="small" text="Small" />
        <Button variant="primary" size="medium" text="Medium" />
        <Button variant="primary" size="large" text="Large" />
        <Button variant="primary" size="xlarge" text="XLarge" />
      </Cell>
    </Row>
    <Row>
      <Cell xs={6}>
        <Button variant="primary" isExpanded text="Expanded" />
      </Cell>
      <Cell xs={6}>
        <Button variant="primary" isExpanded text="Expanded" />
      </Cell>
    </Row>
  </Grid>
);

export const icons = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Button text="Primary" variant="primary" iconBefore="delete" />
        <Button text="Secondary" variant="secondary" iconBefore="delete" />
        <Button text="Outline" variant="outline" iconBefore="delete" />
        <Button text="Destructive" variant="destructive" iconBefore="delete" />
        <Button text="Link" variant="link" iconBefore="delete" />
      </Cell>
      <Cell xs={12}>
        <Button variant="primary" size="medium" iconBefore="delete" isCircle />
        <Button variant="secondary" iconBefore="delete" isCircle />
        <Button variant="outline" size="medium" iconBefore="delete" isCircle />
        <Button variant="destructive" iconBefore="delete" isCircle />
        <Button variant="link" iconBefore="delete" isCircle />
      </Cell>
    </Row>
  </Grid>
);
