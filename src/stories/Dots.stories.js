import React from 'react';
import { storiesOf } from '@storybook/react';

import Dots from 'components/Dots';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

storiesOf('Dots', module)
  .addParameters({
    jest: ['Dots'],
  })
  .add('basic', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic dots:" line />
      </Cell>
      <Cell size="auto">
        <div
          style={{ background: '#eee', padding: '1.5em', position: 'relative' }}
        >
          <Dots steps={4} />
        </div>
      </Cell>
    </Grid>
  ));
