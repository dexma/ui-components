import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';
import { v4 as uuidv4 } from 'uuid';

import { ISO_FORMAT } from '../utils/dates';
import { StyledSwitchPeriodComparative } from '../styles/components/StyledSwitchPeriodComparative';
import FieldGroup from './FieldGroup';
import theme from '../styles/theme';

const getRangeDaysBetweenTwoDates = (startDate, endDate) => {
  const start = moment(new Date(startDate)).startOf('day');
  const end = moment(new Date(endDate)).startOf('day');
  const duration = moment.duration(end.diff(start));
  return duration.asDays();
};

const getDayBefore = (date, days) => moment(new Date(date)).subtract(days, 'd');
const getYearBefore = (date, years) =>
  moment(new Date(date)).subtract(years, 'y');

export const getPreviousDate = (startDate, endDate) => {
  if (!startDate || !endDate) return null;
  const rangeDaysBetweenTwoDates = getRangeDaysBetweenTwoDates(
    startDate,
    endDate
  );
  const end = getDayBefore(startDate, 1).endOf('day');
  const start = getDayBefore(end, rangeDaysBetweenTwoDates).startOf('day');
  return [start.format(ISO_FORMAT), end.format(ISO_FORMAT)];
};

export const getSamePeriodLastYear = (startDate, endDate) => {
  if (!startDate || !endDate) return null;
  const start = moment(new Date(startDate)).startOf('day');
  const end = moment(new Date(endDate)).startOf('day');
  const startYearBefore = getYearBefore(start, 1);
  const endYearBefore = getYearBefore(end, 1);
  return [startYearBefore.format(ISO_FORMAT), endYearBefore.format(ISO_FORMAT)];
};

const propTypes = {
  /**
   * Set if previous or last period is selected
   */
  selectedPeriod: PropTypes.oneOf(['previous_period', 'last_period'])
    .isRequired,
  /**
   * Set start date
   */
  startDate: PropTypes.string,
  /**
   * Set end date
   */
  endDate: PropTypes.string,
  /**
   * Set text previous
   */
  previousPeriodText: PropTypes.string,
  /**
   * Set text same period
   */
  samePeriodLastYearText: PropTypes.string,
  /**
   * Call this function after a period is selected
   */
  onPeriodSelect: PropTypes.func,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  selectedPeriod: 'previous_period',
  theme: theme,
};

export const SwitchPeriodComparative = props => {
  const {
    selectedPeriod,
    startDate,
    endDate,
    previousPeriodText,
    samePeriodLastYearText,
    onPeriodSelect,
  } = props;
  const switchPeriodComparativeProps = omit(props, [
    'selectedPeriod',
    'startDate',
    'endDate',
    'previousPeriodText',
    'samePeriodLastYearText',
    'onPeriodSelect',
  ]);
  const formatDate = (start, end) => {
    const newStartDate = moment(start, ISO_FORMAT).startOf('day');
    const newEndDate = moment(end, ISO_FORMAT).endOf('day');
    return {
      startDate: newStartDate,
      endDate: newEndDate,
    };
  };

  const renderPeriodComparativeItem = (text, date, id) => {
    return (
      <div className="compare-period-item" data-testid={`compare-period-${id}`}>
        <div className="title" data-testid={`compare-period-${id}-title`}>
          {text}
        </div>
        <div className="dates" data-testid={`compare-period-${id}-dates`}>
          {date}
        </div>
      </div>
    );
  };

  const [previousStartDate, previousEndDate] = getPreviousDate(
    startDate,
    endDate
  );
  const [lastYearStartDate, lastYearEndDate] = getSamePeriodLastYear(
    startDate,
    endDate
  );

  const getActivePeriod = value => {
    return value === 'previous_period'
      ? formatDate(previousStartDate, previousEndDate)
      : formatDate(lastYearStartDate, lastYearEndDate);
  };

  const onPeriodChange = value => {
    onPeriodSelect &&
      onPeriodSelect({ period: value, date: getActivePeriod(value) });
  };
  const previousPeriod = `${previousStartDate} - ${previousEndDate}`;
  const samePeriodLastYear = `${lastYearStartDate} - ${lastYearEndDate}`;

  const prevId = uuidv4();
  const lastId = uuidv4();

  return (
    <StyledSwitchPeriodComparative
      data-testid="switch-period-comparative"
      {...switchPeriodComparativeProps}
    >
      <div className="compare-period">
        <div className="compare-period-container">
          <FieldGroup
            values={[
              {
                value: 'previous_period',
                label: renderPeriodComparativeItem(
                  previousPeriodText,
                  previousPeriod,
                  'previous-period'
                ),
                id: prevId,
                name: prevId,
              },
              {
                value: 'last_period',
                label: renderPeriodComparativeItem(
                  samePeriodLastYearText,
                  samePeriodLastYear,
                  'last-period'
                ),
                id: lastId,
                name: lastId,
              },
            ]}
            selectedValues={selectedPeriod}
            type="radio"
            onChange={item => onPeriodChange(item.value)}
          />
        </div>
      </div>
    </StyledSwitchPeriodComparative>
  );
};

StyledSwitchPeriodComparative.displayName = 'StyledSwitchPeriodComparative';

SwitchPeriodComparative.propTypes = propTypes;
SwitchPeriodComparative.defaultProps = defaultProps;

export default withTheme(SwitchPeriodComparative);
