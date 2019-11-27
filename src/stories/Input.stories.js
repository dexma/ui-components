import React from 'react';
import { Input } from 'components/Input';
import Grid from 'components/Grid';
import Row from 'components/Row';
import Cell from 'components/Cell';
import Paragraph from '../components/Paragraph';

export default {
  title: 'Input',
  component: Input,
};

export const input = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">Basic input text</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Input type="text" placeholder="Input text" />
      </Cell>
    </Row>
  </Grid>
);

export const search = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">Input search in two cell</Paragraph>
      </Cell>
      <Cell xs={6}>
        <Input type="text" placeholder="Search text" icon="search" />
      </Cell>
      <Cell xs={6}>
        <Input type="text" placeholder="Insert date" icon="calendar_range" />
      </Cell>
    </Row>
  </Grid>
);

export const loading = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">Input search with loading prop</Paragraph>
      </Cell>
      <Cell xs={8} xsOffset={2}>
        <Input type="text" placeholder="Search text" icon="search" isLoading />
      </Cell>
    </Row>
  </Grid>
);
