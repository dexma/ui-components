import React from 'react';
import { Select } from '../components/Select';
import { Button } from '../components/Button';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

const options = [
  { value: '1', label: '1st Floor [01. Luxemburg Building]' },
  { value: '2', label: '1st Floor [02. Luxemburg Building]' },
  { value: '3', label: '1st Floor [03. Luxemburg Building]' },
  { value: '4', label: '1st Floor [04. Luxemburg Building]' },
  { value: '5', label: '1st Floor [05. Luxemburg Building]' },
  { value: '6', label: '1st Floor [06. Luxemburg Building]' },
];

export default {
  title: 'Layouts',
  component: '',
};

export const layouts = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          We preset a series of colorful tag styles for use in different
          situations. You can also set it to a hex color string for custom
          color.
        </Paragraph>
      </Cell>
      <Cell xs={4}>
        <Select options={options} />
      </Cell>
      <Cell xs={3}>
        <Button text="Pre" />
      </Cell>
    </Row>
  </Grid>
);
