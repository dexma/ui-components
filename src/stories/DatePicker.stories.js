import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { DatePicker } from 'components/DatePicker';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!styles/_variables.scss');

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

storiesOf('DatePicker', module)
  .addParameters({
    jest: ['DatePicker'],
  })
  .add('basic', () => (
    <ThemeProvider theme={theme}>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="DatePicker" line />
        </Cell>
        <Cell medium={12} large={12}>
          <DatePicker />
        </Cell>
      </Grid>
    </ThemeProvider>
  ))
  .add('with selector', () => (
    <ThemeProvider theme={theme}>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="DatePicker with selector" line />
        </Cell>
        <Cell medium={12} large={12}>
          <DatePicker
            periodOptions={period}
            periodDefault={{ value: 'last_7_days', label: 'Last 7 days' }}
          />
        </Cell>
      </Grid>
    </ThemeProvider>
  ));
