import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Cell from 'components/Cell';
import FieldGroup from 'components/FieldGroup';
import Grid from 'components/Grid';
import Icon from 'components/Icon';
import { ISO_FORMAT } from 'utils/dates';

import { StyledSwitchPeriodComparative } from 'styles/components/StyledSwitchPeriodComparative';

const getRangeDaysBetweenTwoDates = (startDate, endDate) => {
  const start = moment(new Date(startDate)).startOf('day');
  const end = moment(new Date(endDate)).startOf('day');
  const duration = moment.duration(end.diff(start));
  return duration.asDays();
};

const getDayBefore = (date, days) => moment(new Date(date)).subtract(days, 'd');
const getYearBefore = (date, years) =>
  moment(new Date(date)).subtract(years, 'y');

const propTypes = {
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  previousPriodText: PropTypes.string,
  samePriodLastYearText: PropTypes.string,
  onPeriodSelect: PropTypes.func,
};

class SwitchPeriodComparative extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePeriod: 'previous_period', // todo enum
    };
    this.activePeriodDates = [];
  }

  componentDidMount() {
    this.callOnPeriodSelect();
  }

  previousDate = (startDate, endDate) => {
    if (!startDate || !endDate) return null;
    const rangeDaysBetweenTwoDates = getRangeDaysBetweenTwoDates(
      startDate,
      endDate
    );
    const end = getDayBefore(startDate, 1).endOf('day');
    const start = getDayBefore(end, rangeDaysBetweenTwoDates).startOf('day');
    return [start.format(ISO_FORMAT), end.format(ISO_FORMAT)];
  };

  samePeriodLastYear = (startDate, endDate) => {
    if (!startDate || !endDate) return null;
    const start = moment(new Date(startDate)).startOf('day');
    const end = moment(new Date(endDate)).startOf('day');
    const startYearBefore = getYearBefore(start, 1);
    const endYearBefore = getYearBefore(end, 1);
    return [
      startYearBefore.format(ISO_FORMAT),
      endYearBefore.format(ISO_FORMAT),
    ];
  };

  changePeriod = value => {
    this.setState(
      {
        activePeriod: value,
      },
      () => this.callOnPeriodSelect()
    );
  };

  callOnPeriodSelect = () => {
    const { onPeriodSelect } = this.props;
    return onPeriodSelect && onPeriodSelect(this.activePeriodDates);
  };

  formatDate = (start, end) => {
    const startDate = moment(start, ISO_FORMAT);
    const endDate = moment(end, ISO_FORMAT);
    return {
      startDate,
      endDate,
    };
  };

  renderPeriodComparativeItem = (text, date) => {
    return (
      <Grid type="vertical" className="compare-period-item">
        <Cell size="full" className="title">
          {text}
        </Cell>
        <Cell size="full" className="dates">
          {date}
        </Cell>
      </Grid>
    );
  };

  render() {
    const { activePeriod } = this.state;
    const {
      startDate,
      endDate,
      previousPriodText,
      samePriodLastYearText,
    } = this.props;
    const [previousStartDate, previousEndDate] = this.previousDate(
      startDate,
      endDate
    );
    const [lastYearStartDate, lastYearEndDate] = this.samePeriodLastYear(
      startDate,
      endDate
    );
    this.activePeriodDates =
      activePeriod === 'previous_period'
        ? this.formatDate(previousStartDate, previousEndDate)
        : this.formatDate(lastYearStartDate, lastYearEndDate);
    const previousPriod = `${previousStartDate} - ${previousEndDate}`;
    const samePriodLastYear = `${lastYearStartDate} - ${lastYearEndDate}`;
    return (
      <StyledSwitchPeriodComparative>
        <div className="compare-period">
          <span className="calendar-icon">
            <Icon name="calendar_range" size="medium" />
          </span>
          <div className="compare-period">
            <FieldGroup
              values={[
                {
                  value: 'previous_period',
                  label: this.renderPeriodComparativeItem(
                    previousPriodText,
                    previousPriod
                  ),
                  id: 'previous_period',
                  name: 'previous_period',
                },
                {
                  value: 'last_period',
                  label: this.renderPeriodComparativeItem(
                    samePriodLastYearText,
                    samePriodLastYear
                  ),
                  id: 'last_period',
                  name: 'last_period',
                },
              ]}
              selectedValues={activePeriod}
              type="radio"
              onChange={item => this.changePeriod(item.value)}
            />
          </div>
        </div>
      </StyledSwitchPeriodComparative>
    );
  }
}

StyledSwitchPeriodComparative.displayName = 'StyledSwitchPeriodComparative';

SwitchPeriodComparative.propTypes = propTypes;

export default SwitchPeriodComparative;
