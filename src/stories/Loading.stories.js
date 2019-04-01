import React from 'react';
import { storiesOf } from '@storybook/react';

import Loading from 'components/Loading';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

storiesOf('Loading', module)
  .addParameters({
    jest: ['Loading'],
  })
  .add('basic', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic loading:" line />
      </Cell>
      <Cell size="auto">
        <Loading isLoading />
      </Cell>
    </Grid>
  ));
