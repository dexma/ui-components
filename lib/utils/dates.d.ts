import { default as moment, Moment } from 'moment';
declare const ISO_FORMAT = "DD/MM/YY";
declare const NUMBER_OF_MONTHS = 3;
declare const START_DATE = "startDate";
declare const END_DATE = "endDate";
declare const DAY_SIZE = 25;
export type Parser = (start: Moment, end: Moment) => string;
declare const day: (number?: number) => moment.Moment;
declare const today: (parser: Parser) => string;
declare const yesterday: (parser: Parser) => string;
declare const last7Days: (parser: Parser) => string;
declare const last28Days: (parser: Parser) => string;
declare const currentMonth: (parser: Parser) => string;
declare const lastMonth: (parser: Parser) => string;
declare const yearToDate: (parser: Parser) => string;
declare const previousYear: (parser: Parser) => string;
declare enum DateRange {
    CUSTOM = "custom",
    TODAY = "today",
    YESTERDAY = "yesterday",
    LAST_7_DAYS = "last_7_days",
    LAST_28_DAYS = "last_28_days",
    CURRENT_MONTH = "current_month",
    LAST_MONTH = "last_month",
    YEAR_TO_DATE = "year_to_date",
    PREVIOUS_YEAR = "previous_year"
}
export { ISO_FORMAT, NUMBER_OF_MONTHS, START_DATE, END_DATE, DAY_SIZE, DateRange, day, today, yesterday, last7Days, last28Days, currentMonth, lastMonth, yearToDate, previousYear };
