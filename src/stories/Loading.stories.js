import React from 'react';
import { storiesOf } from '@storybook/react';

import Loading from 'components/Loading';
import Grid from 'components/Grid';
import Cell from 'components/Cell';

storiesOf('Loading', module)
  .addParameters({
    jest: ['Loading'],
  })
  .add('basic', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      <Cell size="full"></Cell>
      <Cell size="auto">
        <div
          style={{ background: '#eee', padding: '1.5em', position: 'relative' }}
        >
          <Loading isLoading />
        </div>
      </Cell>
    </Grid>
  ));
