import React from 'react';
import { Loading } from '../components/Loading';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

export default {
  title: 'Loading',
  component: Loading,
};

export const loading = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Render loading spinner for the UI views
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <div
          style={{ background: '#eee', padding: '1.5em', position: 'relative' }}
        >
          <Loading isLoading />
        </div>
      </Cell>
    </Row>
  </Grid>
);
