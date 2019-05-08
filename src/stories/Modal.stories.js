import React from 'react';
import { storiesOf } from '@storybook/react';

import Grid from 'components/Grid';
import Cell from 'components/Cell';
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
        <Modal visible width="500">
          <Cell>
            <Grid type="horizontal">
              <Cell size="auto">
                <Cell size="shrink">
                  <h6>Test</h6>
                </Cell>
                <Cell size="auto" className="author">
                  Modal
                </Cell>
              </Cell>
            </Grid>
          </Cell>
        </Modal>
      </div>
    </Grid>
  ));
