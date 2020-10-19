import React from 'react';
import styled from 'styled-components';
import { Heading } from '../components/Heading';
import { Button } from '../components/Button';
import { Divider } from '../components/Divider';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';

const StyledBox = styled.div`
  width: 100%;
  button {
    float: right;
  }
`;

export default {
  title: 'Heading',
  component: Heading,
};

export const headings = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          All HTML headings, h1 through h6, are available
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Heading type="h1" text="Heading" line={false} />
        <Heading type="h2" text="Heading" line={false} />
        <Heading type="h3" text="Heading" line={false} />
        <Heading type="h4" text="Heading" line={false} />
        <Heading type="h5" text="Heading" line={false} />
        <Heading type="h6" text="Heading" line={false} />
      </Cell>
    </Row>
  </Grid>
);

export const childrens = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          You can customize the heading sending children component{' '}
        </Paragraph>
      </Cell>
      <StyledBox>
        <Cell xs={12}>
          <Heading text="Heading" line>
            <Button size="small" variant="primary" iconAfter="add" isCircle />
          </Heading>
          <Divider />
        </Cell>
        <Cell xs={12}>
          <Heading text="Heading" line>
            <Button
              size="small"
              variant="primary"
              text="Settings"
              iconBefore="settings"
            />
            <Button size="small" variant="primary" iconAfter="add" isCircle />
          </Heading>
          <Divider />
        </Cell>
      </StyledBox>
    </Row>
  </Grid>
);
