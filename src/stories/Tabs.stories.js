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

export const ScrollableVariant = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          You can have a scrollable bar passing scrollable as prop of type
          variant. Of course, in order to have a workable scroll the Tabs must
          live inside an element with a fixed height.
        </Paragraph>
      </Cell>
      <div style={{ height: '200px' }}>
        <Tabs variant="scrollable">
          <TabPane tab="Tab 1" key="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et
            malesuada justo. Etiam sed urna sit amet eros sagittis laoreet id
            ultrices libero. Proin quis condimentum metus. Pellentesque in
            elementum ante, ac volutpat lacus. Vivamus viverra luctus tempus.
            Aenean non ligula id augue pulvinar fringilla a vitae ipsum. Cras
            tempor porttitor mauris ut laoreet. Praesent ultricies tortor in
            luctus vulputate. Maecenas lacinia magna nec velit tempor, non
            rhoncus urna varius. Integer in sollicitudin justo. Nullam convallis
            lacus tincidunt eleifend tincidunt. In tincidunt erat id tellus
            mattis, eget fringilla felis porttitor. Mauris et neque eu arcu
            posuere egestas. Phasellus turpis urna, placerat et aliquam sit
            amet, porta vitae velit. Curabitur interdum, mi ut auctor cursus,
            tellus leo blandit libero, eu interdum augue eros non ex. Morbi id
            venenatis orci. Sed luctus erat leo, ut vehicula velit tempus eget.
            Nunc eleifend efficitur placerat. Nam a orci quis quam hendrerit
            dignissim at ut erat. Fusce interdum porttitor sodales. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Curabitur convallis rutrum magna, at efficitur dolor
            posuere id. Nullam egestas fringilla mi, ut bibendum libero
            imperdiet sed. Curabitur facilisis facilisis sem vel eleifend. Etiam
            justo lorem, lobortis non auctor ut, efficitur quis metus. Duis orci
            sem, mollis a suscipit vel, interdum ac dolor. Duis ullamcorper
            sapien sed ligula sollicitudin cursus. Morbi vel quam maximus,
            elementum lectus ac, dignissim massa. Nulla facilisi. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam ante diam,
            volutpat vel pretium sit amet, porta sed erat. Donec condimentum
            imperdiet vulputate. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Curabitur nisi mauris,
            porta id eros et, dignissim eleifend metus. Mauris ullamcorper non
            elit at suscipit. Sed ornare neque suscipit est rutrum, nec
            consequat felis suscipit. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec et malesuada justo. Etiam sed urna sit amet
            eros sagittis laoreet id ultrices libero. Proin quis condimentum
            metus. Pellentesque in elementum ante, ac volutpat lacus. Vivamus
            viverra luctus tempus. Aenean non ligula id augue pulvinar fringilla
            a vitae ipsum. Cras tempor porttitor mauris ut laoreet. Praesent
            ultricies tortor in luctus vulputate. Maecenas lacinia magna nec
            velit tempor, non rhoncus urna varius. Integer in sollicitudin
            justo. Nullam convallis lacus tincidunt eleifend tincidunt. In
            tincidunt erat id tellus mattis, eget fringilla felis porttitor.
            Mauris et neque eu arcu posuere egestas. Phasellus turpis urna,
            placerat et aliquam sit amet, porta vitae velit. Curabitur interdum,
            mi ut auctor cursus, tellus leo blandit libero, eu interdum augue
            eros non ex. Morbi id venenatis orci. Sed luctus erat leo, ut
            vehicula velit tempus eget. Nunc eleifend efficitur placerat. Nam a
            orci quis quam hendrerit dignissim at ut erat. Fusce interdum
            porttitor sodales. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Curabitur convallis rutrum
            magna, at efficitur dolor posuere id. Nullam egestas fringilla mi,
            ut bibendum libero imperdiet sed. Curabitur facilisis facilisis sem
            vel eleifend. Etiam justo lorem, lobortis non auctor ut, efficitur
            quis metus. Duis orci sem, mollis a suscipit vel, interdum ac dolor.
            Duis ullamcorper sapien sed ligula sollicitudin cursus. Morbi vel
            quam maximus, elementum lectus ac, dignissim massa. Nulla facilisi.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante
            diam, volutpat vel pretium sit amet, porta sed erat. Donec
            condimentum imperdiet vulputate. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur nisi mauris, porta id eros et, dignissim eleifend metus.
            Mauris ullamcorper non elit at suscipit. Sed ornare neque suscipit
            est rutrum, nec consequat felis suscipit.
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Nunc eleifend efficitur placerat. Nam a orci quis quam hendrerit
            dignissim at ut erat. Fusce interdum porttitor sodales. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Curabitur convallis rutrum magna, at efficitur dolor
            posuere id. Nullam egestas fringilla mi, ut bibendum libero
            imperdiet sed. Curabitur facilisis facilisis sem vel eleifend. Etiam
            justo lorem, lobortis non auctor ut, efficitur quis metus. Duis orci
            sem, mollis a suscipit vel, interdum ac dolor. Duis ullamcorper
            sapien sed ligula sollicitudin cursus. Morbi vel quam maximus,
            elementum lectus ac, dignissim massa. Nulla facilisi. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Nullam ante diam,
            volutpat vel pretium sit amet, porta sed erat. Donec condimentum
            imperdiet vulputate. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos. Curabitur nisi mauris,
            porta id eros et, dignissim eleifend metus. Mauris ullamcorper non
            elit at suscipit. Sed ornare neque suscipit est rutrum, nec
            consequat felis suscipit.
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </Row>
  </Grid>
);
