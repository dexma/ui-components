import {
  chart,
  getBackgroundSerie,
  getChart,
  getCheckpointSeries,
  getComparisonText,
  getDifferenceElement,
  getPercentageComparisonValue,
  getPercentageElement,
  getRangeSeries,
  getSymbolElement,
  getValueSeries,
  getYAxis,
  valueAsPercentage,
} from '../../src/components/Gauge';
import theme from '../../src/styles/theme';
import {
  mockSingleCheckpointSeries,
  mockPropsGauge,
  mockRangeSeries,
  mockExpectedRangeSeries,
  mockExpectedAxisY,
  expectedBackgroundSerie,
  mockExpectedValueSerie,
  mockExpectedSingleCheckpointSeries,
  mockExpectedIncreasePercentage,
  mockExpectedChart,
  mockExpectedIncreaseValue,
} from '../mock/Gauge';

describe('<Gauge>', () => {
  describe('Ancillary functions', () => {
    describe('valueAsPercentage', () => {
      it('should return the value between the 0 and 100', () => {
        // Given
        const expectedResult = 40;
        // When
        const resultingPercentage = valueAsPercentage(40, 100, 0);
        // Then
        expect(resultingPercentage).toBe(expectedResult);
      });
    });
    describe('getValueSeries', () => {
      it('should return a range serie related to the value represented on the gauge', () => {
        // Given
        const givenProps = mockPropsGauge;
        const expectedValueSerie = mockExpectedValueSerie;
        // When
        const resultingSerie = getValueSeries(
          givenProps.indicator,
          givenProps.max,
          givenProps.min,
          null,
          false
        );
        // Then
        expect(resultingSerie).toStrictEqual(expectedValueSerie);
      });
    });
    describe('getBackgroundSerie', () => {
      it('should return a range serie, based on the backgroundColor of theme, that defines the whole shadow of the main arc on the gauge', () => {
        // Given
        const expectedSerie = expectedBackgroundSerie;
        const backgroundColor = theme.backgroundColor;
        const maxValue = 100;
        // When
        const resultingSerie = getBackgroundSerie(backgroundColor, maxValue);
        // Then
        expect(resultingSerie).toStrictEqual(expectedSerie);
      });
    });
    describe('getRangeSeries', () => {
      it('should return a sorted array of range series on ascendant order by "to" field', () => {
        // Given
        const givenRangeSeries = mockRangeSeries;
        const expectedRangeSeries = mockExpectedRangeSeries;
        // When
        const resultingRangeSeries = getRangeSeries(givenRangeSeries);
        // Then
        expect(resultingRangeSeries).toStrictEqual(expectedRangeSeries);
      });
    });
    describe('getCheckpointSeries', () => {
      it('should return an array of range series that represent the checkpoints on axis Y', () => {
        // Given
        const givenProps = mockPropsGauge;
        const givenCheckpoint = mockSingleCheckpointSeries;
        const expectedCheckpointSerie = mockExpectedSingleCheckpointSeries;
        // When
        const resultingSerie = getCheckpointSeries(
          givenCheckpoint,
          givenProps.max,
          null,
          givenProps.units
        );
        // Then
        expect(...resultingSerie).toStrictEqual(expectedCheckpointSerie);
      });
    });
    describe('getYAxis', () => {
      it('should return a axisY object that defines the Axis Y on the gauge for the labels', () => {
        // Given
        const givenProps = mockPropsGauge;
        const expectedAxis = mockExpectedAxisY;
        // When
        const resultingAxis = getYAxis(false, givenProps.min, givenProps.max);
        // Then
        expect(resultingAxis).toStrictEqual(expectedAxis);
      });
    });
    describe('getChart', () => {
      it('should return a chart object that defines the chart properties on the gauge', () => {
        // Given
        const givenProps = mockPropsGauge;
        const renderFunction = expect.any(Function);
        const expectedChart = mockExpectedChart({ render: renderFunction });
        const initialChart = chart;
        // When
        const resultingChart = getChart(
          initialChart,
          givenProps.value,
          givenProps.decimalSeparator,
          givenProps.thousandSeparator,
          givenProps.color,
          false,
          givenProps.units,
          { enabled: false }
        );
        // Then
        expect(resultingChart).toMatchObject(expectedChart);
      });
    });
    describe('getPercentageComparisonValue', () => {
      it('should return the value, in percentage, if it were an increase or decrease of the value against the previous one', () => {
        // Given
        const expectedResult = 100;
        // When
        const resultingPercentage = getPercentageComparisonValue(40, 80);
        // Then
        expect(resultingPercentage).toBe(expectedResult);
      });
    });
    describe('getSymbolElement', () => {
      it('should return "-" by default', () => {
        // Given
        const givenDifference = NaN;
        const expectedValue = '-';
        // When
        const resultingValue = getSymbolElement(givenDifference);
        // Then
        expect(resultingValue).toBe(expectedValue);
      });
      it('should return "↑" when difference is positive', () => {
        // Given
        const givenDifference = 1;
        const expectedValue = '↑';
        // When
        const resultingValue = getSymbolElement(givenDifference);
        // Then
        expect(resultingValue).toBe(expectedValue);
      });
      it('should return "↓" when difference is negative', () => {
        // Given
        const givenDifference = -1;
        const expectedValue = '↓';
        // When
        const resultingValue = getSymbolElement(givenDifference);
        // Then
        expect(resultingValue).toBe(expectedValue);
      });
    });
    describe('getPercentageElement', () => {
      it('should return the HTML element with the arrow and the increase/decrease value', () => {
        // Given
        const expectedElement = mockExpectedIncreasePercentage;
        // When
        const resultingPercentage = getPercentageElement(
          {
            enabled: true,
            value: 40,
            color: '#00CC88',
            period: {
              from: null,
              to: null,
              type: 'TEXT',
              text: 'Compared to last seven days',
            },
          },
          80
        );
        // Then
        expect(resultingPercentage).toBe(expectedElement);
      });
    });
    describe('getDifferenceElement', () => {
      it('should return the HTML element with the arrow, the increase/decrease value and units', () => {
        // Given
        const expectedElement = mockExpectedIncreaseValue;
        // When
        const resultingPercentage = getDifferenceElement(
          {
            enabled: true,
            value: 40,
            color: '#00CC88',
            period: {
              from: null,
              to: null,
              type: 'TEXT',
              text: 'Compared to last seven days',
            },
          },
          80,
          'kWh'
        );
        // Then
        expect(resultingPercentage).toBe(expectedElement);
      });
    });
    describe('getComparisonText', () => {
      it('should return empty if comparison is disabled', () => {
        // Given
        const expectedElement =
          '<span style="color: #7e8084;">Compared to last seven days</span>';
        // When
        const resultingElement = getComparisonText(
          {
            enabled: true,
            value: 40,
            color: '#00CC88',
            period: {
              from: null,
              to: null,
              type: 'TEXT',
              text: 'Compared to last seven days',
            },
          },
          80
        );
        // Then
        expect(resultingElement).toBe(expectedElement);
      });
    });
  });
});
