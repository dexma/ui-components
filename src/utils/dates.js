import moment from 'moment';

const ISO_FORMAT = 'DD/MM/YYYY';

const day = (number = 1) => {
  const date = new Date();
  date.setDate(date.getDate() - number);
  return moment(date, ISO_FORMAT);
};

const today = (parser) => {
  const dayNumber = 0;
  return parser(day(dayNumber), null);
};

const yesterday = (parser) => {
  const dayNumber = 1;
  return parser(day(dayNumber), day(dayNumber));
};

const last7Days = (parser) => {
  const dayStartNumber = 7;
  const dayEndNumber = 0;
  return parser(day(dayStartNumber), day(dayEndNumber));
};

const last30Days = (parser) => {
  const dayStartNumber = 30;
  const dayEndNumber = 0;
  return parser(day(dayStartNumber), day(dayEndNumber));
};

const currentMonth = (parser) => {
  const startDay = day();
  const endDay = day(0);
  const startOfMonth = startDay.startOf('month');
  return parser(startOfMonth, endDay);
};

const lastMonth = (parser) => {
  const startDay = day();
  const endDay = day();
  const startOfMonth = startDay.subtract(1,'months').startOf('month');
  const endOfMonth = endDay.subtract(1,'months').endOf('month');
  return parser(startOfMonth, endOfMonth);
};

const yearToDate = (parser) => {
  const startDay = day();
  const endDay = day(0);
  const startOfMonth = startDay.startOf('year');
  return parser(startOfMonth, endDay);
};

const previousYear = (parser) => {
  const startDay = day();
  const endDay = day();
  startDay.startOf('year');
  endDay.endOf('year');
  const startOfLastYear = startDay.subtract(1,'year');
  const endOfLastYear = endDay.subtract(1,'year');
  return parser(startOfLastYear, endOfLastYear);
};


export {
  ISO_FORMAT,
  day,
  today,
  yesterday,
  last7Days,
  last30Days,
  currentMonth,
  lastMonth,
  yearToDate,
  previousYear
};
