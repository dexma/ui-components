import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import PropTypes from 'prop-types';
import { renderToStaticMarkup } from 'react-dom/server';
import Chart from './Chart';
import theme from '../styles/theme';
import Icon from './Icon';

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
// Comparison
export const getPercentageValue = (comparativeValue, initialValue) =>
  ((initialValue - comparativeValue) / Math.abs(comparativeValue)) * 100;
export const getArrowIcon = (top, color) => {
  const arrowDirection = top ? 'arrow_up' : 'arrow_down';
  return renderToStaticMarkup(
    <Icon
      name={arrowDirection}
      size={16}
      color={color}
      style={{
        position: 'inherit',
        left: '0px',
        top: '4px',
      }}
    />
  );
};
export const getPercentageElement = (comparison, value) => {
  const percentage = getPercentageValue(comparison.value, value);
  return `<span style="position:relative; color: ${comparison.color};">${
    percentage < 0
      ? getArrowIcon(false, comparison.color)
      : getArrowIcon(true, comparison.color)
  }${Math.abs(getPercentageValue(comparison.value, value))}%</span>`;
};
export const getComparisonText = (comparison, value) => {
  if (comparison && comparison.enabled) {
    return `<div class="comparison-info">${getPercentageElement(
      comparison,
      value
    )}&nbsp;<span style="color: #7E8084;">${
      comparison.period.text
    }</span></div>`;
  }
  return '';
};
// Series
// Value Serie
export const getValueSeries = (
  initialValue,
  color,
  max,
  name,
  showAsPercentage,
  units,
  comparison
) => {
  const value = showAsPercentage ? (initialValue * 100) / max : initialValue;
  return {
    name: name || 'Value',
    data: [
      {
        color: color || '#000',
        radius: '105%',
        innerRadius: '95%',
        y: value,
      },
    ],

    dataLabels: {
      format: `<div style="text-align:center;"><div class="highcharts-main-data-label" ><div><span data-testid="highchart-data-label-value" style="font-size:${getFontSizeDataLabel(
        value
      )};color:${color};">${value}</span></div><span data-testid="highchart-data-label-units" style="font-size:30px; font-weight: 400;color:#7E8084;">${
        showAsPercentage ? '%' : units || ''
      }</span></div>${getComparisonText(comparison, value)}
      </div>`,
    },
    threshold: 0,
    tooltip: {
      valueSuffix: showAsPercentage ? '%' : units || '',
    },
    useHTML: true,
    zIndex: 4,
  };
};
// Background Value Serie
export const getBackgroundSerie = (backgroundColor, max) => {
  return {
    data: [
      {
        color: backgroundColor,
        radius: '105%',
        innerRadius: '95%',
        y: max,
      },
    ],
    dataLabels: {
      format: ``,
    },
    enableMouseTracking: false,
    zIndex: 0,
  };
};
// Range Series
export const getRangeSeries = ranges => {
  const rangesRes = ranges
    .sort((rangeA, rangeB) => rangeB.to - rangeA.to)
    .map((range, index) => ({
      data: [
        {
          color: range.color,
          radius: '90%',
          innerRadius: '85%',
          y: range.to,
        },
      ],
      dataLabels: {
        format: ``,
      },
      threshold: range.from,
      tooltip: {
        pointFormat: `<span style="fill:${range.color}; stroke:${range.color}; border-color:${range.color};"><span style="color:${range.color};">\u25CF</span> <b>${range.tooltip}</b></span><br/>`,
      },
      zIndex: index,
    }));
  return rangesRes;
};
// Checkpoint Series
export const getCheckpointSeries = (
  checkpoints,
  max,
  showAsPercentage,
  units
) => {
  return checkpoints.map(cp => {
    return {
      data: [showAsPercentage ? (cp.value * 100) / max : cp.value],
      tooltip: {
        borderColor: cp.color, // This field is not included by default on Highcharts, it's a customized one created on this library
        pointFormat: `<span style="fill:${cp.color}; stroke:${cp.color}; border-color:${cp.color};"><span style="color:${cp.color};">\u25CF</span> {series.name}: <b>{point.y}</b></span><br/>`,
        valueSuffix: showAsPercentage ? '%' : units || '',
      },
      dataLabels: {
        format: ``,
      },
      name: cp.tooltip,
      type: 'gauge',
      dial: {
        backgroundColor: cp.color,
      },
      zIndex: 4,
    };
  });
};
// Conditional fontSize for mainDataLabel
export const getFontSizeDataLabel = value => {
  const length = String(value).length;
  if (length <= 3) {
    return '100px';
  }
  if (length === 4) {
    return '80px';
  }
  if (length === 5) {
    return '72px';
  }
  if (length === 6) {
    return '60px';
  }
  if (length === 7) {
    return '48px';
  }
  return '30px';
};
// Y Axis
export const getYAxis = (minValue, maxValue) => {
  return {
    min: minValue,
    max: maxValue,
    lineWidth: 0,
    allowDecimals: true,
    labels: {
      distance: 30,
      enabled: true,
      x: 0,
      y: 0,
      style: {
        fontSize: '18',
        color: '#7E8084',
      },
    },
    minorTickInterval: null,
    tickWidth: 0,
  };
};
// Default chart
const chart = {
  type: 'solidgauge',
  margin: [0, 0, 0, 0],
  marginTop: 55,
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
};
// Default plotOptions
const plotOptions = {
  solidgauge: {
    stickyTracking: false,
    dataLabels: {
      y: 80,
      borderWidth: 0,
      useHTML: true,
    },
  },
  gauge: {
    dial: {
      baseLength: '100%',
      radius: '105%',
      rearLength: '-90%',
      borderWidth: 12,
    },
  },
};

const Gauge = props => {
  const {
    checkpoints,
    color,
    comparison,
    max,
    min,
    name,
    options,
    ranges,
    showAsPercentage,
    type,
    units,
    value,
  } = props;
  const [gaugeOptions, setGaugeOptions] = useState();

  useEffect(() => {
    if (type === 'DIAL') {
      const yAxis = getYAxis(min, max);
      const rangeSeries =
        ranges && ranges.length > 0 ? getRangeSeries(ranges) : [];
      const valueSerie = getValueSeries(
        value,
        color,
        max,
        name,
        showAsPercentage,
        units,
        comparison
      );
      const checkpointSeries =
        checkpoints && checkpoints.length > 0
          ? getCheckpointSeries(checkpoints, max, showAsPercentage, units)
          : [];
      const backgroundSerie = getBackgroundSerie(
        new Highcharts.Color('#D9D9D9').setOpacity(0.3).get(),
        max
      );
      const series = [
        valueSerie,
        ...rangeSeries,
        ...checkpointSeries,
        backgroundSerie,
      ];
      setGaugeOptions({
        ...defaultOptions,
        ...options,
        yAxis,
        series: [...series],
      });
    }
  }, [checkpoints, min, max, ranges, units, value, theme]);
  return <>{gaugeOptions && <Chart options={gaugeOptions} />}</>;
};

const propTypes = {
  units: PropTypes.string, // (if absolute value?)
  type: PropTypes.oneOf(['DIAL']).isRequired, // or 'BULLET'
  showAsPercentage: PropTypes.bool, // (to know if the values must be transformed to % or left as they are)
  min: PropTypes.number.isRequired, // (min value for the gauge)
  max: PropTypes.number.isRequired, // (max value fo the gauge)
  value: PropTypes.number.isRequired, // (specific value to be shown)
  color: PropTypes.string, // as our standard COLOR type found on other widgets
  checkpoints: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      tooltip: PropTypes.string,
      value: PropTypes.number.isRequired,
    })
  ),
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
  ranges: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.string.isRequired,
      tooltip: PropTypes.string,
      from: PropTypes.number,
      to: PropTypes.number.isRequired,
    })
  ),
  /**
   * All the highcharts options you can see on the <a href="https://api.highcharts.com/highcharts/chart">documentation</a>
   */
  options: PropTypes.shape({}),
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
  min: 0,
  max: 100,
  value: 0,
  theme: theme,
};

Gauge.propTypes = propTypes;
Gauge.defaultProps = defaultProps;

export default Gauge;
