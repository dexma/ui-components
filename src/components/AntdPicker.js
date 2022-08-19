/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { ConfigProvider } from 'antd';
import { omit } from 'lodash';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import * as datePickerUtils from '../utils/datePickerUtils';

import {
  DropdownDatePickerStyles,
  StyledAntdDatePicker,
  StyledAntdRangePicker,
} from '../styles/components/StyledAntdPicker';
import defaultTheme from '../styles/theme';
import {
  currentMonth,
  DATE_RANGE,
  last28Days,
  last7Days,
  lastMonth,
  previousYear,
  today,
  yearToDate,
  yesterday,
} from '../utils/dates';
import Icon from './Icon';

// Ranges
export const withDatePickerFormat = (start, end) => [start, end];
const custom = () => withDatePickerFormat(null, null);
export const datePickerRange = (range, parser = date => date) => {
  if (range === DATE_RANGE.TODAY) return today(parser);
  if (range === DATE_RANGE.YESTERDAY) return yesterday(parser);
  if (range === DATE_RANGE.LAST_7_DAYS) return last7Days(parser);
  if (range === DATE_RANGE.LAST_28_DAYS) return last28Days(parser);
  if (range === DATE_RANGE.CURRENT_MONTH) return currentMonth(parser);
  if (range === DATE_RANGE.LAST_MONTH) return lastMonth(parser);
  if (range === DATE_RANGE.YEAR_TO_DATE) return yearToDate(parser);
  if (range === DATE_RANGE.PREVIOUS_YEAR) return previousYear(parser);
  if (range === DATE_RANGE.CUSTOM) return custom();
  return null;
};
const DATEPICKER_PICKER = [null, 'week', 'month', 'year'];
const TYPE_PICKER = ['date', 'range'];
const AVAILABLE_LANGUAGES = [
  'en',
  'bg',
  'br',
  'be',
  'ca',
  'da',
  'de',
  'el',
  'es',
  'fi',
  'fr',
  'it',
  'nl',
  'pl',
  'pt',
  'sl',
  'sv',
  'tr',
  'us',
  'zh',
];

const AntdDatePicker = props => {
  const { dataId } = props;

  return (
    <StyledAntdDatePicker
      data-id={dataId}
      nextIcon={<Icon name="chevron_right_l" size={10} color="gray600" />}
      prevIcon={<Icon name="chevron_left_l" size={10} color="gray600" />}
      suffixIcon={<Icon name="calendar_blank" size={18} color="gray600" />}
      {...props}
    />
  );
};

const AntdRangePicker = props => {
  const [rangesValue, setRangesValue] = useState({});
  const { autoFocus, dataId, defaultValue, placeholder, ranges } = props; // Antd Props

  const {
    // stateDateWrapper, // Unused --> If changes to date wants to be applied, use custom onChange function or format prop
    periodOptions,
    startDatePlaceholderText,
    endDatePlaceholderText,
    // periodDefault, // Unused --> There's no select element anymore
    // periodLabel, // Unused -->  There's no select element anymore
    initialStartDate,
    initialEndDate,
    onDatesChange,
  } = props; // Legacy Props

  const antdRangePickerProps = omit(props, [
    'autoFocusEndDate',
    'startDatePlaceholderText',
    'endDatePlaceholderText',
    'periodOptions',
    'periodDefault',
    'initialStartDate',
    'initialEndDate',
    'onDatesChange',
  ]);

  // Load ranges and parse old presets to ranges
  useEffect(() => {
    if (ranges !== undefined && ranges !== null) {
      setRangesValue(ranges);
    } else if (periodOptions !== undefined && periodOptions !== null) {
      const rangesParsed = {};
      periodOptions.forEach(option => {
        const label = option.label;
        rangesParsed[label] = datePickerRange(
          option.value,
          withDatePickerFormat
        );
      });
      setRangesValue(rangesParsed);
    }
  }, [ranges, periodOptions]);

  // Populate initial date periods to defaultPeriod
  const defaultValuePeriod =
    initialStartDate || initialEndDate
      ? [initialStartDate, initialEndDate]
      : defaultValue;

  return (
    <StyledAntdRangePicker
      autoFocus={autoFocus}
      defaultValue={defaultValuePeriod}
      ranges={rangesValue}
      onChange={onDatesChange}
      placeholder={
        startDatePlaceholderText || endDatePlaceholderText
          ? [startDatePlaceholderText, endDatePlaceholderText]
          : placeholder
      }
      data-id={dataId}
      separator={<Icon name="arrow_right" size={18} color="gray600" />}
      suffixIcon={<Icon name="calendar_range" size={18} color="gray600" />}
      {...antdRangePickerProps}
    />
  );
};

const AntdPicker = props => {
  const antdPickerProps = omit(props, ['type']);
  const antdDatePickerProps = omit(antdPickerProps, [
    'language',
    'autoFocusEndDate',
    'periodOptions',
    'periodDefault',
    'initialStartDate',
    'initialEndDate',
    'onDatesChange',
  ]);
  const { theme, type, language, locale } = props;

  return (
    <>
      <ConfigProvider
        locale={
          (String(language).length === 2 &&
            datePickerUtils.getLocale(language)) ||
          locale
        }
      >
        <DropdownDatePickerStyles theme={theme} />
        {type === 'range' ||
        props.autoFocusEndDate ||
        props.periodOptions ||
        props.periodDefault ||
        props.initialStartDate ||
        props.initialEndDate ||
        props.onDatesChange ? (
          <AntdRangePicker data-testid="antd-range-picker" {...props} />
        ) : (
          <AntdDatePicker
            data-testid="antd-date-picker"
            {...antdDatePickerProps}
          />
        )}
      </ConfigProvider>
    </>
  );
};

const defaultProps = {
  type: 'date',
  theme: defaultTheme,
  dataId: 'datepicker',
};
AntdPicker.propTypes = {
  /**
   *  data-id attribute to identfy the element in DOM
   */
  dataId: PropTypes.string,
  /**
   * Format the date of the input
   */
  format: PropTypes.string,
  /**
   * Allowed pickers of AntdPicker
   */
  picker: PropTypes.oneOf(DATEPICKER_PICKER),
  /**
   * JSON object that applies styles to the component
   */
  theme: PropTypes.shape({}),
  /**
   * String to specify the language of the component
   */
  language: PropTypes.oneOf(AVAILABLE_LANGUAGES),
  /**
   * Object of type locale to specify a language from Ant Design. Full list on https://ant.design/docs/react/i18n
   */
  locale: PropTypes.shape({}),
  /**
   * Allowed types of AntdPicker
   */
  type: PropTypes.oneOf(TYPE_PICKER),
  /**
   * Legacy props from old DatePicker
   */
  /**
   * The period option default selected, we use a select so please check the <a href="https://dexma.github.io/ui-components/?path=/docs/select--select">Select section</a>
   */
  periodOptions: PropTypes.arrayOf(PropTypes.shape({})),
  /**
   * The period option default selected, we use a select so please check the <a href="https://dexma.github.io/ui-components/?path=/docs/select--select">Select section</a>
   */
  periodDefault: PropTypes.objectOf(PropTypes.string),
  /**
   * The period label we use on the select
   */
  periodLabel: PropTypes.string,
};
AntdPicker.defaultProps = defaultProps;

export default withTheme(AntdPicker);
