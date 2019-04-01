import React from 'react';
import { storiesOf } from '@storybook/react';

import Grid from 'components/Grid';
import Button from 'components/Button';
import Modal from 'components/Modal';

storiesOf('Modal', module)
  .addParameters({
    jest: ['Modal'],
  })
  .add('basic', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      <div>
        <Button text="Open modal" />
        <Modal
          title="Basic modal"
          visible
          footer={[
            <Button size="small" text="Cancel" />,
            <Button size="small" text="Send" />,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </Grid>
  ))
  .add('with loading', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      <div>
        <Button text="Open modal" />
        <Modal
          title="Basic modal"
          visible
          footer={[
            <Button size="small" text="Cancel" isLoading />,
            <Button size="small" text="Send" isLoading />,
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </Grid>
  ));
