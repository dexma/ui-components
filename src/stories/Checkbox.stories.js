import React, { useState } from 'react';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';
import { Checkbox } from '../components/Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

const CheckboxBasic = ({ text }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => setChecked(!checked);
  return (
    <Checkbox checked={checked} onChange={handleChange}>
      {text && text}
    </Checkbox>
  );
};

export const basic = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Checkboxes are used for a list of options where the user may select
          multiple options, including all or none. They can be grouped
          vertically or horizontally.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <CheckboxBasic />
        <br />
        <CheckboxBasic text="Basic checkbox" />
        <br />
        <Checkbox disabled>Checkbox disabled</Checkbox>
        <br />
        <Checkbox disabled checked>
          Checkbox checked disabled
        </Checkbox>
        <br />
      </Cell>
    </Row>
  </Grid>
);
