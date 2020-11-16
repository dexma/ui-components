import React from 'react';
import Divider from '../components/Divider';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

export default {
  title: 'Divider',
  component: Divider,
};

export const divider = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          We preset a series of colorful tag styles for use in different
          situations. You can also set it to a hex color string for custom
          color.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Divider />
      </Cell>
    </Row>
  </Grid>
);
