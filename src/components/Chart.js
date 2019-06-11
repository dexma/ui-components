import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';

const propTypes = {
  options: PropTypes.objectOf(PropTypes.any),
  callback: PropTypes.func,
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

export default Chart;
