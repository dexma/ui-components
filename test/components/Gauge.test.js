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
  indicatorLengthIsBiggerThanItsScientificNotationLength,
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
  mockInvertedValueLessThanMinPropsGauge,
  mockInvertedValueMoreThanMaxPropsGauge,
  mockValueBiggerThanMaxPropsGauge,
  mockParsedMaxValueSerie,
  mockValueLessThanMinPropsGauge,
  mockParsedMinValueSerie,
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
      it('should return a range serie related with a value y equals to min of gauge, as its original value is outside the min max range', () => {
        // Given
        const givenProps = mockValueLessThanMinPropsGauge;
        const expectedValueSerie = mockParsedMinValueSerie;
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
      it('should return a range serie related with a value y equals to max of gauge, as its original value is outside the min max range', () => {
        // Given
        const givenProps = mockValueBiggerThanMaxPropsGauge;
        const expectedValueSerie = mockParsedMaxValueSerie;
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
      it('should return an empty serie due to the value and threshold is outside the min max range', () => {
        // Given
        const givenProps1 = mockInvertedValueLessThanMinPropsGauge;
        const givenProps2 = mockInvertedValueMoreThanMaxPropsGauge;
        const expectedValueSerie = {};
        // When
        const resultingSerie1 = getValueSeries(
          givenProps1.indicator,
          givenProps1.max,
          givenProps1.min,
          null,
          false
        );
        const resultingSerie2 = getValueSeries(
          givenProps2.indicator,
          givenProps2.max,
          givenProps2.min,
          null,
          false
        );
        // Then
        expect(resultingSerie1).toStrictEqual(expectedValueSerie);
        expect(resultingSerie2).toStrictEqual(expectedValueSerie);
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
      it('should return an empty array of range series as the ranges are outside the min max range', () => {
        // Given
        const givenRangeSeries = mockRangeSeries;
        // When
        const resultingRangeSeries = getRangeSeries(
          givenRangeSeries,
          -100,
          -40
        );
        // Then
        expect(resultingRangeSeries).toStrictEqual([]);
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
      it('should return an empty array range series as the checkpoints are outside the min max range', () => {
        // Given
        const givenProps = mockInvertedValueMoreThanMaxPropsGauge;
        const givenCheckpoint = mockSingleCheckpointSeries;
        // When
        const resultingSerie = getCheckpointSeries(
          givenCheckpoint,
          givenProps.max,
          givenProps.min,
          givenProps.units
        );
        // Then
        expect(resultingSerie).toStrictEqual([]);
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
    describe('indicatorLengthIsBiggerThanItsScientificNotationLength', () => {
      it('should return true when the indicator length is bigger than its equivalent scientific expression', () => {
        expect(
          indicatorLengthIsBiggerThanItsScientificNotationLength(12, 23445.32)
        ).toBeTruthy();
      });
      it('should return false when the indicator length is smaller than its equivalent scientific expression', () => {
        expect(
          indicatorLengthIsBiggerThanItsScientificNotationLength(4, 23445.32)
        ).toBeFalsy();
      });
    });
  });
});
