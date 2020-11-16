import React from 'react';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';
import { Dropdown } from '../components/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

const content = [
  {
    text: 'Edit',
    iconBefore: 'edit',
    onClick: e => {
      console.log('click edit', e);
    },
  },
  {
    text: 'Delete',
    iconBefore: 'delete',
    onClick: e => {
      console.log('click delete', e);
    },
  },
];

export const dropdown = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          A simple dropdown that provide action elements like links and buttons.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Dropdown icon="more_horiz" content={content} />
        <Dropdown icon="add" content={content} />
      </Cell>
    </Row>
  </Grid>
);

export const dropdownWithText = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          A simple dropdown that provide action elements like links and buttons.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Dropdown
          icon="add"
          content={content}
          text="Dropdown"
          trigger="click"
        />
      </Cell>
    </Row>
  </Grid>
);

export const dropdownWithPlacement = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          A simple dropdown that provide action elements like links and buttons.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Dropdown
          icon="settings"
          content={content}
          text="Bottom"
          placement="bottom"
        />
      </Cell>
      <br />
      <Cell xs={12}>
        <Dropdown
          icon="settings"
          content={content}
          text="Top"
          placement="top"
        />
      </Cell>
      <br />
      <Cell xs={12}>
        <Dropdown
          icon="settings"
          content={content}
          text="Left"
          placement="left"
        />
      </Cell>
      <br />
      <Cell xs={12}>
        <Dropdown
          icon="settings"
          content={content}
          text="Right"
          placement="right"
        />
      </Cell>
    </Row>
  </Grid>
);
