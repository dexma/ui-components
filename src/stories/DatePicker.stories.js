import React from 'react';
import { storiesOf } from '@storybook/react';

import { DatePicker } from 'components/DatePicker';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

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
  ));
