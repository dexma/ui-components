import React from 'react';

import moment from 'moment';
import { DatePicker } from '../components/DatePicker';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import { mockPeriodOptions } from '../../test/mock/DatePicker';
import theme from '../styles/theme';

export default {
  title: 'DatePicker',
  component: DatePicker,
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

export const languageDatePicker = () => (
  <Grid fluid>
    <Row>
      <Paragraph margin="1rem 0 1rem 0">
        In this section we include the string values for the languages available
        for Date Picker component through property <strong>language</strong> and
        the value that expects regarding the location of that language. When
        there&apos;s no value specified, it will have by default :{' '}
        <strong>`en`</strong> for English from{' '}
        <strong>Great Britain (en_GB)</strong>
      </Paragraph>
      <ul>
        <li>
          <strong>`bg`</strong> for{' '}
          <strong>Bulgarian from Bulgaria (bg_BG)</strong>
        </li>
        <li>
          <strong>`br`</strong> for{' '}
          <strong>Portuguese from Brazil (pt_BR)</strong>
        </li>
        <li>
          <strong>`be`</strong> for <strong>Dutch from Belgium (nl_BE)</strong>
        </li>
        <li>
          <strong>`ca`</strong> for <strong>Catalan from Spain (ca_ES)</strong>
        </li>
        <li>
          <strong>`da`</strong> for <strong>Danish from Denmark (da_DK)</strong>
        </li>
        <li>
          <strong>`de`</strong> for <strong>German from Germany (da_DE)</strong>
        </li>
        <li>
          <strong>`el`</strong> for <strong>Greek from Greece (el_GR)</strong>
        </li>
        <li>
          <strong>`es`</strong> for <strong>Spanish from Spain (es_ES)</strong>
        </li>
        <li>
          <strong>`fi`</strong> for{' '}
          <strong>Finnish from Finland (fi_FI)</strong>
        </li>
        <li>
          <strong>`fr`</strong> for <strong>French from France (fr_FR)</strong>
        </li>
        <li>
          <strong>`it`</strong> for <strong>Italian from Italy (it_IT)</strong>
        </li>
        <li>
          <strong>`nl`</strong> for{' '}
          <strong>Dutch from Netherlands (nl_NL)</strong>
        </li>
        <li>
          <strong>`pl`</strong> for <strong>Polish from Poland (pl_PL)</strong>
        </li>
        <li>
          <strong>`pt`</strong> for{' '}
          <strong>Portuguese from Portugal (pt_PT)</strong>
        </li>
        <li>
          <strong>`sl`</strong> for{' '}
          <strong>Slovenian from Slovenia (sl_SI)</strong>
        </li>
        <li>
          <strong>`sv`</strong> for <strong>Swedish from Sweden (sv_SE)</strong>
        </li>
        <li>
          <strong>`tr`</strong> for <strong>Turkish from Turkey (tr_TR)</strong>
        </li>
        <li>
          <strong>`us`</strong> for{' '}
          <strong>English from United States (en_US)</strong>
        </li>
        <li>
          <strong>`zh`</strong> for{' '}
          <strong>Simplified Chinese from China (zh_CN)</strong>
        </li>
      </ul>
      <Paragraph margin="1rem 0 1rem 0">
        In the case there is a language not supported on the previous list, you
        may include through property <strong>locale</strong> to add it from Ant
        Design:
        <br />
        <br />
        <code>
          import fr_BE from &apos;antd/lib/locale/fr_BE&apos;;
          <br />
          &lt;DatePicker locale=&#123;fr_BE&#125;/&gt;
        </code>
      </Paragraph>
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
