"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.previousYear = exports.yearToDate = exports.lastMonth = exports.currentMonth = exports.last28Days = exports.last7Days = exports.yesterday = exports.today = exports.day = exports.DATE_RANGE = exports.DAY_SIZE = exports.END_DATE = exports.START_DATE = exports.NUMBER_OF_MONTHS = exports.ISO_FORMAT = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ISO_FORMAT = 'DD/MM/YY';
exports.ISO_FORMAT = ISO_FORMAT;
var NUMBER_OF_MONTHS = 3;
exports.NUMBER_OF_MONTHS = NUMBER_OF_MONTHS;
var START_DATE = 'startDate';
exports.START_DATE = START_DATE;
var END_DATE = 'endDate';
exports.END_DATE = END_DATE;
var DAY_SIZE = 25;
exports.DAY_SIZE = DAY_SIZE;

var day = function day() {
  var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var date = new Date();
  date.setDate(date.getDate() - number);
  return (0, _moment["default"])(date, ISO_FORMAT);
};

exports.day = day;

var today = function today(parser) {
  var dayNumber = 0;
  return parser(day(dayNumber).startOf('day'), day(dayNumber).endOf('day'));
};

exports.today = today;

var yesterday = function yesterday(parser) {
  var dayNumber = 1;
  return parser(day(dayNumber).startOf('day'), day(dayNumber).endOf('day'));
};

exports.yesterday = yesterday;

var last7Days = function last7Days(parser) {
  var dayStartNumber = 6;
  var dayEndNumber = 0;
  return parser(day(dayStartNumber).startOf('day'), day(dayEndNumber).endOf('day'));
};

exports.last7Days = last7Days;

var last28Days = function last28Days(parser) {
  var dayStartNumber = 27;
  var dayEndNumber = 0;
  return parser(day(dayStartNumber).startOf('day'), day(dayEndNumber).endOf('day'));
};

exports.last28Days = last28Days;

var currentMonth = function currentMonth(parser) {
  var startDay = day(0).startOf('day');
  var endDay = day(0).endOf('day');
  var startOfMonth = startDay.startOf('month');
  return parser(startOfMonth, endDay);
};

exports.currentMonth = currentMonth;

var lastMonth = function lastMonth(parser) {
  var startDay = day(1).startOf('day');
  var endDay = day(1).endOf('day');
  var startOfMonth = startDay.subtract(1, 'months').startOf('month');
  var endOfMonth = endDay.subtract(1, 'months').endOf('month');
  return parser(startOfMonth, endOfMonth);
};

exports.lastMonth = lastMonth;

var yearToDate = function yearToDate(parser) {
  var startDay = day().startOf('day');
  var endDay = day(0).endOf('day');
  var startOfMonth = startDay.startOf('year');
  return parser(startOfMonth, endDay);
};

exports.yearToDate = yearToDate;

var previousYear = function previousYear(parser) {
  var startDay = day().startOf('day');
  var endDay = day().endOf('day');
  startDay.startOf('year');
  endDay.endOf('year');
  var startOfLastYear = startDay.subtract(1, 'year');
  var endOfLastYear = endDay.subtract(1, 'year');
  return parser(startOfLastYear, endOfLastYear);
};

exports.previousYear = previousYear;
var DATE_RANGE = Object.freeze({
  CUSTOM: 'custom',
  TODAY: 'today',
  YESTERDAY: 'yesterday',
  LAST_7_DAYS: 'last_7_days',
  LAST_28_DAYS: 'last_28_days',
  CURRENT_MONTH: 'current_month',
  LAST_MONTH: 'last_month',
  YEAR_TO_DATE: 'year_to_date',
  PREVIOUS_YEAR: 'previous_year'
});
exports.DATE_RANGE = DATE_RANGE;