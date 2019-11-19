import React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from 'components/Tag';
import Grid from 'components/Grid';
import Row from 'components/Row';

storiesOf('Tag', module)
  .addParameters({
    jest: ['Tag'],
  })
  .add('basic', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      <Row size="auto">
        <Tag color="#E12F8A">Tag</Tag>
        <Tag color="#13C3A3" type="rounded">
          Tag
        </Tag>
      </Row>
      <Row size="auto">
        <Tag color="#E12F8A" variant="outline">
          Tag
        </Tag>
        <Tag color="#13C3A3" variant="outline" type="rounded">
          Tag
        </Tag>
      </Row>
      <Row size="auto">
        <Tag color="#E12F8A" variant="primary" icon="alert">
          1
        </Tag>
        <Tag color="#13C3A3" variant="outline" type="rounded" icon="alert">
          1
        </Tag>
      </Row>
    </Grid>
  ));
