import React from 'react';
import { Loading } from '../components/Loading';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

export default {
  title: 'Loading',
  component: Loading,
  argTypes: {
    theme: {
      control: {
        disable: true,
      },
    },
  },
};

export const loading = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Render loading spinner for the UI views.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <div
          style={{
            background: '#eee',
            padding: '1.5em',
            position: 'relative',
            marginTop: '30px',
          }}
        >
          <Loading isLoading size={50} />
        </div>
      </Cell>
      <Cell xs={12}>
        <div
          style={{
            background: '#eee',
            padding: '1.5em',
            position: 'relative',
            marginTop: '30px',
          }}
        >
          <Loading isLoading color="teal500" size={50} />
        </div>
      </Cell>
      <Cell xs={12}>
        <div
          style={{
            background: '#eee',
            padding: '1.5em',
            position: 'relative',
            marginTop: '30px',
          }}
        >
          <Loading isLoading color="red" size={50} />
        </div>
      </Cell>
      <Cell xs={12}>
        <div
          style={{
            background: '#eee',
            padding: '1.5em',
            position: 'relative',
            marginTop: '30px',
          }}
        >
          <Loading isLoading color="cyan" size={50} />
        </div>
      </Cell>
    </Row>
  </Grid>
);

export const playground = args => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Use the Controls on the section below to add your own props to this
          Loading.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <div
          style={{
            background: '#eee',
            padding: '1.5em',
            position: 'relative',
            marginTop: '30px',
          }}
        >
          <Loading {...args}>
            <div>LOADED</div>
          </Loading>
        </div>
      </Cell>
    </Row>
  </Grid>
);
