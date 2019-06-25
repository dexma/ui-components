import styled from 'styled-components';
import { backgroundColorSelected } from 'styles/selectors';

const StyledTitle = styled.div`
  .line {
    background: ${backgroundColorSelected};
    height: 1px;
  }
`;

export { StyledTitle };
