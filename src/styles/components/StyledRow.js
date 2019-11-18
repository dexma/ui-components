import styled, { css } from 'styled-components';
import { gridGutterCompensation, gridGutterWidth } from 'styles/selectors';
import { StyledCell } from 'styles/components/StyledCell';

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
  ${StyledCell} {
    margin-bottom: ${gridGutterWidth};
  }
`;

export { StyledRow };
