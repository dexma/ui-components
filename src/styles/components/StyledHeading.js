import styled from 'styled-components';
import { backgroundColorSelected } from 'styles/selectors';

const StyledHeading = styled.div`
  padding: 0.6rem 0;
  .line-bottom {
    border-bottom: 1px solid ${backgroundColorSelected};
  }
`;

export { StyledHeading };
