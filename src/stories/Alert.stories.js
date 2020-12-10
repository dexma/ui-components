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
        <Paragraph margin="1rem 0 1rem 0">
          Alert component used when you need to show messages to users.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Alert description="Basic" type="basic" showIcon />
        <br />
        <Alert description="Outline" type="outline" showIcon={false} />
        <br />
        <Alert description="Success Tips" type="success" showIcon closable />
        <br />
        <Alert description="Informational Notes" type="info" showIcon />
        <br />
        <Alert description="Warning" type="warning" showIcon />
        <br />
        <Alert description="Error" type="error" showIcon />
      </Cell>
    </Row>
  </Grid>
);

export const description = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          You can add description to the body of the alert
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Alert
          message="Basic alert"
          description="Detailed description and advice about successful copywriting."
          type="basic"
          showIcon
          closable
        />
        <br />
        <Alert
          message="Basic alert"
          description="Detailed description and advice about successful copywriting."
          type="outline"
          showIcon
          closable
        />
        <br />
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
        <Paragraph margin="1rem 0 1rem 0">
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
        <Alert message="Informational Notes" type="info" />
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

export const customAlert = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Alert component used when you need to show messages to users.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Alert
          type="info"
          description={
            <span>
              You have <strong>2</strong> Optimise datapoints left in your free
              trial.{' '}
              <span
                style={{
                  color: '#0054a1',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                How are these calculated?
              </span>
            </span>
          }
          showIcon
        />
        <br />
        <Alert
          type="error"
          description={
            <span>
              You have <strong>2</strong> Optimise datapoints left in your free
              trial.{' '}
              <span
                style={{
                  color: '#ffffff',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                How are these calculated?
              </span>
            </span>
          }
          showIcon
        />
        <br />
        <Alert
          type="success"
          description={
            <span>
              You have <strong>2</strong> Optimise datapoints left in your free
              trial.{' '}
              <span
                style={{
                  color: '#ffffff',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                }}
              >
                How are these calculated?
              </span>
            </span>
          }
          showIcon
        />
        <br />
      </Cell>
    </Row>
  </Grid>
);
