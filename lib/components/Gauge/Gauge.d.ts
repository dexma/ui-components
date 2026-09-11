import { default as Highcharts } from 'highcharts';
type Indicator = {
    color: string;
    tooltip: string;
    value: number;
};
type Checkpoint = Indicator;
type Comparison = {
    enabled: boolean;
    period: {
        from: Date | null;
        to: Date | null;
        type: string;
        text: string | null;
    };
    color: string;
    value?: number;
    showAsPercentage: boolean;
};
type Range = {
    color: string;
    tooltip: string;
    from: number;
    to: number;
};
declare enum GaugeType {
    DIAL = "DIAL"
}
type GaugeProps = {
    checkpoints?: Array<{
        color: string;
        tooltip: string;
        value: number;
    }>;
    comparison?: {
        enabled: boolean;
        period: {
            from: Date | null;
            to: Date | null;
            type: string;
            text: string | null;
        };
        color: string;
        value?: number;
        showAsPercentage: boolean;
    };
    'data-testid'?: string;
    decimalPoint?: string;
    hasData?: boolean;
    indicator: {
        color: string;
        tooltip: string;
        value: number;
    };
    max: number;
    min: number;
    options?: Highcharts.Options;
    ranges?: Array<{
        color: string;
        tooltip: string;
        from: number;
        to: number;
    }>;
    showAsPercentage?: boolean;
    thousandsSep?: string;
    title?: string;
    type?: GaugeType | string;
    units?: string;
};
export declare const valueAsPercentage: (value: number, max: number, min: number) => number;
export declare const getThreshold: (max: number, min: number, value?: number) => number;
export declare const getValueSeries: (indicator: Indicator, max: number, min: number, name?: string, showAsPercentage?: boolean) => {
    name?: undefined;
    data?: undefined;
    dataLabels?: undefined;
    threshold?: undefined;
    tooltip?: undefined;
    useHTML?: undefined;
    zIndex?: undefined;
} | {
    name: string;
    data: {
        color: string;
        radius: string;
        innerRadius: string;
        y: number;
    }[];
    dataLabels: {
        borderWidth: number;
        verticalAlign: string;
        format: string;
    };
    threshold: number;
    tooltip: {
        pointFormat: string;
    };
    useHTML: boolean;
    zIndex: number;
};
export declare const getBackgroundSerie: (backgroundColor: Highcharts.ColorType, max: number) => {
    data: {
        color: Highcharts.ColorType;
        radius: string;
        innerRadius: string;
        y: number;
    }[];
    dataLabels: {
        format: string;
    };
    enableMouseTracking: boolean;
    zIndex: number;
};
export declare const indicatorLengthIsBiggerThanItsScientificNotationLength: (indicatorLength: number, indicatorValue: number) => boolean;
export declare const getRangeSeries: (ranges: Range[], min: number, max: number) => {
    data: {
        color: string;
        radius: string;
        innerRadius: string;
        y: number;
    }[];
    dataLabels: {
        format: string;
    };
    threshold: number;
    tooltip: {
        pointFormat: string;
    };
    zIndex: number;
}[];
export declare const getCheckpointSeries: (checkpoints: Checkpoint[], max: number, min: number, showAsPercentage?: boolean) => {
    data: number[];
    tooltip: {
        borderColor: string;
        pointFormat: string;
    };
    dataLabels: {
        format: string;
    };
    name: string;
    type: string;
    dial: {
        backgroundColor: string;
        borderColor: string;
        baseWidth: number;
        borderWidth: number;
        topWidth: number;
        baseLength: string;
        rearLength: string;
    };
    zIndex: number;
}[];
export declare const getYAxis: (minValue: number, maxValue: number, showAsPercentage?: boolean) => {
    min: number;
    max: number;
    lineWidth: number;
    allowDecimals: boolean;
    labels: {
        distance: string;
        enabled: boolean;
        style: {
            fontSize: string;
            color: string;
        };
    };
    minorTickInterval: null;
    tickWidth: number;
};
export declare const getPercentageComparisonValue: (comparativeValue: number, initialValue: number) => number;
export declare const getSymbolElement: (value?: number) => "-" | "↑" | "↓";
export declare const getPercentageElement: (comparison: Comparison, value: number, decimalSeparator?: string, thousandSeparator?: string) => string;
export declare const getDifferenceElement: (comparison: Comparison, value: number, units?: string, decimalSeparator?: string, thousandSeparator?: string) => string;
export declare const getComparisonText: (comparison: Comparison) => string;
export declare const getCompareIndicator: (indicator: Indicator, comparison: Comparison, units?: string, decimalSeparator?: string, thousandSeparator?: string) => string;
export declare const getChart: (chart: Highcharts.ChartOptions, indicator: Indicator, decimalSeparator?: string, thousandSeparator?: string, units?: string, comparison?: Comparison, showAsPercentage?: boolean, hasData?: boolean) => {
    events: {
        render(): void;
    };
    alignThresholds?: boolean;
    alignTicks?: boolean;
    allowMutatingData?: boolean;
    animation?: (boolean | Partial<Highcharts.AnimationOptionsObject>);
    axisLayoutRuns?: number;
    backgroundColor?: (Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject);
    borderColor?: (Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject);
    borderRadius?: number;
    borderWidth?: number;
    className?: string;
    colorCount?: number;
    displayErrors?: boolean;
    height?: (number | string | null);
    ignoreHiddenSeries?: boolean;
    inverted?: boolean;
    map?: (string | Highcharts.GeoJSON | Highcharts.TopoJSON | Array<any>);
    mapTransforms?: any;
    margin?: (number | Array<number>);
    marginBottom?: number;
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    numberFormatter?: Highcharts.NumberFormatterCallbackFunction;
    options3d?: Highcharts.Chart3dOptions;
    panKey?: Highcharts.OptionsPanKeyValue;
    panning?: Highcharts.ChartPanningOptions;
    parallelAxes?: (Highcharts.ChartParallelAxesOptions | Array<Highcharts.ChartParallelAxesOptions>);
    parallelCoordinates?: boolean;
    plotBackgroundColor?: (Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject);
    plotBackgroundImage?: string;
    plotBorderColor?: (Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject);
    plotBorderWidth?: number;
    plotShadow?: (boolean | Highcharts.ShadowOptionsObject);
    polar?: boolean;
    proj4?: Function;
    reflow?: boolean;
    renderTo?: (string | Highcharts.HTMLDOMElement);
    resetZoomButton?: Highcharts.ChartResetZoomButtonOptions;
    scrollablePlotArea?: Highcharts.ChartScrollablePlotAreaOptions;
    selectionMarkerFill?: (Highcharts.ColorString | Highcharts.GradientColorObject | Highcharts.PatternObject);
    shadow?: (boolean | Highcharts.ShadowOptionsObject);
    showAxes?: boolean;
    spacing?: Array<number>;
    spacingBottom?: number;
    spacingLeft?: number;
    spacingRight?: number;
    spacingTop?: number;
    style?: Highcharts.CSSObject;
    styledMode?: boolean;
    type?: string;
    width?: (number | string | null);
    zooming?: Highcharts.ChartZoomingOptions;
};
export declare const chart: Highcharts.ChartOptions;
export declare const Gauge: ({ checkpoints, comparison, decimalPoint, hasData, indicator, max, min, title, options, ranges, showAsPercentage, thousandsSep, type, units, "data-testid": dataTestId, ...props }: GaugeProps) => any;
export {};
