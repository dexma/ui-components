import styled from 'styled-components';

import { StyledTag } from './StyledTag';

const StyledTagGroup = styled.div`
  display: flex;
  ${StyledTag} {
    margin: 4px 4px 4px 0px;
  }
`;

export { StyledTagGroup };
