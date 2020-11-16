import React from 'react';

import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

export default {
  title: 'Paragraph',
  component: Paragraph,
};

export const paragraph = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Basic paragraph</Paragraph>
        <Paragraph margin="1rem 0 1rem 0" size="50px">
          Size 50px paragraph
        </Paragraph>
        <Paragraph margin="1rem 0 1rem 0" size="2rem">
          Size 2rem paragraph
        </Paragraph>
      </Cell>
    </Row>
  </Grid>
);
