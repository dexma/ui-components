import styled from 'styled-components';
import { Grid } from '@components/Grid';

import { type Theme } from '@utils/theme';
import { fontWeightSemiBold, fontWeightNormal, gray700, gray900 } from '@utils/selectors';

const StyledResult = styled(Grid)<{ theme: Theme }>`
    margin: 70px auto;
    text-align: center;
    .result-row {
        justify-content: center;
        &.icon {
            padding-bottom: 20px;
        }
        &.title {
            font-size: 24px;
            font-weight: ${(props) => fontWeightSemiBold(props.theme)};
            padding: 10px 30px;
            color: ${(props) => gray900(props.theme)};
        }
        &.info {
            span {
                font-size: 14px;
                font-weight: ${(props) => fontWeightNormal(props.theme)};
                color: ${(props) => gray700(props.theme)};
            }
        }
        &.content {
            margin-top: 25px;
        }
    }
`;

export { StyledResult };
