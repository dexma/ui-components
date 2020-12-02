import React from 'react';
import styled from 'styled-components';
import get from 'lodash/get';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
  cursor: pointer;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 20px 0px 20px 0px;
  .background {
    background: ${props => get(color, props.color)};
    width: 60px;
    height: 60px;
    margin: 0 auto;
    display: block;
    word-wrap: break-word;
    background-clip: border-box;
    border-radius: 50%;
    overflow: hidden;
    &:hover {
      box-shadow: 1px 2px 7px 0 rgba(0, 0, 0, 0.5);
    }
  }
  .text {
    font-size: 0.75rem;
  }
`;

const Color = props => {
  return (
    <CopyToClipboard
      text={props.text}
      onCopy={() => alert(`Copied ${props.text} successfully!`)}
    >
      <StyledColor color={props.color}>
        <span className="background"></span>
        <span className="text">
          {props.text} - {get(color, props.color)}
        </span>
      </StyledColor>
    </CopyToClipboard>
  );
};

export const colors = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Base color palette</Paragraph>
      </Cell>
      {Object.keys(color).map(color => (
        <Cell xs={2}>
          <Color color={color} text={color} />{' '}
        </Cell>
      ))}
    </Row>
  </Grid>
);
