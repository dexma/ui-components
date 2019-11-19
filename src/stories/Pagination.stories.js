import React from 'react';
import { storiesOf } from '@storybook/react';

import Pagination from 'components/Pagination';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

storiesOf('Pagination', module)
  .addParameters({
    jest: ['Pagination'],
  })
  .add('basic', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic pagination:" line />
      </Cell>
      <Cell size="auto">
        <Pagination total={100} pageSize={10} defaultCurrent={6} />
      </Cell>
    </Grid>
  ));
