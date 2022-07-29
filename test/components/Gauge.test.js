import {
  getBackgroundSerie,
  getCheckpointSeries,
  getComparisonText,
  getFontSizeDataLabel,
  getPercentageElement,
  getPercentageValue,
  getRangeSeries,
  getValueSeries,
  getYAxis,
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
} from '../mock/Gauge';

describe('<Gauge>', () => {
  describe('Ancilliary functions', () => {
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
    describe('getFontSizeDataLabel', () => {
      it('should return a string pixel value (ex: "10px") according to the number of characters of a string value', () => {
        // Given
        const expectedValues = [
          '30px',
          '48px',
          '60px',
          '72px',
          '80px',
          '100px',
        ];
        const initialValues = [100000.5, -999999, 650000, 30000, 1000, 0];
        // When
        const resultingValues = initialValues.map(value =>
          getFontSizeDataLabel(value)
        );
        // Then
        expect(resultingValues).toStrictEqual(expectedValues);
      });
    });
    describe('getYAxis', () => {
      it('should return a axisY object that defines the Axis Y on the gauge for the labels', () => {
        // Given
        const givenProps = mockPropsGauge;
        const expectedAxis = mockExpectedAxisY;
        // When
        const resultingAxis = getYAxis(givenProps.min, givenProps.max, theme);
        // Then
        expect(resultingAxis).toStrictEqual(expectedAxis);
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
    describe('getValueSeries', () => {
      it('should return a range serie related to the value represented on the gauge', () => {
        // Given
        const givenProps = mockPropsGauge;
        const expectedValueSerie = mockExpectedValueSerie;
        // When
        const resultingSerie = getValueSeries(
          givenProps.value,
          givenProps.color,
          givenProps.max,
          null,
          null,
          givenProps.units,
          null
        );
        // Then
        expect(resultingSerie).toStrictEqual(expectedValueSerie);
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
    describe('getPercentageValue', () => {
      it('should return the value, in percentage, if it were an increase or decrease of the value against the previous one', () => {
        // Given
        const expectedResult = 100;
        // When
        const resultingPercentage = getPercentageValue(40, 80);
        // Then
        expect(resultingPercentage).toBe(expectedResult);
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
    describe('getComparisonText', () => {
      it('should return empty if comparison is disabled', () => {
        // Given
        const expectedElement = '';
        // When
        const resultingElement = getComparisonText(
          {
            enabled: false,
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
      it('should return HTML code if comparison is enabled', () => {
        // Given
        const expectedElement = `<div class="comparison-info"><span style="position:relative; color: #00CC88;"><svg width="16" height="16" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" data-testid="icon" style="position:inherit;left:0px;top:4px" class="StyledIcon-gkgbl duckRk"><path d="M4 12L5.41 13.41L11 7.83V20H13V7.83L18.58 13.42L20 12L12 4L4 12Z" opacity="[object Object]" clip-rule="[object Object]" fill-rule="[object Object]"></path></svg>100%</span>&nbsp;<span style="color: #7E8084;">Compared to last seven days</span></div>`;
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
