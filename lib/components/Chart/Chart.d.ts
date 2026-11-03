import { default as React } from '../../../../node_modules/react';
import { default as Highcharts } from 'highcharts';
import { HighchartsReactRefObject } from 'highcharts-react-official';
type ChartProps = {
    options?: Highcharts.Options;
    isLoading?: boolean;
    showError?: boolean;
    errorContent?: any;
    dataId?: string;
    'data-testid'?: string;
    decimalPoint?: string;
    thousandsSep?: string;
    numericSymbols?: string[];
    months?: string[];
    shortMonths?: string[];
    weekdays?: string[];
    callback?: () => void;
};
export declare const Chart: React.ForwardRefExoticComponent<Omit<ChartProps & React.RefAttributes<HighchartsReactRefObject> & {
    dataId?: string;
}, "ref"> & React.RefAttributes<unknown>>;
export {};
