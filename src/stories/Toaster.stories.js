import React from 'react';
import { storiesOf } from '@storybook/react';

import { Toaster, ToasterConsumer, ToastType } from 'components/toaster';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import { Sizes } from 'config/foundation';
import Button from 'components/Button';

storiesOf('Toaster', module)
  .addParameters({
    jest: ['Toaster'],
  })
  .add('basic', () => (
    <Toaster>
      <Grid type="vertical" horizontalPadding verticalPadding>
        <Cell
          medium={2}
          style={{ height: '500px', backgroundColor: 'cornsilk' }}
        >
          <ToasterConsumer>
            {context => (
              <React.Fragment>
                <Button
                  size={Sizes[1]}
                  text="INFO"
                  onClick={() => {
                    context.toast({
                      text:
                        'INFORMATION TOAST! This is an example of a notification message toast.',
                      type: ToastType.INFO,
                    });
                  }}
                />
                <Button
                  size={Sizes[1]}
                  text="SUCCESS"
                  onClick={() => {
                    context.toast({
                      text:
                        'SUCCESS TOAST! This is an example of a success message toast.',
                      type: ToastType.SUCCESS,
                    });
                  }}
                />
                <Button
                  size={Sizes[1]}
                  text="WARNING"
                  onClick={() => {
                    context.toast({
                      text:
                        'WARNING TOAST! This is an example of a warning message toast.',
                      type: ToastType.WARNING,
                    });
                  }}
                />
                <Button
                  size={Sizes[1]}
                  text="ERROR"
                  onClick={() => {
                    context.toast({
                      text:
                        'ERROR TOAST! This is an example of an error message toast.',
                      type: ToastType.ERROR,
                    });
                  }}
                />
              </React.Fragment>
            )}
          </ToasterConsumer>
        </Cell>
      </Grid>
    </Toaster>
  ));
