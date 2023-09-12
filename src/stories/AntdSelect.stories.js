import React, { useState } from 'react';
import AntdSelect from '../components/AntdSelect/AntdSelect';
import Cell from '../components/Cell';
import Grid from '../components/Grid';
import Paragraph from '../components/Paragraph';
import Row from '../components/Row';

export default {
  title: 'AntdSelect',
  component: AntdSelect,
};

export const select = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Select is a form control for selecting a value from a set of options.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <AntdSelect
          mode="multiple"
          style={{ width: '100%' }}
          pageSize={10}
          defaultValues={['3']}
          maxTagLength={20}
          options={[
            { id: 1, value: '1', label: '1st Floor', color: 'blue' },
            {
              value: '2',
              label: '1st Floor [02. Luxemburg Building]',
              color: 'green',
            },
            { value: '3', label: '3rd Floor', color: 'orange' },
            {
              value: '4',
              label: '45th Floor [04. Luxemburg Building]',
              color: 'green',
            },
            {
              value: '5',
              color: 'blue',
              label: '1st Floor [05. Luxemburg Building]',
            },
            {
              value: '6',
              color: 'green',
              label: '1st Floor [06. Luxemburg Building]',
            },
            { value: '7', label: '2nd Floor', color: 'blue' },
            {
              value: '8',
              label: '2nd Floor [03. Malaga Building]',
              color: 'red',
            },
            {
              value: '9',
              label: '2nd Floor [04. New York Building]',
              color: 'green',
            },
            {
              value: '10',
              label: '1st Floor [12. Hong Kong Building]',
              color: 'blue',
            },
            {
              value: '11',
              label: '3rd Floor [02. Singapur Building]',
              color: 'orange',
            },
            {
              value: '12',
              label: '2nd Floor [16.  Building]',
              color: 'orange',
            },
          ]}
        />
      </Cell>
    </Row>
  </Grid>
);

export const selectNoButton = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          When pageSize prop is not set, the select will not have a button to
          select all options.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <AntdSelect
          mode="multiple"
          style={{ width: '100%' }}
          options={[
            { value: '1', label: '1st Floor', color: 'blue' },
            {
              value: '2',
              label: '1st Floor [02. Luxemburg Building]',
              color: 'green',
            },
            { value: '3', label: '3rd Floor', color: 'orange' },
            {
              value: '4',
              label: '45th Floor [04. Luxemburg Building]',
              color: 'green',
            },
            {
              value: '5',
              color: 'blue',
              label: '1st Floor [05. Luxemburg Building]',
            },
            {
              value: '6',
              color: 'green',
              label: '1st Floor [06. Luxemburg Building]',
            },
            { value: '7', label: '2nd Floor', color: 'blue' },
            {
              value: '8',
              label: '2nd Floor [03. Malaga Building]',
              color: 'red',
            },
            {
              value: '9',
              label: '2nd Floor [04. New York Building]',
              color: 'green',
            },
            {
              value: '10',
              label: '1st Floor [12. Hong Kong Building]',
              color: 'blue',
            },
            {
              value: '11',
              label: '3rd Floor [02. Singapur Building]',
              color: 'orange',
            },
            {
              value: '12',
              label: '2nd Floor [16.  Building]',
              color: 'orange',
            },
          ]}
        />
      </Cell>
    </Row>
  </Grid>
);

const SingleSelect = props => {
  const [selectedValues, setSelectedValue] = useState([]);
  const handleChange = value => {
    setSelectedValue(value);
  };
  return (
    <AntdSelect
      onChange={handleChange}
      value={selectedValues}
      handleClearAll={() => {
        setSelectedValue([]);
      }}
      {...props}
    />
  );
};

export const singleSelect = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Based on the mode prop, the select can be single or multiple.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <SingleSelect
          mode="single"
          options={[
            { value: '1', label: '1st Floor', color: 'blue' },
            {
              value: '2',
              label: '1st Floor [02. Luxemburg Building]',
              color: 'green',
            },
            { value: '3', label: '3rd Floor', color: 'orange' },
            {
              value: '4',
              label: '45th Floor [04. Luxemburg Building]',
              color: 'green',
            },
            {
              value: '5',
              color: 'blue',
              label: '1st Floor [05. Luxemburg Building]',
            },
            {
              value: '6',
              color: 'green',
              label: '1st Floor [06. Luxemburg Building]',
            },
            { value: '7', label: '2nd Floor', color: 'blue' },
            {
              value: '8',
              label: '2nd Floor [03. Malaga Building]',
              color: 'red',
            },
            {
              value: '9',
              label: '2nd Floor [04. New York Building]',
              color: 'green',
            },
            {
              value: '10',
              label: '1st Floor [12. Hong Kong Building]',
              color: 'blue',
            },
            {
              value: '11',
              label: '3rd Floor [02. Singapur Building]',
              color: 'orange',
            },
            {
              value: '12',
              label: '2nd Floor [16.  Building]',
              color: 'orange',
            },
          ]}
        />
      </Cell>
    </Row>
  </Grid>
);
