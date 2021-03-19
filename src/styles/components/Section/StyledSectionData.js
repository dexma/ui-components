import styled from 'styled-components';
import Row from '../../../components/Row';

const StyledSectionData = styled(Row)`
  padding-top: 40px;
  padding-bottom: 20px;
  .loading {
    z-index: auto;
  }
  .title {
    flex: 1 1 auto;
  }
  .buttons {
    text-align: right;
    flex: 0 0 auto;
  }
`;

export { StyledSectionData };
