import moment from 'moment';

const ISO_FORMAT = 'DD/MM/YY';
const NUMBER_OF_MONTHS = 3;
const START_DATE = 'startDate';
const END_DATE = 'endDate';
const DAY_SIZE = 25;

const day = (number = 0) => {
  const date = new Date();
  date.setDate(date.getDate() - number);
  return moment(date, ISO_FORMAT);
};

const today = parser => {
  const dayNumber = 0;
  return parser(day(dayNumber).startOf('day'), day(dayNumber).endOf('day'));
};

const yesterday = parser => {
  const dayNumber = 1;
  return parser(day(dayNumber).startOf('day'), day(dayNumber).endOf('day'));
};

const last7Days = parser => {
  const dayStartNumber = 6;
  const dayEndNumber = 0;
  return parser(
    day(dayStartNumber).startOf('day'),
    day(dayEndNumber).endOf('day')
  );
};

const last28Days = parser => {
  const dayStartNumber = 27;
  const dayEndNumber = 0;
  return parser(
    day(dayStartNumber).startOf('day'),
    day(dayEndNumber).endOf('day')
  );
};

const currentMonth = parser => {
  const startDay = day(0).startOf('day');
  const endDay = day(0).endOf('day');
  const startOfMonth = startDay.startOf('month');
  return parser(startOfMonth, endDay);
};

const lastMonth = parser => {
  const startDay = day(1).startOf('day');
  const endDay = day(1).endOf('day');
  const startOfMonth = startDay.subtract(1, 'months').startOf('month');
  const endOfMonth = endDay.subtract(1, 'months').endOf('month');
  return parser(startOfMonth, endOfMonth);
};

const yearToDate = parser => {
  const startDay = day().startOf('day');
  const endDay = day(0).endOf('day');
  const startOfMonth = startDay.startOf('year');
  return parser(startOfMonth, endDay);
};

const previousYear = parser => {
  const startDay = day().startOf('day');
  const endDay = day().endOf('day');
  startDay.startOf('year');
  endDay.endOf('year');
  const startOfLastYear = startDay.subtract(1, 'year');
  const endOfLastYear = endDay.subtract(1, 'year');
  return parser(startOfLastYear, endOfLastYear);
};

const DATE_RANGE = Object.freeze({
  CUSTOM: 'custom',
  TODAY: 'today',
  YESTERDAY: 'yesterday',
  LAST_7_DAYS: 'last_7_days',
  LAST_28_DAYS: 'last_28_days',
  CURRENT_MONTH: 'current_month',
  LAST_MONTH: 'last_month',
  YEAR_TO_DATE: 'year_to_date',
  PREVIOUS_YEAR: 'previous_year',
});

export {
  ISO_FORMAT,
  NUMBER_OF_MONTHS,
  START_DATE,
  END_DATE,
  DAY_SIZE,
  DATE_RANGE,
  day,
  today,
  yesterday,
  last7Days,
  last28Days,
  currentMonth,
  lastMonth,
  yearToDate,
  previousYear,
};
