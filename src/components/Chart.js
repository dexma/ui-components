import React, {
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

import Highcharts from 'highcharts';
import addSankeyModule from 'highcharts/modules/sankey';
import addExportingModule from 'highcharts/modules/exporting';
import addOfflineExportingModule from 'highcharts/modules/offline-exporting';
import addExportData from 'highcharts/modules/export-data';
import boost from 'highcharts/modules/boost';

import theme from '../styles/theme';
import { StyledResult } from '../styles/components/StyledResult';

boost(Highcharts);
addSankeyModule(Highcharts);
addExportingModule(Highcharts);
addOfflineExportingModule(Highcharts);
addExportData(Highcharts);

const propTypes = {
  /**
   * The default decimal point used in the Highcharts.numberFormat method unless otherwise specified in the function arguments.
   */
  decimalPoint: PropTypes.string,
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
  /**
   * State to show/hide loading
   */
  isLoading: PropTypes.bool,
  /**
   * State to show/hide error
   */
  showError: PropTypes.bool,
  /**
   * The content of the error normally will be a Result component
   */
  errorContent: PropTypes.node,
};

const defaultProps = {
  decimalPoint: '.',
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
  showError: false,
  isLoading: false,
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

const StyledChartLoading = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  height: 400px;
  align-items: center;
  justify-content: center;
`;

const ChartLoading = () => (
  <StyledChartLoading data-testid="chart-loading">
    <svg
      width="210"
      height="210"
      preserveAspectRatio="none"
      viewBox="0 0 210 210"
    >
      <rect
        width="100%"
        height="100%"
        fill='url("#fill")'
        clipPath="url(#clip-path)"
      ></rect>
      <defs>
        <clipPath id="clip-path">
          <rect width="1" height="1" x="156" y="89" rx="0" ry="0"></rect>
          <rect width="9" height="27" x="62" y="103" rx="0" ry="0"></rect>
          <rect width="9" height="72" x="89" y="60" rx="0" ry="0"></rect>
          <rect width="9" height="43" x="115" y="87" rx="0" ry="0"></rect>
          <rect width="9" height="60" x="140" y="71" rx="0" ry="0"></rect>
          <rect width="140" height="9" x="35" y="153" rx="0" ry="0"></rect>
          <rect width="184" height="9" x="14" y="30" rx="0" ry="0"></rect>
          <rect width="9" height="154" x="190" y="30" rx="0" ry="0"></rect>
          <rect width="184" height="9" x="14" y="174" rx="0" ry="0"></rect>
          <rect width="9" height="154" x="14" y="30" rx="0" ry="0"></rect>
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.6" stopColor="#f3f3f3">
            <animate
              attributeName="offset"
              dur="2s"
              keyTimes="0; 0.25; 1"
              repeatCount="indefinite"
              values="-2; -2; 1"
            ></animate>
          </stop>
          <stop offset="1.6" stopColor="#ecebeb">
            <animate
              attributeName="offset"
              dur="2s"
              keyTimes="0; 0.25; 1"
              repeatCount="indefinite"
              values="-1; -1; 2"
            ></animate>
          </stop>
          <stop offset="2.6" stopColor="#f3f3f3">
            <animate
              attributeName="offset"
              dur="2s"
              keyTimes="0; 0.25; 1"
              repeatCount="indefinite"
              values="0; 0; 3"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  </StyledChartLoading>
);

const StyledChartError = styled.div`
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

const ChartError = props => (
  <StyledChartError data-testid="chart-error" {...props} />
);

const StyledChart = styled.div`
  .chart {
    display: ${props => (!props.$loading && !props.$error ? 'block' : 'none')};
  }
`;

const Chart = forwardRef((props, ref) => {
  const {
    decimalPoint,
    thousandsSep,
    numericSymbols,
    months,
    shortMonths,
    weekdays,
    options,
    callback,
    isLoading,
    showError,
    errorContent,
  } = props;
  const containerRef = useRef();
  const chartRef = useRef();
  useEffect(() => {
    if (!chartRef.current) {
      Highcharts.setOptions({
        lang: {
          decimalPoint,
          thousandsSep,
          numericSymbols,
          months,
          shortMonths,
          weekdays,
        },
      });
      chartRef.current = Highcharts.chart(
        containerRef.current,
        {
          ...defaultOptions,
          ...options,
        },
        callback || undefined
      );
      chartRef.current.update(getStyledChart());
    } else {
      chartRef.current.update(options);
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

  const loading = isLoading && !showError;
  const error = !isLoading && showError && errorContent;

  return (
    <StyledChart $loading={loading} $error={error}>
      {loading && <ChartLoading />}
      {error && <ChartError>{errorContent}</ChartError>}
      <div className="chart" data-testid="chart" ref={containerRef} />
    </StyledChart>
  );
});

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

export default withTheme(Chart);
