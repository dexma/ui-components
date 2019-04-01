import React from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';

import FieldEditable from 'components/FieldEditable';
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

storiesOf('FieldEditable', module)
  .addParameters({
    jest: ['FieldEditable'],
  })
  .add('basic', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Field editable" line />
      </Cell>
      <Cell medium={12} large={12}>
        <FieldEditable
          value="Input value"
          placeholder="Input placeholder"
          name="title"
          isEditable
          {...eventsFromObject}
        />
      </Cell>
      <Cell size="full">
        <Title text="Field disabled" line />
      </Cell>
      <Cell medium={12} large={12}>
        <FieldEditable
          value="Input value"
          placeholder="Input placeholder"
          name="title"
          disabled
          {...eventsFromObject}
        />
      </Cell>
      <Cell size="full">
        <Title text="Field loading" line />
      </Cell>
      <Cell medium={12} large={12}>
        <FieldEditable
          isLoading
          isEditable
          value="Input value"
          placeholder="Input placeholder"
          name="title"
          {...eventsFromObject}
        />
      </Cell>
    </Grid>
  ));
