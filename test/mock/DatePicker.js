import { DATE_RANGE } from '../../src';

export const mockPeriodOptions = [
  { value: 'custom', label: 'Custom' },
  { value: DATE_RANGE.TODAY, label: 'Today' },
  { value: DATE_RANGE.YESTERDAY, label: 'Yesterday' },
  { value: DATE_RANGE.LAST_7_DAYS, label: 'Last 7 days' },
  { value: DATE_RANGE.LAST_28_DAYS, label: 'Last 28 days' },
  { value: DATE_RANGE.CURRENT_MONTH, label: 'Current month' },
  { value: DATE_RANGE.LAST_MONTH, label: 'Last month' },
  { value: DATE_RANGE.YEAR_TO_DATE, label: 'Year to date' },
  { value: DATE_RANGE.PREVIOUS_YEAR, label: 'Previous year' },
];