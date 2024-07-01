import { DateRange } from '@utils/dates';

export const mockPeriodOptions = [
    { value: 'custom', label: 'Custom' },
    { value: DateRange.TODAY, label: 'Today' },
    { value: DateRange.YESTERDAY, label: 'Yesterday' },
    { value: DateRange.LAST_7_DAYS, label: 'Last 7 days' },
    { value: DateRange.LAST_28_DAYS, label: 'Last 28 days' },
    { value: DateRange.CURRENT_MONTH, label: 'Current month' },
    { value: DateRange.LAST_MONTH, label: 'Last month' },
    { value: DateRange.YEAR_TO_DATE, label: 'Year to date' },
    { value: DateRange.PREVIOUS_YEAR, label: 'Previous year' },
];
