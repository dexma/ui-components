import React from 'react';
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
          options={[
            { color: 'blue', value: 'Hola 1', label: 'Hola 1' },
            { color: 'green', value: 'Hola 2', label: 'Hola 2' },
            { color: 'gray', value: 'Hola 3', label: 'Hola 3' },
            { color: 'blue', value: 'Hola 4', label: 'Hola 4' },
            { color: 'green', value: 'Hola 5', label: 'Hola 5' },
            { color: 'gray', value: 'Hola 6', label: 'Hola 6' },
            { color: 'blue', value: 'Hola 7', label: 'Hola 7' },
            { color: 'green', value: 'Hola 8', label: 'Hola 8' },
            { color: 'gray', value: 'Hola 9', label: 'Hola 9' },
            { color: 'blue', value: 'Hola 10', label: 'Hola 10' },
            { color: 'green', value: 'Hola 11', label: 'Hola 11' },
            { color: 'gray', value: 'Hola 12', label: 'Hola 12' },
            { color: 'blue', value: 'Hola 13', label: 'Hola 13' },
            { color: 'green', value: 'Hola 14', label: 'Hola 14' },
            { color: 'gray', value: 'Hola 15', label: 'Hola 15' },
            { color: 'blue', value: 'Hola 16', label: 'Hola 16' },
            { color: 'green', value: 'Hola 17', label: 'Hola 17' },
            { color: 'gray', value: 'Hola 18', label: 'Hola 18' },
            { color: 'blue', value: 'Hola 19', label: 'Hola 19' },
            { color: 'green', value: 'Hola 20', label: 'Hola 20' },
            { color: 'gray', value: 'Hola 21', label: 'Hola 21' },
            { color: 'blue', value: 'Hola 22', label: 'Hola 22' },
            { color: 'green', value: 'Hola 23', label: 'Hola 23' },
            { color: 'gray', value: 'Hola 24', label: 'Hola 24' },
          ]}
        ></AntdSelect>
      </Cell>
    </Row>
  </Grid>
);

export const selectNoButton = () => (
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
          pageSize={10}
          options={[
            { color: 'blue', value: 'Hola 1', label: 'Hola 1' },
            { color: 'green', value: 'Hola 2', label: 'Hola 2' },
            { color: 'gray', value: 'Hola 3', label: 'Hola 3' },
            { color: 'blue', value: 'Hola 4', label: 'Hola 4' },
            { color: 'green', value: 'Hola 5', label: 'Hola 5' },
            { color: 'gray', value: 'Hola 6', label: 'Hola 6' },
            { color: 'blue', value: 'Hola 7', label: 'Hola 7' },
            { color: 'green', value: 'Hola 8', label: 'Hola 8' },
            { color: 'gray', value: 'Hola 9', label: 'Hola 9' },
            { color: 'blue', value: 'Hola 10', label: 'Hola 10' },
            { color: 'green', value: 'Hola 11', label: 'Hola 11' },
            { color: 'gray', value: 'Hola 12', label: 'Hola 12' },
            { color: 'blue', value: 'Hola 13', label: 'Hola 13' },
            { color: 'green', value: 'Hola 14', label: 'Hola 14' },
            { color: 'gray', value: 'Hola 15', label: 'Hola 15' },
            { color: 'blue', value: 'Hola 16', label: 'Hola 16' },
            { color: 'green', value: 'Hola 17', label: 'Hola 17' },
            { color: 'gray', value: 'Hola 18', label: 'Hola 18' },
            { color: 'blue', value: 'Hola 19', label: 'Hola 19' },
            { color: 'green', value: 'Hola 20', label: 'Hola 20' },
            { color: 'gray', value: 'Hola 21', label: 'Hola 21' },
            { color: 'blue', value: 'Hola 22', label: 'Hola 22' },
            { color: 'green', value: 'Hola 23', label: 'Hola 23' },
            { color: 'gray', value: 'Hola 24', label: 'Hola 24' },
          ]}
        ></AntdSelect>
      </Cell>
    </Row>
  </Grid>
);
