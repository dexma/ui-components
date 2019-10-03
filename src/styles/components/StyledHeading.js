import styled from 'styled-components';
import { border } from 'styles/selectors';

const StyledHeading = styled.div`
  padding: 0.6rem 0;
  .line-bottom {
    border-bottom: ${border};
  }
`;

export { StyledHeading };
