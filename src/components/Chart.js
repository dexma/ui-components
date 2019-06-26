import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import deepEqual from 'deep-equal';
import { withTheme } from 'styled-components';

import Highcharts from 'highcharts';
import addHeatmapModule from 'highcharts/modules/heatmap';
import addTreemapModule from 'highcharts/modules/treemap';
import boost from 'highcharts/modules/boost';

import theme from 'styles/theme';

boost(Highcharts);
addHeatmapModule(Highcharts);
addTreemapModule(Highcharts);

const propTypes = {
  options: PropTypes.objectOf(PropTypes.any),
  callback: PropTypes.func,
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
};

const getStyles = () => {
  const {
    backgroundColor,
    /*    backgroundColorActive,
    backgroundColorFocused,
    backgroundColorHover,
    backgroundColorSelected,
    border,
    borderRadius,
    component,
    fontColor,
    fontColorActive,
    fontFamily, */
    fontSize,
    /*    fontWeightBold,
    iconColor,
    iconColorActive,
    iconSize,
    padding, */
  } = theme;
  return {
    chart: {
      backgroundColor: backgroundColor,
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
      itemStyle: {
        fontSize: fontSize,
      },
    },
    xAxis: {
      labels: {
        style: {
          fontSize: fontSize,
        },
      },
    },
    yAxis: {
      title: {
        style: {},
      },
      labels: {
        style: {
          fontSize: fontSize,
        },
      },
    },
  };
};

class Chart extends PureComponent {
  constructor(props) {
    super(props);
    this.container = React.createRef();
  }

  componentDidMount() {
    const { options, callback } = this.props;
    this.chart = Highcharts.chart(
      this.container.current,
      options,
      callback || undefined
    );
    this.chart.update(getStyles());
  }

  componentDidUpdate(prevProps) {
    if (!deepEqual(this.props.options, prevProps.options)) {
      this.chart.update(this.props.options);
    }
  }

  componentWillUnmount() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  render() {
    return <div ref={this.container} />;
  }
}

Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

export default withTheme(Chart);
