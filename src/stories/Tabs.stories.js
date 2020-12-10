import React from 'react';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';

import { Tabs, TabPane } from '../components/Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

function callback(key) {
  console.log(key);
}

export const tabs = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Tabs make it easy to explore and switch between different views.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Cell>
    </Row>
  </Grid>
);

const operations = (
  <>
    <Button iconBefore="add" isCircle />
    <Button iconBefore="add" isCircle />
  </>
);

export const extraAction = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          You can add extra actions to the right of Tabs
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </Cell>
    </Row>
  </Grid>
);
