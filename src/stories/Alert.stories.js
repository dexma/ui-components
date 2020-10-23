import React from 'react';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

import { Alert } from '../components/Alert';

export default {
  title: 'Alert',
  component: Alert,
};

export const alert = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Alert component used when you need to show messages to users.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Alert message="Success Tips" type="success" showIcon closable />
        <br />
        <Alert message="Informational Notes" type="info" showIcon />
        <br />
        <Alert message="Warning" type="warning" showIcon />
        <br />
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
          You can add description to the body of the alert
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
        <br />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
          showIcon
        />
        <br />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
        />
        <br />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
          closable
        />
      </Cell>
    </Row>
  </Grid>
);

export const noIcon = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          A option without the icon on the title alert
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Alert
          message="Success Tips"
          description="Detailed description and advice about successful copywriting."
          type="success"
        />
        <br />
        <Alert
          message="Informational Notes"
          description="Additional description and information about copywriting."
          type="info"
        />
        <br />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
        />
        <br />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
        />
      </Cell>
    </Row>
  </Grid>
);
