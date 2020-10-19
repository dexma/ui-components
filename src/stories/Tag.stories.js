import React from 'react';
import { Tag } from '../components/Tag';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

export default {
  title: 'Tag',
  component: Tag,
};

export const tags = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          We preset a series of colorful tag styles for use in different
          situations. You can also set it to a hex color string for custom
          color.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tag color="turquoise" onClick={() => console.log('click')}>
          Tag click
        </Tag>
        <Tag color="blue">Tag</Tag>
        <Tag color="blueLight">Tag</Tag>
        <Tag color="red">Tag</Tag>
        <Tag color="amber">Tag</Tag>
        <Tag color="orange">Tag</Tag>
        <Tag color="brown">Tag</Tag>
        <Tag color="grey">Tag</Tag>
        <Tag color="green">Tag</Tag>
        <Tag color="magenta">Tag</Tag>
        <Tag color="purple">Tag</Tag>
      </Cell>
      <Cell xs={12}>
        <Tag color="turquoise" variant="outline">
          Tag
        </Tag>
        <Tag color="blue" variant="outline">
          Tag
        </Tag>
        <Tag color="blueLight" variant="outline">
          Tag
        </Tag>
        <Tag color="red" variant="outline">
          Tag
        </Tag>
        <Tag color="amber" variant="outline">
          Tag
        </Tag>
        <Tag color="orange" variant="outline">
          Tag
        </Tag>
        <Tag color="brown" variant="outline">
          Tag
        </Tag>
        <Tag color="grey" variant="outline">
          Tag
        </Tag>
        <Tag color="green" variant="outline">
          Tag
        </Tag>
        <Tag color="magenta" variant="outline">
          Tag
        </Tag>
        <Tag color="purple" variant="outline">
          Tag
        </Tag>
      </Cell>
    </Row>
  </Grid>
);

export const icons = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          You can pass the icon name as prop to see more icons go to icons
          section
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tag color="turquoise" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="blue" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="blueLight" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="red" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="amber" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="orange" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="brown" type="rounded" icon="alert">
          Tag
        </Tag>
      </Cell>
    </Row>
    <Row>
      <Cell xs={12}>
        <Tag color="turquoise" variant="outline" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="blue" variant="outline" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="blueLight" variant="outline" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="red" variant="outline" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="amber" variant="outline" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="orange" variant="outline" type="rounded" icon="alert">
          Tag
        </Tag>
        <Tag color="brown" variant="outline" type="rounded" icon="alert">
          Tag
        </Tag>
      </Cell>
    </Row>
  </Grid>
);
