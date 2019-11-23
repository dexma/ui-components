import React from 'react';
import { Toaster, ToasterConsumer, ToastType } from 'components/toaster';
import Grid from 'components/Grid';
import Row from 'components/Row';
import Cell from 'components/Cell';
import Paragraph from 'components/Paragraph';
import { Button } from 'components/Button';

export default {
  title: 'Toaster',
  component: Toaster,
};

export const toaster = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          We preset a series of toaster that appear on the top of the view
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Toaster>
          <ToasterConsumer>
            {context => (
              <>
                <Button
                  variant="outline"
                  text="Information"
                  onClick={() => {
                    context.toast({
                      text:
                        'INFORMATION TOAST! This is an example of a notification message toast.',
                      type: ToastType.INFO,
                    });
                  }}
                />
                <Button
                  variant="outline"
                  text="Success"
                  onClick={() => {
                    context.toast({
                      text:
                        'SUCCESS TOAST! This is an example of a success message toast.',
                      type: ToastType.SUCCESS,
                    });
                  }}
                />
                <Button
                  variant="outline"
                  text="Warning"
                  onClick={() => {
                    context.toast({
                      text:
                        'WARNING TOAST! This is an example of a warning message toast.',
                      type: ToastType.WARNING,
                    });
                  }}
                />
                <Button
                  variant="outline"
                  text="Error"
                  onClick={() => {
                    context.toast({
                      text:
                        'ERROR TOAST! This is an example of an error message toast.',
                      type: ToastType.ERROR,
                    });
                  }}
                />
              </>
            )}
          </ToasterConsumer>
        </Toaster>
      </Cell>
    </Row>
  </Grid>
);
