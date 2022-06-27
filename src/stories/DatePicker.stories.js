import React from 'react';

import moment from 'moment';
import { DatePicker } from '../components/DatePicker';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import { mockPeriodOptions } from '../../test/mock/DatePicker';
import theme from '../styles/theme';
import AntdPicker from '../components/AntdPicker';

export default {
  title: 'DatePicker',
  component: AntdPicker,
};

export const antdDatePicker = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          DatePicker provided by Ant Design UI library.
        </Paragraph>
      </Cell>
      <Cell>
        <DatePicker theme={theme} type="date" />
        <br />
        <DatePicker theme={theme} picker="week" />
        <br />
        <DatePicker theme={theme} picker="month" />
        <br />
        <DatePicker theme={theme} picker="year" />
        <br />
      </Cell>
    </Row>
  </Grid>
);

export const antdRangePicker = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          RangePicker provided by Ant Design UI library.
        </Paragraph>
      </Cell>
      <Cell>
        <DatePicker theme={theme} type="range" />
        <br />
        <DatePicker theme={theme} type="range" picker="week" />
        <br />
        <DatePicker theme={theme} type="range" picker="month" />
        <br />
        <DatePicker theme={theme} type="range" picker="year" />
        <br />
      </Cell>
    </Row>
  </Grid>
);

export const antdDateTimePicker = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          This property provide an additional time selection. When showTime is
          an Object, its properties will be passed on to built-in TimePicker.
          Remember to set a &quot;format&quot; value that includes the time
          values (like &quot;DD/MM/yyyy HH:mm:ss&quot;)
        </Paragraph>
      </Cell>
      <Cell>
        <DatePicker
          theme={theme}
          type="date"
          showTime
          format="DD/MM/yyyy HH:mm:ss"
        />
        <br />
        <DatePicker
          theme={theme}
          type="range"
          showTime
          format="DD/MM/yyyy HH:mm:ss"
        />
        <br />
      </Cell>
    </Row>
  </Grid>
);

export const antdPickerPresets = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          We can set preset ranges to RangePicker to improve user experience.
        </Paragraph>
      </Cell>
      <Cell>
        <DatePicker
          theme={theme}
          type="range"
          showTime
          ranges={{
            Today: [moment().startOf('day'), moment().endOf('day')],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
          }}
        />
        <br />
      </Cell>
    </Row>
  </Grid>
);

export const migrationDatePickerLegacy = () => (
  <Grid fluid>
    <Row>
      <Paragraph margin="1rem 0 1rem 0">
        In this section we suggest the changes on some props to apply to
        DatePicker to migrate it to the new version that is based on Ant Design.
        This changes only applies to PeriodDatePicker, as previously there was
        no DatePicker for single dates.
      </Paragraph>
      <ul>
        <li>
          <strong>Remove prop &apos;variant=&quot;legacy&quot;&apos;</strong>:
          By default, it will use DatePicker based on Ant Design component.
        </li>
        <li>
          <strong>stateDateWrapper</strong>: the changes to apply to a date can
          be applied at &apos;onChange&apos; if we want to apply any change to
          the returned value from the DatePicker or use prop &apos;format&apos;
          if we want to show the value in an specific format without changing
          the returned value.
        </li>
        <li>
          <strong>onDatesChange</strong>: the function to be executed when the
          value on DatePicker changes now uses the prop named
          &apos;onChange&apos;
        </li>
        <li>
          <strong>initialStartDate and initialEndDate</strong>: use prop
          &apos;defaultValue&apos; and pass as an array the value of
          defaultValues to be loaded following this pattern [initialStartDate,
          initialEndDate].
        </li>
        <li>
          <strong>periodOptions</strong>: use prop &apos;ranges&apos; and pass
          as an object with &nbsp;
          <a
            href="https://ant.design/components/date-picker/#components-date-picker-demo-presetted-ranges"
            target="_blank"
            rel="noreferrer"
          >
            the structure suggested on Ant Design
          </a>
          .
        </li>
      </ul>
    </Row>
  </Grid>
);

export const legacyDatePicker = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Legacy variant: This component is based on react-dates library. We
          suggest to migrate to the new version. In case you choose to keep
          using this version until it get deprecated, include the prop
          &apos;variant=&quot;legacy&quot;&apos;
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <DatePicker variant="legacy" />
      </Cell>
    </Row>
  </Grid>
);

export const legacyDatePickerPeriods = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          An easily datepicker library for the web with a period selectable
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <DatePicker variant="legacy" periodOptions={mockPeriodOptions} />
      </Cell>
    </Row>
  </Grid>
);

export const legacyDatePickerPeriodEs = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          DatePicker with ES language
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <DatePicker
          variant="legacy"
          periodOptions={mockPeriodOptions}
          language="es"
        />
      </Cell>
    </Row>
  </Grid>
);
