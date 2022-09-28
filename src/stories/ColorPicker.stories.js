import React from 'react';
import Cell from '../components/Cell';
import ColorPicker from '../components/ColorPicker';
import Grid from '../components/Grid';
import Paragraph from '../components/Paragraph';
import Row from '../components/Row';

export default {
  title: 'ColorPicker',
  component: ColorPicker,
};

export const colorPicker = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Basic ColorPicker with input based on React-Color
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <ColorPicker showInput />
      </Cell>
      <Cell style={{ marginTop: '4px' }} xs={12}>
        <ColorPicker showInput isLoading />
      </Cell>
    </Row>
  </Grid>
);

export const simpleColorPicker = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Basic ColorPicker without input
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <ColorPicker />
      </Cell>
      <Cell style={{ marginTop: '4px' }} xs={12}>
        <ColorPicker isLoading />
      </Cell>
    </Row>
  </Grid>
);

export const presetColorsOnColorPicker = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Basic ColorPicker with sample preset colors
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <ColorPicker presetColors={['#000', '#AAA', '#CCC', '#FFF']} />
      </Cell>
    </Row>
  </Grid>
);
