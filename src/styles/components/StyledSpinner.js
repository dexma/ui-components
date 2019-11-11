import styled from 'styled-components';

import { rotate360 } from 'styles/utils/animation';

const StyledSpinner = styled.div`
  border-radius: 3em;
  cursor: progress;
  display: inline-block;
  overflow: hidden;
  position: relative;
  transition: all 200ms ease-out;
  vertical-align: middle;
  top: 50%;
  left: 50%;
  //margin-top: -${props => props.width / 2}px;
  margin-left: -${props => props.width / 2}px;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  animation: ${rotate360} 0.7s linear infinite;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.03);
  border-top-color: rgba(0, 0, 0, 0.15);
`;

export { StyledSpinner };
