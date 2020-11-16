import React from 'react';

import SwitchPeriodComparative from '../components/SwitchPeriodComparative';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import {
  startDate,
  endDate,
  previousPriodText,
  samePriodLastYearText,
} from '../../test/mock/SwitchPeriodComparative';

export default {
  title: 'SwitchPeriodComparative',
  component: SwitchPeriodComparative,
};

export const switchPeriodComparative = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          A switch period comparative between two dates start and end, the text
          its optional so if you dont put nothing its ok
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <SwitchPeriodComparative
          startDate={startDate}
          endDate={endDate}
          previousPriodText={previousPriodText}
          samePriodLastYearText={samePriodLastYearText}
          onPeriodSelect={a => console.log(a)}
        />
      </Cell>
    </Row>
  </Grid>
);
