import React, { useState } from 'react';

import SwitchPeriodComparative from '../components/SwitchPeriodComparative';

import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import {
  startDate,
  endDate,
  previousPeriodText,
  samePeriodLastYearText,
} from '../../test/mock/SwitchPeriodComparative';

export default {
  title: 'SwitchPeriodComparative',
  component: SwitchPeriodComparative,
};

export const switchPeriodComparative = () => {
  const [stateNoText, setStateNoText] = useState({
    period: 'previous_period',
    date: null,
  });
  return (
    <Grid fluid>
      <Row>
        <Cell xs={12}>
          <Paragraph margin="1rem 0 1rem 0">
            A switch period comparative between two dates start and end, the
            text its optional so if you dont put nothing its ok
          </Paragraph>
        </Cell>
        <Cell xs={12}>
          <SwitchPeriodComparative
            selectedPeriod={stateNoText.period}
            startDate={startDate}
            endDate={endDate}
            onPeriodSelect={({ period, date }) =>
              setStateNoText({ period, date })
            }
          />
        </Cell>
      </Row>
    </Grid>
  );
};

export const switchPeriodComparativeWitText = () => {
  const [state, setState] = useState({ period: 'previous_period', date: null });
  const { period } = state;
  return (
    <Grid fluid>
      <Row>
        <Cell xs={12}>
          <Paragraph margin="1rem 0 1rem 0">
            A switch period comparative between two dates start and end, the
            text its optional so if you dont put nothing its ok
          </Paragraph>
        </Cell>
        <Cell xs={12}>
          <SwitchPeriodComparative
            selectedPeriod={period}
            startDate={startDate}
            endDate={endDate}
            previousPeriodText={previousPeriodText}
            samePeriodLastYearText={samePeriodLastYearText}
            onPeriodSelect={({ period, date }) => setState({ period, date })}
          />
        </Cell>
      </Row>
    </Grid>
  );
};
