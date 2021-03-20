import styled from 'styled-components';
import Row from '../../../components/Row';

const StyledSectionData = styled(Row)`
  padding-top: 40px;
  padding-bottom: 20px;
  .section-top {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin-bottom: 20px;
    .section-title {
      flex: 1 1 auto;
      h4 {
        margin: 0px;
      }
    }
    .section-buttons {
      text-align: right;
      flex: ${props => (!props.title ? '1 1' : '0 0')} auto;
    }
  }
  .loading {
    z-index: auto;
  }
`;

export { StyledSectionData };
