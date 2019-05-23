import React from 'react';
import { storiesOf } from '@storybook/react';

import Chart from 'components/Chart';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

const options = {
  title: {
    text: 'My stock chart',
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
  chart: {
    width: 500
  },
};

const options2 = {
  title: {
    text: 'My stock chart 2',
  },
  series: [
    {
      data: [1, 2, 3, 5 ,6 , 7, 8],
    },
  ],
  chart: {
    width: 700
  },
};

storiesOf('Chart', module)
  .addParameters({
    jest: ['Chart'],
  })
  .add('with text', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic cards with text:" line />
      </Cell>
      <Cell size="auto" medium={12}>
        <Chart options={options} />
      </Cell>
      <Cell size="auto" medium={12}>
        <Chart options={options2} />
      </Cell>
    </Grid>
  ));
