import styled from 'styled-components';

import { rotate360 } from 'styles/utils/animation';

const StyledSpinner = styled.div`
  border-radius: 3em;
  display: inline-block;
  overflow: hidden;
  position: relative;
  transition: all 200ms ease-out;
  vertical-align: middle;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  animation: ${rotate360} 0.7s linear infinite;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.03);
  border-top-color: rgba(0, 0, 0, 0.15);
  margin: 0 auto;
`;

export { StyledSpinner };
