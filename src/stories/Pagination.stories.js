import React from 'react';
import { storiesOf } from '@storybook/react';

import Pagination from 'components/Pagination';
import Grid from 'components/Grid';
import Cell from 'components/Cell';

storiesOf('Pagination', module)
  .addParameters({
    jest: ['Pagination'],
  })
  .add('basic', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      <Cell size="full"></Cell>
      <Cell size="auto">
        <Pagination total={100} pageSize={10} defaultCurrent={6} />
      </Cell>
    </Grid>
  ));
