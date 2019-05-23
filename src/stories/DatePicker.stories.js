import React from 'react';
import { storiesOf } from '@storybook/react';

import { DatePicker } from 'components/DatePicker';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

const selectDates = [
  { value: 'custom', label: 'Custom' },
  { value: 'today', label: 'Today' },
  { value: 'yesterday', label: 'Yesterday' },
  { value: 'last_7_days', label: 'Last 7 days' },
  { value: 'last_30_days', label: 'Last 30 days' },
  { value: 'current_month', label: 'Current month' },
  { value: 'last_month', label: 'Last month' },
  { value: 'year_to_date', label: 'Year to date' },
  { value: 'previous_year', label: 'Previous year' },
];

storiesOf('DatePicker', module)
  .addParameters({
    jest: ['DatePicker'],
  })
  .add('basic', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="DatePicker" line />
      </Cell>
      <Cell medium={12} large={12}>
        <DatePicker />
      </Cell>
    </Grid>
  ))
  .add('with selector', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="DatePicker with selector" line />
      </Cell>
      <Cell medium={12} large={12}>
        <DatePicker selectDates={selectDates} />
      </Cell>
    </Grid>
  ));
