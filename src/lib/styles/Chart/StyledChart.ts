import { styled } from 'styled-components';
import { StyledResult } from '@styles/Result/StyledResult';

export const StyledChart = styled.div`
    .highcharts-exporting-group {
        display: none !important;
    }
    .highcharts-pivot,
    .highcharts-data-label-box {
        visibility: hidden;
    }
`;

export const StyledChartError = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
    height: 400px;
    align-items: center;
    justify-content: center;
    ${StyledResult} {
        margin: 0;
    }
`;

export const StyledChartLoading = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
    height: 400px;
    align-items: center;
    justify-content: center;
`;
