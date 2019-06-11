import React from 'react';
import { storiesOf } from '@storybook/react';

import SwitchPeriodComparative from 'components/SwitchPeriodComparative';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';
import Theme from 'components/Theme';

import {
  startDate,
  endDate,
  previousPriodText,
  samePriodLastYearText,
} from 'test/mock/SwitchPeriodComparative';

storiesOf('SwitchPeriodComparative', module)
  .addParameters({
    jest: ['SwitchPeriodComparative'],
  })
  .add('basic', () => (
    <Theme>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Basic SwitchPeriodComparative:" line />
        </Cell>
        <Cell size="auto" medium={12}>
          <SwitchPeriodComparative
            startDate={startDate}
            endDate={endDate}
            previousPriodText={previousPriodText}
            samePriodLastYearText={samePriodLastYearText}
            onPeriodSelect={a => console.log(a)}
          />
        </Cell>
      </Grid>
    </Theme>
  ))
  .add('without text', () => (
    <Theme>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Basic SwitchPeriodComparative:" line />
        </Cell>
        <Cell size="auto" medium={12}>
          <SwitchPeriodComparative startDate={startDate} endDate={endDate} />
        </Cell>
      </Grid>
    </Theme>
  ));
