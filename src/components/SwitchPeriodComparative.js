import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import { ISO_FORMAT } from 'utils/dates';
import FieldGroup from 'components/FieldGroup';

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
  ...GeneralPropTypes,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  previousPriodText: PropTypes.string,
  samePriodLastYearText: PropTypes.string,
  onPeriodSelect: PropTypes.func,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
};

export class SwitchPeriodComparative extends PureComponent {
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
    const startDate = moment(start, ISO_FORMAT).startOf('day');
    const endDate = moment(end, ISO_FORMAT).endOf('day');
    return {
      startDate,
      endDate,
    };
  };

  renderPeriodComparativeItem = (text, date) => {
    return (
      <div className="compare-period-item">
        <div className="title">{text}</div>
        <div className="dates">{date}</div>
      </div>
    );
  };

  render() {
    const { activePeriod } = this.state;
    const {
      startDate,
      endDate,
      previousPriodText,
      samePriodLastYearText,
      theme,
    } = this.props;
    const [previousStartDate, previousEndDate] = this.previousDate(
      startDate,
      endDate
    );
    const [lastYearStartDate, lastYearEndDate] = this.samePeriodLastYear(
      startDate,
      endDate
    );

    console.log('startDate', startDate);
    console.log('endDate', endDate);

    this.activePeriodDates =
      activePeriod === 'previous_period'
        ? this.formatDate(previousStartDate, previousEndDate)
        : this.formatDate(lastYearStartDate, lastYearEndDate);
    const previousPriod = `${previousStartDate} - ${previousEndDate}`;
    const samePriodLastYear = `${lastYearStartDate} - ${lastYearEndDate}`;
    return (
      <StyledSwitchPeriodComparative theme={theme}>
        <div className="compare-period">
          <div className="compare-period-container">
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
SwitchPeriodComparative.defaultProps = defaultProps;

export default SwitchPeriodComparative;
