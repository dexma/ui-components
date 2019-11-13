import styled, { css } from 'styled-components';

const StyledRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -0.5rem;
  margin-left: -0.5rem;
  ${props =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `};
`;

export { StyledRow };
