import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Select from 'components/Select';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

const options = [
  { value: '1', label: '1st Floor [01. Luxemburg Building]' },
  { value: '2', label: '1st Floor [02. Luxemburg Building]' },
  { value: '3', label: '1st Floor [03. Luxemburg Building]' },
  { value: '4', label: '1st Floor [04. Luxemburg Building]' },
  { value: '5', label: '1st Floor [05. Luxemburg Building]' },
  { value: '6', label: '1st Floor [06. Luxemburg Building]' },
];

storiesOf('Select', module)
  .addParameters({
    jest: ['Select'],
  })
  .add('basic', () => (
    <Fragment>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Basic select:" line />
        </Cell>
        <Cell large={4}>
          <Select options={options} />
        </Cell>
      </Grid>
    </Fragment>
  ))
  .add('multi', () => (
    <Fragment>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Multi select:" line />
        </Cell>
        <Cell large={4}>
          <Select options={options} isMulti />
        </Cell>
      </Grid>
    </Fragment>
  ));
