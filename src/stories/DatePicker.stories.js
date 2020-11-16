import React from 'react';

import { DatePicker } from '../components/DatePicker';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import { mockPeriodOptions } from '../../test/mock/DatePicker';

export default {
  title: 'DatePicker',
  component: DatePicker,
};

export const datePicker = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          An easily datepicker library for the web.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <DatePicker />
      </Cell>
    </Row>
  </Grid>
);

export const preiod = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          An easily datepicker library for the web with a period selectable
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <DatePicker periodOptions={mockPeriodOptions} />
      </Cell>
    </Row>
  </Grid>
);

export const datePickerEs = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          DatePicker with ES language
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <DatePicker periodOptions={mockPeriodOptions} language="es" />
      </Cell>
    </Row>
  </Grid>
);
