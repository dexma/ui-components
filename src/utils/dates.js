import moment from 'moment';

const ISO_FORMAT = 'DD/MM/YYYY';

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

export {
  ISO_FORMAT,
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
