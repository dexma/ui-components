import styled from 'styled-components';
import { Grid } from '../../components/Grid';

import {
  fontWeightSemiBold,
  fontWeightNormal,
  gray700,
  gray900,
} from '../selectors';

const StyledResult = styled(Grid)`
  margin: 70px auto;
  text-align: center;
  .result-row {
    justify-content: center;
    &.icon {
      padding-bottom: 20px;
    }
    &.title {
      font-size: 24px;
      font-weight: ${fontWeightSemiBold};
      padding: 10px 30px;
      color: ${gray900};
    }
    &.info {
      span {
        font-size: 14px;
        font-weight: ${fontWeightNormal};
        color: ${gray700};
      }
    }
    &.content {
      margin-top: 25px;
    }
  }
`;

export { StyledResult };
