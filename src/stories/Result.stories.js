import React from 'react';

import Result from '../components/Result';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

export default {
  title: 'Result',
  component: <></>,
};

export const result = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Result</Paragraph>
      </Cell>
      <Result
        variant="success"
        title="Successfully Purchased Cloud Server ECS!"
        info="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      />
      <Result
        variant="info"
        title="Your operation has been executed"
        info="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      />
      <Result
        variant="warning"
        title="There are some problems with your operation."
        info="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      />
      <Result
        variant="error"
        title="Submission Failed"
        info="Please check and modify the following information before resubmitting."
      />
      <Result
        variant="deleted"
        title="Submission Failed"
        info="Please check and modify the following information before resubmitting."
      />
    </Row>
  </Grid>
);
