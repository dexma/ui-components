import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';

import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';
import { color } from '../styles/theme';

export default {
  title: 'Colors',
  component: <></>,
};

const StyledColor = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 20px 0px 20px 0px;
  .background {
    background: ${props => get(color, props.color)};
    width: 100%;
    height: 50px;
    display: block;
    border-radius: 4px;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: 4px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
  }
  .text {
    font-size: 0.75rem;
  }
`;

const Color = props => {
  const { color, text } = props;
  return (
    <StyledColor color={color}>
      <span className="background"></span>
      <span className="text">{text}</span>
    </StyledColor>
  );
};

export const colors = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          The components like Tags, Progress and more that use this string to
          get the color prop
        </Paragraph>
      </Cell>
      {Object.keys(color).map(color => (
        <Cell xs={2}>
          <Color color={color} text={color} />{' '}
        </Cell>
      ))}
    </Row>
  </Grid>
);
