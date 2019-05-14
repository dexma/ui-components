import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import DatePicker from 'components/DatePicker';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

const eventsFromObject = actions({
  onEdit: 'click onEdit button',
  onSave: 'click onSave button',
  onClose: 'click onClose button',
  onChange: 'onChange input',
  onFocus: 'onFocus input',
  onBlur: 'onBlur input',
});

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
        <DatePicker/>
      </Cell>
    </Grid>
  ));
