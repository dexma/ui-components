import React from 'react';

import { DatePicker } from 'components/DatePicker';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';

const period = [
  { value: 'custom', label: 'Custom' },
  { value: 'today', label: 'Today' },
  { value: 'yesterday', label: 'Yesterday' },
  { value: 'last_7_days', label: 'Last 7 days' },
  { value: 'last_28_days', label: 'Last 28 days' },
  { value: 'current_month', label: 'So far this month' },
  { value: 'last_month', label: 'Last month' },
  { value: 'year_to_date', label: 'So far this year' },
  { value: 'previous_year', label: 'Previous year' },
];

export default {
  title: 'DatePicker',
  component: DatePicker,
};

export const datePicker = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          We preset a series of colorful tag styles for use in different
          situations. You can also set it to a hex color string for custom
          color.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <DatePicker />
      </Cell>
    </Row>
  </Grid>
);

export const preiod = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          We preset a series of colorful tag styles for use in different
          situations. You can also set it to a hex color string for custom
          color.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <DatePicker
          periodOptions={period}
          periodDefault={{ value: 'last_7_days', label: 'Last 7 days' }}
        />
      </Cell>
    </Row>
  </Grid>
);
