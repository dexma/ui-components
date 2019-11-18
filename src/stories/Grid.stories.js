import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Grid from 'components/Grid';
import Row from 'components/Row';
import Cell from 'components/Cell';

const gridCells = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const FullCells = () => {
  return (
    <Fragment>
      {gridCells.map(item => {
        return (
          <Fragment>
            <Cell xs={item}>
              <div
                style={{
                  background: '#eee',
                  padding: '1.5em',
                  position: 'relative',
                  marginBottom: '.5rem',
                }}
              />
            </Cell>
            <Cell xs>
              <div
                style={{
                  background: '#eee',
                  padding: '1.5em',
                  position: 'relative',
                  marginBottom: '.5rem',
                }}
              />
            </Cell>
          </Fragment>
        );
      })}
    </Fragment>
  );
};

const OffsetCells = () => {
  return (
    <Fragment>
      {gridCells.map(item => {
        const offset = 12 - item;
        return (
          <Cell xs={item} xsOffset={offset}>
            <div
              style={{
                background: '#eee',
                padding: '1.5em',
                position: 'relative',
                marginBottom: '.5rem',
              }}
            />
          </Cell>
        );
      })}
    </Fragment>
  );
};

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
  ))
  .add('with offset cell', () => (
    <Grid>
      <Row>
        <OffsetCells />
      </Row>
    </Grid>
  ));
