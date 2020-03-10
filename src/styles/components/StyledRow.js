import styled, { css } from 'styled-components';
import { gridGutterCompensation } from 'styles/selectors';

const StyledRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: ${gridGutterCompensation};
  margin-left: ${gridGutterCompensation};
  ${props =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `};
  ${props =>
    props.alignItemsCenter &&
    css`
      align-items: center;
    `};
`;

export { StyledRow };
