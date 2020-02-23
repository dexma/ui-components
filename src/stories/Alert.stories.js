import React from 'react';
import Grid from 'components/Grid';
import Row from 'components/Row';
import Cell from 'components/Cell';
import Paragraph from 'components/Paragraph';

import { Alert } from 'components/Alert';

export default {
  title: 'Alert',
  component: Alert,
};

export const alert = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">Alert component for feedback.</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Alert message="Success Tips" type="success" showIcon closable />
        <Alert message="Informational Notes" type="info" showIcon />
        <Alert message="Warning" type="warning" showIcon />
        <Alert message="Error" type="error" showIcon />
      </Cell>
    </Row>
  </Grid>
);

export const description = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          You can add extra actions to the right of Tabs
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Alert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
          showIcon
          closable
        />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
          showIcon
        />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
      </Cell>
    </Row>
  </Grid>
);
