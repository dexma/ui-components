import styled from 'styled-components';
import { parseToRgb } from 'polished';
import get from 'lodash/get';

import { rotate360 } from '../utils/animation';

const StyledSpinner = styled.div`
  border-radius: 3em;
  display: inline-block;
  overflow: hidden;
  position: relative;
  transition: all 200ms ease-out;
  vertical-align: middle;
  height: ${props => {
    return `${props.size}px`;
  }};
  width: ${props => {
    return `${props.size}px`;
  }};
  animation: ${rotate360} 0.85s linear infinite;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => {
    const { red, green, blue } = parseToRgb(
      get(props.theme.color, props.color)
    );
    return `rgba(${red},${green},${blue}, 0.1)`;
  }};
  border-top-color: ${props => {
    const { red, green, blue } = parseToRgb(
      get(props.theme.color, props.color)
    );
    return `rgba(${red},${green},${blue}, 1)`;
  }};
  margin: 0 auto;
`;

export { StyledSpinner };
