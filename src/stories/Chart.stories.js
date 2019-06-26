import React, { PureComponent } from 'react';
import { storiesOf } from '@storybook/react';

import Chart from 'components/Chart';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';
import Button from 'components/Button';

const options = {
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
  .add('with text', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic cards with text:" line />
      </Cell>
      <Cell size="auto" medium={12}>
        <ViewChart options={options} />
      </Cell>
    </Grid>
  ));
