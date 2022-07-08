import React from 'react';
import FormControl from '../components/FormControl';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';
import { mockPeriodOptions } from '../../test/mock/DatePicker';

const options = [
  { value: '1', label: '1st Floor [01. Luxemburg Building]' },
  { value: '2', label: '1st Floor [02. Luxemburg Building]' },
  { value: '3', label: '1st Floor [03. Luxemburg Building]' },
  { value: '4', label: '1st Floor [04. Luxemburg Building]' },
  { value: '5', label: '1st Floor [05. Luxemburg Building]' },
  { value: '6', label: '1st Floor [06. Luxemburg Building]' },
];

export default {
  title: 'FormControl',
  component: FormControl,
};

export const basic = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Render loading spinner for the UI views
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <div
          style={{
            background: '#f5f5f5',
            padding: '1.5em',
            position: 'relative',
            marginTop: '30px',
          }}
        >
          <FormControl control="Input" />
          <br />
          <FormControl control="Checkbox" success message="Text info caption">
            Checkbox
          </FormControl>
          <br />
          <FormControl control="Input" message="Text info caption" error />
          <br />
          <FormControl
            control="Select"
            options={options}
            message="Text info caption"
            success
          />
          <br />
          <FormControl
            control="DatePicker"
            options={options}
            periodOptions={mockPeriodOptions}
            message="Text info caption"
          />
          <br />
          <FormControl
            control="LegacyDatePicker"
            options={options}
            periodOptions={mockPeriodOptions}
            message="Text info caption"
          />
        </div>
      </Cell>
    </Row>
  </Grid>
);

export const input = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Render loading spinner for the UI views
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <div
          style={{
            background: '#f5f5f5',
            padding: '1.5em',
            position: 'relative',
            marginTop: '30px',
          }}
        >
          <FormControl control="Input" />
          <br />
          <FormControl control="Input" message="Text info caption" />
          <br />
          <FormControl control="Input" message="Text info caption" error />
          <br />
          <FormControl control="Input" message="Text info caption" success />
          <br />
          <FormControl control="Input" message="Text info caption" disabled />
          <br />
          <FormControl control="Input" message="Text info caption" isLoading />
        </div>
      </Cell>
    </Row>
  </Grid>
);

export const checkbox = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Render loading spinner for the UI views
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <div
          style={{
            background: '#f5f5f5',
            padding: '1.5em',
            position: 'relative',
            marginTop: '30px',
          }}
        >
          <FormControl checked control="Checkbox">
            Checkbox
          </FormControl>
          <br />
          <FormControl control="Checkbox" success message="Text info caption">
            Checkbox
          </FormControl>
          <br />
          <FormControl control="Checkbox" error message="Text error caption">
            Checkbox
          </FormControl>
        </div>
      </Cell>
    </Row>
  </Grid>
);

export const select = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Render loading spinner for the UI views
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <div
          style={{
            background: '#f5f5f5',
            padding: '1.5em',
            position: 'relative',
            marginTop: '30px',
          }}
        >
          <FormControl control="Select" options={options} />
          <br />
          <FormControl
            control="Select"
            options={options}
            message="Text info caption"
          />
          <br />
          <FormControl
            control="Select"
            options={options}
            message="Text info caption"
            error
          />
          <br />
          <FormControl
            control="Select"
            options={options}
            message="Text info caption"
            success
          />
        </div>
      </Cell>
    </Row>
  </Grid>
);

export const datePicker = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Render loading spinner for the UI views. There are 2 options of
          controls for DatePickers.
        </Paragraph>
        <Paragraph margin="1rem 0 1rem 0">
          Due to the upgrade of DatePicker component, by default, the value
          &apos;DatePicker&apos; on control property will render the new
          DatePicker component. The old DatePicker component is now deprecated
          and can be still used with value &apos;LegacyDatePicker&apos; on
          control property.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <div
          style={{
            background: '#f5f5f5',
            padding: '1.5em',
            position: 'relative',
            marginTop: '30px',
          }}
        >
          <FormControl control="DatePicker" />
          <br />
          <FormControl
            control="DatePicker"
            options={options}
            periodOptions={mockPeriodOptions}
          />
          <FormControl
            control="LegacyDatePicker"
            options={options}
            periodOptions={mockPeriodOptions}
            message="Text info caption"
          />
        </div>
      </Cell>
    </Row>
  </Grid>
);
