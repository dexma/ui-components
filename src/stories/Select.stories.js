import React from 'react';

import { Select } from '../components/Select';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';

const options = [
  { value: '1', label: '1st Floor', background: 'blue400', color: 'white' },
  {
    value: '2',
    label: '1st Floor [02. Luxemburg Building]',
    background: 'teal500',
    color: 'white',
  },
  { value: '3', label: '3st Floor', background: 'orange' },
  {
    value: '4',
    label: '45st Floor [04. Luxemburg Building]',
    background: 'red',
    color: 'white',
  },
  { value: '5', label: '1st Floor [05. Luxemburg Building]' },
  { value: '6', label: '1st Floor [06. Luxemburg Building]' },
];

export default {
  title: 'Select',
  component: Select,
};

export const select = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          A flexible and beautiful Select Input control for ReactJS with
          multiselect, autocomplete, async and creatable support
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Select options={options} size="small" />
      </Cell>
    </Row>
  </Grid>
);

export const multi = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Support multiple selected options, we customize the multi value so you
          can pass background and color for each options
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Select defaultValue={options} options={options} isMulti isClearable />
      </Cell>
    </Row>
  </Grid>
);

export const noSearch = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Whether to enable search functionality
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Select
          defaultValue={options[0]}
          options={options}
          isSearchable={false}
        />
      </Cell>
    </Row>
  </Grid>
);

export const clear = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Is the select value clearable with value option
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Select value={options[0]} options={options} isClearable />
      </Cell>
    </Row>
  </Grid>
);

export const noClear = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Is the select value clearable with value option
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Select value={options[0]} options={options} isClearable={false} />
      </Cell>
    </Row>
  </Grid>
);

export const loading = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Select
          value={options[0]}
          options={options}
          isClearable={false}
          isLoading
        />
        <br />
        <Select
          value={options[0]}
          options={options}
          isClearable={false}
          isLoading
          isDisabled
        />
      </Cell>
    </Row>
  </Grid>
);
