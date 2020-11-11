import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import Highcharts from 'highcharts';
import addSankeyModule from 'highcharts/modules/sankey';
import addExportingModule from 'highcharts/modules/exporting';
import addOfflineExportingModule from 'highcharts/modules/offline-exporting';
import addExportData from 'highcharts/modules/export-data';
import boost from 'highcharts/modules/boost';

import theme from '../styles/theme';

boost(Highcharts);
addSankeyModule(Highcharts);
addExportingModule(Highcharts);
addOfflineExportingModule(Highcharts);
addExportData(Highcharts);

const propTypes = {
  /**
   * The default thousands separator used in the Highcharts.numberFormat method unless otherwise specified in the function arguments. Defaults to a single space character, which is recommended in ISO 31-0 and works across Anglo-American and continental European languages
   */
  thousandsSep: PropTypes.string,
  /**
   * Metric prefixes used to shorten high numbers in axis labels. Replacing any of the positions with null causes the full number to be written. Setting numericSymbols to null disables shortening altogether
   */
  numericSymbols: PropTypes.arrayOf(PropTypes.string),
  /**
   * An array containing the months names. Corresponds to the %B format in Highcharts.dateFormat()
   */
  months: PropTypes.arrayOf(PropTypes.string),
  /**
   * Short week days, starting Sunday. If not specified, Highcharts uses the first three letters of the lang.weekdays option
   */
  shortMonths: PropTypes.arrayOf(PropTypes.string),
  /**
   * An array containing the weekday names
   */
  weekdays: PropTypes.arrayOf(PropTypes.string),
  /**
   * All the highcharts options you can see on the <a href="https://api.highcharts.com/highcharts/chart">documentation</a>
   */
  options: PropTypes.objectOf(PropTypes.any),
  /**
   * Call a function when the charts is mounted, helpful when use multiple ref
   */
  callback: PropTypes.func,
};

const defaultProps = {
  thousandsSep: ' ',
  numericSymbols: ['k', 'M', 'G', 'T', 'P', 'E'],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  shortMonths: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  weekdays: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  theme: theme,
};

const getStyledChart = () => {
  const { backgroundColor, fontFamily } = theme;
  return {
    chart: {
      backgroundColor: backgroundColor,
      style: {
        fontFamily: fontFamily,
      },
    },
    title: {
      style: {
        fontWeight: 'bold',
      },
    },
    tooltip: {
      backgroundColor: backgroundColor,
      shadow: false,
    },
    legend: {
      backgroundColor: backgroundColor,
      itemStyle: {},
    },
    xAxis: {
      labels: {
        style: {},
      },
    },
    yAxis: {
      title: {
        style: {},
      },
      labels: {
        style: {},
      },
    },
  };
};

const defaultOptions = {
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
};

const Chart = forwardRef((props, ref) => {
  const containerRef = useRef();
  const chartRef = useRef();

  useEffect(() => {
    if (!chartRef.current) {
      Highcharts.setOptions({
        lang: {
          thousandsSep: props.thousandsSep,
          numericSymbols: props.numericSymbols,
          months: props.months,
          shortMonths: props.shortMonths,
          weekdays: props.weekdays,
        },
      });
      chartRef.current = Highcharts.chart(
        containerRef.current,
        {
          ...defaultOptions,
          ...props.options,
        },
        props.callback ? props.callback : undefined
      );
      chartRef.current.update(getStyledChart());
    } else {
      chartRef.current.update(props.options);
    }
  });

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  useImperativeHandle(
    ref,
    () => ({
      get chart() {
        return chartRef.current;
      },
      container: containerRef,
    }),
    []
  );

  return <div data-testid="chart" ref={containerRef} />;
});

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

export default withTheme(Chart);
