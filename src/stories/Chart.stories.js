import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';

import Chart from 'components/Chart';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Button from 'components/Button';

const configChart = {
  boost: {
    useGPUTranslations: true,
  },
  title: {
    text: 'My stock chart',
  },
  xAxis: {
    type: 'datetime',
  },
  series: [
    {
      name: 'series0',
      data: (function() {
        const arr = [];
        for (let i = 0; i < 20000; i++) {
          arr.push(Math.random() * 100);
        }
        return arr;
      })(),
      color: 'red',
    },
    {
      name: 'series1',
      data: (function() {
        const arr = [];
        for (let i = 0; i < 20000; i++) {
          arr.push(Math.random() * 100);
        }
        return arr;
      })(),
      color: 'blue',
    },
  ],
};

const configSankey = {
  title: {
    text: 'Highcharts Sankey Diagram',
  },
  series: [
    {
      keys: ['from', 'to', 'weight'],
      data: [
        ['grid', 'microGrid', 4017.5625],
        ['generation', 'microGrid', 8035.125],
        ['storage', 'microGrid', 8035.125],
        ['microGrid', 'load', 4017.5625],
        ['microGrid', 'storage', 8035.125],
      ],
      type: 'sankey',
      name: 'Sankey demo series',
    },
  ],
};

class ViewChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      typeActive: 'line',
    };
  }

  changeButtonActive = type => {
    this.setState({
      typeActive: type,
    });
  };

  getOptions = () => {
    const newType = this.state.typeActive;
    const newTypeChart = Object.assign({}, this.props.options.chart, {
      type: newType,
    });
    const newOptions = Object.assign({}, this.props.options, {
      chart: newTypeChart,
    });
    return newOptions;
  };

  render() {
    const newOptions = this.getOptions();
    return (
      <div>
        <Cell size="full">
          <Button
            text="Line"
            onClick={() => this.changeButtonActive('line')}
          ></Button>
          <Button
            text="Column"
            onClick={() => this.changeButtonActive('column')}
          ></Button>
          <Chart options={newOptions} />
        </Cell>
      </div>
    );
  }
}

storiesOf('Chart', module)
  .addParameters({
    jest: ['Chart'],
  })
  .add('basic', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full"></Cell>
      <Cell size="auto" medium={12}>
        <ViewChart options={configChart} />
      </Cell>
    </Grid>
  ))
  .add('sankey', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full"></Cell>
      <Cell size="auto" medium={12}>
        <Chart options={configSankey} />
      </Cell>
    </Grid>
  ));
