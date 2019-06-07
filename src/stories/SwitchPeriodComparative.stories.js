import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import SwitchPeriodComparative from 'components/SwitchPeriodComparative';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';
import Theme from 'components/Theme';

const startDate = '2019-05-31T00:00:00+02:00';
const endDate = '2019-06-06T23:59:59+02:00';
const previousPriodText = 'Previous period';
const samePriodLastYearText = 'Same period last year';

storiesOf('Button', module)
  .addParameters({
    jest: ['Button'],
  })
  .add('with text', () => (
    <Theme>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Basic cards with text:" line />
        </Cell>
        <Cell size="auto" medium={12}>
          <SwitchPeriodComparative
            startDate={startDate}
            endDate={endDate}
            previousPriodText={previousPriodText}
            samePriodLastYearText={samePriodLastYearText}
          />
        </Cell>
      </Grid>
    </Theme>
  ));
