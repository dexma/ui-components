import React from 'react';
import { storiesOf } from '@storybook/react';

import Chart from 'components/Chart';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

const options = {
  boost: {
    useGPUTranslations: true,
  },
  title: {
    text: 'My stock chart',
  },
  xAxis: {
    type: 'datetime',
  },
  series: [
    {
      name: 'series0',
      data: (function() {
        const arr = [];
        for (let i = 0; i < 20000; i++) {
          arr.push(Math.random() * 100);
        }
        return arr;
      })(),
      color: 'red',
    },
    {
      name: 'series1',
      data: (function() {
        const arr = [];
        for (let i = 0; i < 20000; i++) {
          arr.push(Math.random() * 100);
        }
        return arr;
      })(),
      color: 'blue',
    },
  ],
  chart: {
    width: 800,
    type: 'column',
    zoomType: 'x',
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      groupPadding: 0,
      borderWidth: 0,
      boostThreshold: 20000,
    },
  },
};

const options2 = {
  title: {
    text: 'My stock chart 2',
  },
  series: [
    {
      data: [1, 2, 3, 5, 6, 7, 8],
    },
  ],
  chart: {
    width: 700,
    type: 'column',
    zoomType: 'x',
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      groupPadding: 0,
      borderWidth: 0,
    },
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
