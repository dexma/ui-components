import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';

import { Chart } from '@components/Chart';
import { applyScientific, numberFormatter } from '@utils/formatter';
import { color } from '@utils/theme';

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

enum GaugeType {
    DIAL = 'DIAL',
}

type GaugeProps = {
    checkpoints?: Array<{ color: string; tooltip: string; value: number }>;
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
    indicator: { color: string; tooltip: string; value: number };
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

// As we cannot specify a different color (per each checkpoint) to border of tooltip
// in the same series, we need to override the call of "refresh" on Highcharts to set
// the correct value.
// To apply this function, we need to include a property "borderColor" inside the object
// tooltip of the serie.
Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', (p, point, mouseEvent) => {
    const current = this as unknown as any;
    p.call(current, point, mouseEvent);

    if (current && !current.isHidden && !current.shared && !current.split) {
        const pointTooltipBorderColor = point?.options.tooltip?.borderColor;
        const seriesTooltipBorderColor = point?.series?.options.tooltip?.borderColor;
        const borderColor = pointTooltipBorderColor || seriesTooltipBorderColor;
        const { label } = current;

        if (label && borderColor) {
            label.attr({
                stroke: borderColor,
            });
        }
    }
});

export const valueAsPercentage = (value: number, max: number, min: number) => ((value - min) * 100) / (max - min);

export const getThreshold = (max: number, min: number, value = 0) => {
    const threshold = value;
    if (min < threshold && max < threshold) {
        return max;
    }
    if (min > threshold && max > threshold) {
        return min;
    }
    return threshold;
};

const parseInsideRange = (value: number, startRange: number, endRange: number) => {
    if (value > endRange) {
        return endRange;
    }
    if (value < startRange) {
        return startRange;
    }
    return value;
};

const validValueAndThreshold = (value: number, threshold: number, min: number, max: number) =>
    !((value <= min && value <= max && min > threshold && max > threshold) || (value >= min && value >= max && min < threshold && max < threshold));

export const getValueSeries = (indicator: Indicator, max: number, min: number, name?: string, showAsPercentage?: boolean) => {
    let value = showAsPercentage ? valueAsPercentage(indicator.value, max, min) : indicator.value;
    const threshold = getThreshold(max, min);
    if (!validValueAndThreshold(value, 0, min, max)) return {};
    value = parseInsideRange(value, min, max);
    return {
        name: name || 'Value',
        data: [
            {
                color: indicator.color || '#000',
                radius: '90%',
                innerRadius: '80%',
                y: value,
            },
        ],
        dataLabels: {
            borderWidth: 0,
            verticalAlign: 'bottom',
            format: '',
        },
        threshold,
        tooltip: {
            pointFormat: `<span style="fill:${indicator.color}; stroke:${indicator.color}; border-color:${indicator.color};"><span style="color:${indicator.color};">\u25CF</span> <b>${indicator.tooltip}</b></span><br/>`,
        },
        useHTML: true,
        zIndex: 1,
    };
};

export const getBackgroundSerie = (backgroundColor: Highcharts.ColorType, max: number) => ({
    data: [
        {
            color: backgroundColor,
            radius: '90%',
            innerRadius: '80%',
            y: max,
        },
    ],
    dataLabels: {
        format: ``,
    },
    enableMouseTracking: false,
    zIndex: 0,
});

export const indicatorLengthIsBiggerThanItsScientificNotationLength = (indicatorLength: number, indicatorValue: number) =>
    indicatorLength > applyScientific(indicatorValue, '.', 2).length;

export const getRangeSeries = (ranges: Range[], min: number, max: number) => {
    const rangesRes = ranges
        .sort((rangeA, rangeB) => rangeB.to - rangeA.to)
        .filter((range) => validValueAndThreshold(range.to, range.from, min, max))
        .map((range) => {
            const threshold = getThreshold(max, min, range.from);
            const y = parseInsideRange(range.to, min, max);
            return {
                data: [
                    {
                        color: range.color,
                        radius: '75%',
                        innerRadius: '70%',
                        y,
                    },
                ],
                dataLabels: {
                    format: ``,
                },
                threshold,
                tooltip: {
                    pointFormat: `<span style="fill:${range.color}; stroke:${range.color}; border-color:${range.color};"><span style="color:${range.color};">\u25CF</span> <b>${range.tooltip}</b></span><br/>`,
                },
                zIndex: 1,
            };
        });
    return rangesRes;
};

export const getCheckpointSeries = (checkpoints: Checkpoint[], max: number, min: number, showAsPercentage?: boolean) =>
    checkpoints
        .filter((cp) => cp.value <= max && cp.value >= min)
        .map((cp) => ({
            data: [showAsPercentage ? valueAsPercentage(cp.value, max, min) : cp.value],
            tooltip: {
                borderColor: cp.color, // This field is not included by default on Highcharts, it's a customized one created on this library
                pointFormat: `<span style="fill:${cp.color}; stroke:${cp.color}; border-color:${cp.color};"><span style="color:${cp.color};">\u25CF</span> <b>${cp.tooltip}</b></span><br/>`,
            },
            dataLabels: {
                format: ``,
            },
            name: cp.tooltip,
            type: 'gauge',
            dial: {
                backgroundColor: cp.color,
                borderColor: cp.color,
                baseWidth: 1,
                borderWidth: 1,
                topWidth: 1,
                baseLength: '90%',
                rearLength: '-90%',
            },
            zIndex: 2,
        }));

export const getYAxis = (minValue: number, maxValue: number, showAsPercentage?: boolean) => ({
    min: showAsPercentage ? 0 : minValue,
    max: showAsPercentage ? 100 : maxValue,
    lineWidth: 0,
    allowDecimals: true,
    labels: {
        distance: '105%',
        enabled: true,
        style: {
            fontSize: '12px',
            color: color.gray500,
        },
    },
    minorTickInterval: null,
    tickWidth: 0,
});

const getSize = (width: number, height: number, fontSizeRelation = 10, minRatio = 0.9) => {
    const proportion = height / width;
    const basicSize = width / fontSizeRelation;

    return basicSize * Math.min(proportion, minRatio);
};

const renderIndicatorLabel = (chart: any, indicator: Indicator, mainSize: number, decimalSeparator?: string, thousandSeparator?: string, hasData?: boolean) => {
    const currentChart = chart;
    currentChart.indicatorLabel = currentChart.renderer
        .text(hasData ? numberFormatter(indicator.value, decimalSeparator || ',', thousandSeparator || '.') : '-', currentChart.chartWidth / 2, currentChart.chartHeight / 2)
        .css({
            color: indicator.color,
            fontSize: `${mainSize}px`,
            fontWeight: 700,
        })
        .attr({
            zIndex: 3,
        })
        .add();
    let textBox = currentChart.indicatorLabel.getBBox();
    const { plotWidth } = currentChart;
    const { plotHeight } = currentChart;
    const indicatorLength = numberFormatter(indicator.value, '.', '.').length;
    if (Math.min(plotWidth, plotHeight) / 2 / indicatorLength <= 3 * indicatorLength && indicatorLengthIsBiggerThanItsScientificNotationLength(indicatorLength, indicator.value)) {
        currentChart.indicatorLabel.attr({
            text: applyScientific(indicator.value, decimalSeparator || ',', 2),
        });
        textBox = currentChart.indicatorLabel.getBBox();
    }
    currentChart.indicatorLabel.translate(-textBox.width / 2, mainSize + 16);
};

const renderSuffix = (chart: any, mainSize: number, suffixSize: number, units?: string, showAsPercentage?: boolean) => {
    const currentChart = chart;
    currentChart.suffixDataLabel = currentChart.renderer
        .text(showAsPercentage ? '%' : units || '', currentChart.chartWidth / 2, currentChart.chartHeight / 2)
        .css({
            color: color.gray500,
            fontWeight: 400,
            fontSize: `${suffixSize}px`,
        })
        .attr({
            zIndex: 3,
        })
        .add();
    const suffixBox = currentChart.suffixDataLabel.getBBox();
    currentChart.suffixDataLabel.translate(-suffixBox.width / 2, mainSize + suffixSize + 16);
};

export const getPercentageComparisonValue = (comparativeValue: number, initialValue: number) => ((initialValue - comparativeValue) / Math.abs(comparativeValue)) * 100;

export const getSymbolElement = (value?: number) => {
    if (value && value >= 0 && value !== Number.POSITIVE_INFINITY) return '↑';
    if (value && value < 0 && value !== Number.NEGATIVE_INFINITY) return '↓';
    return '-';
};

export const getPercentageElement = (comparison: Comparison, value: number, decimalSeparator?: string, thousandSeparator?: string) => {
    const percentage = comparison.value ? getPercentageComparisonValue(comparison.value, value) : undefined;
    return `<span style="font-size: 1.2em; font-weight: bold; color: ${comparison.color};">${getSymbolElement(percentage)}</span><span style="color: ${comparison.color};"> ${
        percentage && !Number.isNaN(percentage) && percentage !== Number.POSITIVE_INFINITY && percentage !== Number.NEGATIVE_INFINITY
            ? numberFormatter(Math.abs(percentage), decimalSeparator || ',', thousandSeparator || '.')
            : ''
    }%</span>`;
};

export const getDifferenceElement = (comparison: Comparison, value: number, units?: string, decimalSeparator?: string, thousandSeparator?: string) => {
    const difference = comparison.value ? value - comparison.value : undefined;
    return `<span style="font-size: 1.2em; font-weight: bold; color: ${comparison.color};">${getSymbolElement(difference)}</span><span style="color: ${comparison.color};"> ${
        difference && !Number.isNaN(difference) ? numberFormatter(Math.abs(difference), decimalSeparator || ',', thousandSeparator || '.') : ''
    } ${units}</span>`;
};

export const getComparisonText = (comparison: Comparison) => `<span style="color: ${color.gray500};">${comparison.period.text}</span>`;
export const getCompareIndicator = (indicator: Indicator, comparison: Comparison, units?: string, decimalSeparator?: string, thousandSeparator?: string) =>
    comparison.showAsPercentage
        ? getPercentageElement(comparison, indicator.value, decimalSeparator, thousandSeparator)
        : getDifferenceElement(comparison, indicator.value, units, decimalSeparator, thousandSeparator);

const renderComparison = (
    chart: any,
    indicator: Indicator,
    mainSize: number,
    suffixSize: number,
    comparison: Comparison,
    units?: string,
    decimalSeparator?: string,
    thousandSeparator?: string,
    hasData?: boolean
) => {
    const currentChart = chart;
    if (currentChart.comparisonPercentage) {
        currentChart.comparisonPercentage.destroy();
    }
    const comparisonPerCentageSize = getSize(currentChart.chartWidth, currentChart.chartHeight, 20);

    currentChart.comparisonPercentage = currentChart.renderer
        .text(
            hasData ? getCompareIndicator(indicator, comparison, units, decimalSeparator, thousandSeparator) : `- ${comparison.showAsPercentage ? '%' : units}`,
            currentChart.chartWidth / 2,
            currentChart.chartHeight / 2
        )
        .css({
            color: color.gray500,
            fontWeight: 400,
            fontSize: `min(${comparisonPerCentageSize}px, 30px)`,
        })
        .attr({
            zIndex: 3,
        })
        .add();
    const comparisonPercentageBox = currentChart.comparisonPercentage.getBBox();
    currentChart.comparisonPercentage.translate(-comparisonPercentageBox.width / 2, 2.35 * mainSize + 2.35 * suffixSize);

    // Comparison text
    if (currentChart.comparisonLabel) {
        currentChart.comparisonLabel.destroy();
    }
    const comparisonSize = getSize(currentChart.chartWidth, currentChart.chartHeight, 24);
    currentChart.comparisonLabel = currentChart.renderer
        .text(getComparisonText(comparison), currentChart.chartWidth / 2, currentChart.chartHeight / 2)
        .css({
            color: color.gray500,
            fontWeight: 400,
            fontSize: `min(${comparisonSize}px, 24px)`,
        })
        .attr({
            zIndex: 3,
        })
        .add();
    const comparisonBox = currentChart.comparisonLabel.getBBox();
    currentChart.comparisonLabel.translate(-comparisonBox.width / 2, 2.5 * mainSize + 2.5 * suffixSize + 12);
};

export const getChart = (
    chart: Highcharts.ChartOptions,
    indicator: Indicator,
    decimalSeparator?: string,
    thousandSeparator?: string,
    units?: string,
    comparison?: Comparison,
    showAsPercentage?: boolean,
    hasData?: boolean
) => ({
    ...chart,
    events: {
        render() {
            const chart2 = this as unknown as any;
            // Main Data Label
            if (chart2.indicatorLabel) {
                chart2.indicatorLabel.destroy();
            }
            const mainSize = getSize(chart2.chartWidth, chart2.chartHeight);
            renderIndicatorLabel(chart2, indicator, mainSize, decimalSeparator, thousandSeparator, hasData);
            // Units
            if (chart2.suffixDataLabel) {
                chart2.suffixDataLabel.destroy();
            }
            const suffixSize = getSize(chart2.chartWidth, chart2.chartHeight, 16);
            renderSuffix(chart2, mainSize, suffixSize, units, showAsPercentage);
            // Comparison percentage
            if (comparison && comparison.enabled) {
                renderComparison(chart2, indicator, mainSize, suffixSize, comparison, units, decimalSeparator, thousandSeparator, hasData);
            }
        },
    },
});

// Default chart
export const chart: Highcharts.ChartOptions = {
    type: 'solidgauge',
};
// Default pane
const pane = {
    startAngle: -125,
    endAngle: 125,
    background: [
        {
            outerRadius: '100%',
            innerRadius: '0%',
            backgroundColor: 'transparent',
            borderWidth: 0,
        },
    ],
    useHTML: true,
};
// Default plotOptions
const plotOptions = {
    solidgauge: {
        stickyTracking: false,
        dataLabels: {
            x: 0,
            y: 50,
            borderWidth: 10,
            useHTML: true,
        },
    },
    gauge: {
        dial: {
            baseLength: '100%',
            radius: '90%',
            rearLength: '-89%',
            borderWidth: 12,
        },
    },
};

const defaultOptions = {
    chart,
    title: {
        text: '',
    },
    credits: {
        enabled: false,
    },
    pane,
    plotOptions,
    tooltip: {
        useHTML: true,
        followPointer: true,
        backgroundColor: 'transparent',
    },
};

export const Gauge = ({
    checkpoints,
    comparison,
    decimalPoint = ',',
    hasData = true,
    indicator,
    max,
    min,
    title,
    options,
    ranges,
    showAsPercentage,
    thousandsSep = '.',
    type = 'DIAL',
    units,
    'data-testid': dataTestId,
    ...props
}: GaugeProps) => {
    const [gaugeOptions, setGaugeOptions] = useState<any>();

    useEffect(() => {
        if (type === 'DIAL') {
            const aggregateChart: Highcharts.ChartOptions = {
                ...defaultOptions.chart,
                ...options?.chart,
            };
            const resultChart = getChart(aggregateChart, indicator, decimalPoint, thousandsSep, units, comparison, showAsPercentage, hasData);
            const yAxis = getYAxis(min, max, showAsPercentage);
            const rangeSeries = ranges && ranges.length > 0 ? getRangeSeries(ranges, min, max) : [];
            const valueSerie = getValueSeries(indicator, max, min, title, showAsPercentage);
            const checkpointSeries = checkpoints && checkpoints.length > 0 ? getCheckpointSeries(checkpoints, max, min, showAsPercentage) : [];
            const backgroundSerie = getBackgroundSerie(new Highcharts.Color(color.gray200).setOpacity(0.3).get(), max);
            const series = [valueSerie, ...rangeSeries, ...checkpointSeries, backgroundSerie];
            const chartContract = {
                chart: resultChart,
                title: {
                    text: title,
                    ...options?.title,
                },
                subtitle: {
                    ...options?.subtitle,
                },
                credits: {
                    enabled: false,
                },
                pane: {
                    ...pane,
                    ...options?.pane,
                },
                plotOptions: {
                    ...plotOptions,
                    ...options?.plotOptions,
                },
                tooltip: {
                    useHTML: true,
                    followPointer: true,
                    backgroundColor: 'transparent',
                    borderWidth: 1,
                    ...options?.tooltip,
                },
            };

            setGaugeOptions({
                ...chartContract,
                yAxis,
                series: [...series] as unknown as Highcharts.SeriesOptionsType[],
            });
        }
    }, [checkpoints, indicator, min, max, options, ranges, units, type, decimalPoint, thousandsSep, comparison, showAsPercentage, hasData, title]);
    return gaugeOptions && <Chart data-testid={dataTestId} options={gaugeOptions} {...props} />;
};
