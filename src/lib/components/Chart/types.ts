import { type XAxisOptions, type YAxisOptions, type PlotOptions, type PlotSeriesOptions, type PlotColumnOptions } from 'highcharts';

type Modify<T, R> = Omit<T, keyof R> & R;

type ChartXAxisOptions = XAxisOptions & { index?: number; isX?: boolean };
type ChartYAxisOptions = YAxisOptions & { index?: number };

export type ChartOptions = Modify<
    Highcharts.Options,
    {
        xAxis?: ChartXAxisOptions | ChartXAxisOptions[];
        yAxis?: ChartYAxisOptions | ChartYAxisOptions[];
        plotOptions?: PlotOptions & {
            series?: PlotSeriesOptions & { grouping?: boolean };
            column?: PlotColumnOptions & { borderRadiusTopLeft?: number; borderRadiusTopRight: number };
        };
    }
>;
