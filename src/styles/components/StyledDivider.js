import styled, { css } from 'styled-components';
import { gray200 } from 'styles/selectors';

const StyledDivider = styled.hr`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: ${gray200};
  ${props =>
    props.vertical &&
    css`
      width: 1px;
      height: 100%;
      margin: 0px 4px;
    `};
`;

export { StyledDivider };
