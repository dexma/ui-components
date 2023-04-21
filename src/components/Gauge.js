import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import PropTypes from 'prop-types';
import Chart from '../components/Chart';
import { applyScientific, numberFormatter } from '../utils/formatter';
import { color } from '../styles/theme';

// As we cannot specify a different color (per each checkpoint) to border of tooltip
// in the same series, we need to override the call of "refresh" on Highcharts to set
// the correct value.
// To apply this function, we need to include a property "borderColor" inside the object
// tooltip of the serie.
Highcharts.wrap(Highcharts.Tooltip.prototype, 'refresh', function(
  p,
  point,
  mouseEvent
) {
  p.call(this, point, mouseEvent);

  if (!this.isHidden && !this.shared && !this.split) {
    const pointTooltipBorderColor =
      point && point.options.tooltip && point.options.tooltip.borderColor;
    const seriesTooltipBorderColor =
      point &&
      point.series &&
      point.series.options.tooltip &&
      point.series.options.tooltip.borderColor;
    const borderColor = pointTooltipBorderColor || seriesTooltipBorderColor;
    const label = this.label;

    if (label && borderColor) {
      label.attr({
        stroke: borderColor,
      });
    }
  }
});

export const valueAsPercentage = (value, max, min) =>
  ((value - min) * 100) / (max - min);

export const getThreshold = (max, min, value = 0) => {
  const threshold = value;
  if (min < threshold && max < threshold) {
    return max;
  }
  if (min > threshold && max > threshold) {
    return min;
  }
  return threshold;
};

const parseInsideRange = (value, startRange, endRange) => {
  if (value > endRange) {
    return endRange;
  }
  if (value < startRange) {
    return startRange;
  }
  return value;
};

const validValueAndThreshold = (value, threshold, min, max) =>
  !(
    (value <= min && value <= max && min > threshold && max > threshold) ||
    (value >= min && value >= max && min < threshold && max < threshold)
  );

export const getValueSeries = (indicator, max, min, name, showAsPercentage) => {
  let value = showAsPercentage
    ? valueAsPercentage(indicator.value, max, min)
    : indicator.value;
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

export const getBackgroundSerie = (backgroundColor, max) => ({
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

export const getRangeSeries = (ranges, min, max) => {
  const rangesRes = ranges
    .sort((rangeA, rangeB) => rangeB.to - rangeA.to)
    .filter(range => validValueAndThreshold(range.to, range.from, min, max))
    .map(range => {
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

export const getCheckpointSeries = (checkpoints, max, min, showAsPercentage) =>
  checkpoints
    .filter(cp => cp.value <= max && cp.value >= min)
    .map(cp => ({
      data: [
        showAsPercentage ? valueAsPercentage(cp.value, max, min) : cp.value,
      ],
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
      },
      zIndex: 2,
    }));

export const getYAxis = (showAsPercentage, minValue, maxValue) => ({
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

const getSize = (width, height, fontSizeRelation = 10, minRatio = 0.9) => {
  const proportion = height / width;
  const basicSize = width / fontSizeRelation;

  return basicSize * Math.min(proportion, minRatio);
};

export const getChart = (
  chart,
  indicator,
  hasData,
  decimalSeparator,
  thousandSeparator,
  showAsPercentage,
  units,
  comparison
) => ({
  ...chart,
  events: {
    render() {
      const chart2 = this;
      // Main Data Label
      if (chart2.indicatorLabel) {
        chart2.indicatorLabel.destroy();
      }
      const mainSize = getSize(chart2.chartWidth, chart2.chartHeight);
      renderIndicatorLabel(
        chart2,
        indicator,
        hasData,
        decimalSeparator,
        thousandSeparator,
        mainSize
      );
      // Units
      if (chart2.suffixDataLabel) {
        chart2.suffixDataLabel.destroy();
      }
      const suffixSize = getSize(chart2.chartWidth, chart2.chartHeight, 16);
      renderSuffix(chart2, showAsPercentage, units, mainSize, suffixSize);
      // Comparison percentage
      if (comparison && comparison.enabled) {
        renderComparison(
          chart2,
          indicator,
          hasData,
          units,
          comparison,
          decimalSeparator,
          thousandSeparator,
          mainSize,
          suffixSize
        );
      }
    },
  },
});

const renderIndicatorLabel = (
  chart,
  indicator,
  hasData,
  decimalSeparator,
  thousandSeparator,
  mainSize
) => {
  const currentChart = chart;
  currentChart.indicatorLabel = currentChart.renderer
    .text(
      hasData
        ? numberFormatter(indicator.value, decimalSeparator, thousandSeparator)
        : '-',
      currentChart.chartWidth / 2,
      currentChart.chartHeight / 2
    )
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
  if (
    textBox.width >
    currentChart.axes[1].axisGroup.element.getBoundingClientRect().width * 0.7
  ) {
    currentChart.indicatorLabel.attr({
      text: applyScientific(parseFloat(indicator.value), decimalSeparator, 2),
    });
    textBox = currentChart.indicatorLabel.getBBox();
  }
  currentChart.indicatorLabel.translate(-textBox.width / 2, mainSize + 16);
};

const renderSuffix = (chart, showAsPercentage, units, mainSize, suffixSize) => {
  const currentChart = chart;
  currentChart.suffixDataLabel = currentChart.renderer
    .text(
      showAsPercentage ? '%' : units || '',
      currentChart.chartWidth / 2,
      currentChart.chartHeight / 2
    )
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
  currentChart.suffixDataLabel.translate(
    -suffixBox.width / 2,
    mainSize + suffixSize + 16
  );
};

export const getPercentageComparisonValue = (comparativeValue, initialValue) =>
  ((initialValue - comparativeValue) / Math.abs(comparativeValue)) * 100;

export const getSymbolElement = difference => {
  if (difference >= 0 && difference !== Number.POSITIVE_INFINITY) return '↑';
  if (difference < 0 && difference !== Number.NEGATIVE_INFINITY) return '↓';
  return '-';
};

export const getPercentageElement = (
  comparison,
  value,
  decimalSeparator,
  thousandSeparator
) => {
  const percentage = getPercentageComparisonValue(comparison.value, value);
  return `<span style="font-size: 1.2em; font-weight: bold; color: ${
    comparison.color
  };">${getSymbolElement(percentage)}</span><span style="color: ${
    comparison.color
  };"> ${
    !Number.isNaN(percentage) &&
    percentage !== Number.POSITIVE_INFINITY &&
    percentage !== Number.NEGATIVE_INFINITY
      ? numberFormatter(
          Math.abs(percentage),
          decimalSeparator,
          thousandSeparator
        )
      : ''
  }%</span>`;
};

export const getDifferenceElement = (
  comparison,
  value,
  units,
  decimalSeparator,
  thousandSeparator
) => {
  const difference = value - comparison.value;
  return `<span style="font-size: 1.2em; font-weight: bold; color: ${
    comparison.color
  };">${getSymbolElement(difference)}</span><span style="color: ${
    comparison.color
  };"> ${
    !Number.isNaN(difference)
      ? numberFormatter(
          Math.abs(difference),
          decimalSeparator,
          thousandSeparator
        )
      : ''
  } ${units}</span>`;
};

export const getComparisonText = comparison =>
  `<span style="color: ${color.gray500};">${comparison.period.text}</span>`;

export const getCompareIndicator = (
  comparison,
  indicator,
  units,
  decimalSeparator,
  thousandSeparator
) =>
  comparison.showAsPercentage
    ? getPercentageElement(
        comparison,
        indicator.value,
        decimalSeparator,
        thousandSeparator
      )
    : getDifferenceElement(
        comparison,
        indicator.value,
        units,
        decimalSeparator,
        thousandSeparator
      );

const renderComparison = (
  chart,
  indicator,
  hasData,
  units,
  comparison,
  decimalSeparator,
  thousandSeparator,
  mainSize,
  suffixSize
) => {
  const currentChart = chart;
  if (currentChart.comparisonPercentage) {
    currentChart.comparisonPercentage.destroy();
  }
  const comparisonPerCentageSize = getSize(
    currentChart.chartWidth,
    currentChart.chartHeight,
    20
  );

  currentChart.comparisonPercentage = currentChart.renderer
    .text(
      hasData
        ? getCompareIndicator(
            comparison,
            indicator,
            units,
            decimalSeparator,
            thousandSeparator
          )
        : `- ${comparison.showAsPercentage ? '%' : units}`,
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
  currentChart.comparisonPercentage.translate(
    -comparisonPercentageBox.width / 2,
    2.35 * mainSize + 2.35 * suffixSize
  );

  // Comparison text
  if (currentChart.comparisonLabel) {
    currentChart.comparisonLabel.destroy();
  }
  const comparisonSize = getSize(
    currentChart.chartWidth,
    currentChart.chartHeight,
    24
  );
  currentChart.comparisonLabel = currentChart.renderer
    .text(
      getComparisonText(comparison),
      currentChart.chartWidth / 2,
      currentChart.chartHeight / 2
    )
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
  currentChart.comparisonLabel.translate(
    -comparisonBox.width / 2,
    2.5 * mainSize + 2.5 * suffixSize + 12
  );
};

// Default chart
export const chart = {
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

const Gauge = props => {
  const {
    checkpoints,
    comparison,
    decimalPoint,
    hasData,
    indicator,
    max,
    min,
    title,
    options,
    ranges,
    showAsPercentage,
    thousandsSep,
    type,
    units,
    'data-testid': dataTestId,
  } = props;

  const [gaugeOptions, setGaugeOptions] = useState();

  useEffect(() => {
    if (type === 'DIAL') {
      const aggregateChart = {
        ...defaultOptions.chart,
        ...options?.chart,
      };
      const resultChart = getChart(
        aggregateChart,
        indicator,
        hasData,
        decimalPoint,
        thousandsSep,
        showAsPercentage,
        units,
        comparison
      );
      const yAxis = getYAxis(showAsPercentage, min, max);
      const rangeSeries =
        ranges && ranges.length > 0 ? getRangeSeries(ranges, min, max) : [];
      const valueSerie = getValueSeries(
        indicator,
        max,
        min,
        title,
        showAsPercentage
      );
      const checkpointSeries =
        checkpoints && checkpoints.length > 0
          ? getCheckpointSeries(checkpoints, max, min, showAsPercentage)
          : [];
      const backgroundSerie = getBackgroundSerie(
        new Highcharts.Color(color.gray200).setOpacity(0.3).get(),
        max
      );
      const series = [
        valueSerie,
        ...rangeSeries,
        ...checkpointSeries,
        backgroundSerie,
      ];
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
          ...options?.tooltip,
        },
      };

      setGaugeOptions({
        ...chartContract,
        yAxis,
        series: [...series],
      });
    }
  }, [checkpoints, indicator, min, max, options, ranges, units]);
  return (
    <>
      {gaugeOptions && (
        <Chart data-testid={dataTestId} options={gaugeOptions} />
      )}
    </>
  );
};

const propTypes = {
  /**
   * Array of objects to draw pointers on the arc dedicated to indicator.
   */
  checkpoints: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      tooltip: PropTypes.string,
      value: PropTypes.number.isRequired,
    })
  ),
  /**
   * Object to compare a value against the indicator of the gauge. If it's enabled, it will show a text with the increment/decrement against the indicator.
   */
  comparison: PropTypes.shape({
    enabled: PropTypes.bool.isRequired,
    period: PropTypes.shape({
      from: PropTypes.instanceOf(Date),
      to: PropTypes.instanceOf(Date),
      type: PropTypes.string,
      text: PropTypes.string,
    }),
    color: PropTypes.string,
    value: PropTypes.number.isRequired,
    showAsPercentage: PropTypes.bool,
  }),
  /**
   * String to specify data test id for Gauge chart
   */
  'data-testid': PropTypes.string,
  /**
   * Format of decimal point on the representation of the values on the chart.
   */
  decimalPoint: PropTypes.string,
  /**
   * Property to indicate if the indicator has or not data to be calculated. If this boolean is TRUE, the main indicator and comparison, if enabled, will show "-".
   */
  hasData: PropTypes.bool,
  /**
   * Main value draw on main arc and center of gauge. If showAsPercentage is activated, this value will be scaled to a value between 0%-100%.
   */
  indicator: PropTypes.shape({
    color: PropTypes.string.isRequired,
    tooltip: PropTypes.string,
    value: PropTypes.number.isRequired,
  }).isRequired,
  /**
   * Maximum value for the gauge. If showAsPercentage is activated, this value will be overwritten by 100.
   */
  max: PropTypes.number.isRequired,
  /**
   * Minimum value for the gauge. If showAsPercentage is activated, this value will be overwritten by 0.
   */
  min: PropTypes.number.isRequired,
  /**
   * All the highcharts options you can see on the <a href="https://api.highcharts.com/highcharts/chart">documentation</a>
   */
  options: PropTypes.shape({}),
  /**
   * Array of objects to draw range arcs below the arc dedicated to indicator.
   */
  ranges: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      tooltip: PropTypes.string,
      from: PropTypes.number,
      to: PropTypes.number.isRequired,
    })
  ),
  /**
   * Values related to indicator, checkpoints and comparison will be shown in percentage format
   */
  showAsPercentage: PropTypes.bool,
  /**
   * Format of thousand separation on the representation of the values on the chart.
   */
  thousandsSep: PropTypes.string,
  /**
   * Title of the chart
   */
  title: PropTypes.string,
  /**
   * Posible types of visualization of Gauge. Currently, DIAL is only available.
   */
  type: PropTypes.oneOf(['DIAL']).isRequired,
  /**
   * Units of the indicator of the gauge
   */
  units: PropTypes.string,
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

const defaultProps = {
  type: 'DIAL',
  showAsPercentage: false,
  decimalPoint: ',',
  thousandsSep: '.',
  hasData: true,
};

Gauge.propTypes = propTypes;
Gauge.defaultProps = defaultProps;

export default Gauge;
