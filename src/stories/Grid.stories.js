import React from 'react';

import { Grid } from '../components/Grid';
import { Row } from '../components/Row';
import { Cell } from '../components/Cell';
import Paragraph from '../components/Paragraph';

export default {
  title: 'Grid',
  component: Grid,
};

const CellStyle = {
  background: '#13C3A3',
  color: 'white',
  width: '100%',
  height: '40px',
  lineHeight: '40px',
  position: 'relative',
  display: 'block',
  textAlign: 'center',
  borderRadius: '4px',
};

export const grid = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          A grid system based on the flex display property
        </Paragraph>
      </Cell>
      <Grid fluid>
        <Row>
          <Cell xs={2}>
            <div style={CellStyle}>2</div>
          </Cell>
          <Cell xs={8}>
            <div style={CellStyle}>8</div>
          </Cell>
          <Cell xs={2}>
            <div style={CellStyle}>2</div>
          </Cell>
          <Cell xs={3}>
            <div style={CellStyle}>3</div>
          </Cell>
          <Cell xs={6}>
            <div style={CellStyle}>6</div>
          </Cell>
          <Cell xs={3}>
            <div style={CellStyle}>3</div>
          </Cell>
        </Row>
      </Grid>
    </Row>
  </Grid>
);

export const auto = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          We can set auto width if you dont pass any prop
        </Paragraph>
      </Cell>
      <Grid fluid>
        <Row>
          <Cell xs={2}>
            <div style={CellStyle}>2</div>
          </Cell>
          <Cell xs={5}>
            <div style={CellStyle}>5</div>
          </Cell>
          <Cell>
            <div style={CellStyle}>auto</div>
          </Cell>
        </Row>
      </Grid>
    </Row>
  </Grid>
);

export const offset = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Offset a column</Paragraph>
      </Cell>
      <Grid fluid>
        <Row>
          <Cell xsOffset={6} xs={6}>
            <div style={CellStyle}>offset 6 - cell 6</div>
          </Cell>
        </Row>
        <Row>
          <Cell xsOffset={4} xs={8}>
            <div style={CellStyle}>offset 4 - cell 8</div>
          </Cell>
        </Row>
      </Grid>
    </Row>
  </Grid>
);
