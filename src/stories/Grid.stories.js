import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Grid from 'components/Grid';
import Row from 'components/Row';
import Cell from 'components/Cell';

const FullCells = () => (
  <Fragment>
    <Cell xs={12} sm={6} md={4} lg={3}>
      <div
        style={{
          background: '#eee',
          padding: '1.5em',
          position: 'relative',
        }}
      />
    </Cell>
    <Cell xs={12} sm={6} md={4} lg={3}>
      <div
        style={{
          background: '#eee',
          padding: '1.5em',
          position: 'relative',
        }}
      />
    </Cell>
    <Cell xs={12} sm={6} md={4} lg={3}>
      <div
        style={{
          background: '#eee',
          padding: '1.5em',
          position: 'relative',
        }}
      />
    </Cell>
    <Cell xs={12} sm={6} md={4} lg={3}>
      <div
        style={{
          background: '#eee',
          padding: '1.5em',
          position: 'relative',
        }}
      />
    </Cell>
  </Fragment>
);

storiesOf('Grid', module)
  .addParameters({
    jest: ['Grid'],
  })
  .add('with normal container', () => (
    <Grid>
      <Row>
        <FullCells />
      </Row>
    </Grid>
  ))
  .add('with full container', () => (
    <Grid fluid>
      <Row>
        <FullCells />
      </Row>
    </Grid>
  ));
