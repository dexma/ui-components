import { Dayjs } from 'dayjs';
export declare const getPreviousDate: (startDate: string, endDate: string) => [string, string];
export declare const getSamePeriodLastYear: (startDate: string, endDate: string) => [string, string];
export declare enum SelectedPeriodType {
    PREVIOUS_PERIOD = "previous_period",
    LAST_PERIOD = "last_period"
}
type SwitchPeriodComparativeProps = {
    selectedPeriod: SelectedPeriodType;
    startDate: string;
    endDate: string;
    previousPeriodText?: string;
    samePeriodLastYearText?: string;
    disabled?: boolean;
    onPeriodSelect?: ({ period, date }: {
        period: string;
        date: {
            startDate: Dayjs;
            endDate: Dayjs;
        };
    }) => void;
};
export declare const SwitchPeriodComparative: ({ selectedPeriod, startDate, endDate, previousPeriodText, samePeriodLastYearText, disabled, onPeriodSelect, ...props }: SwitchPeriodComparativeProps) => import("react/jsx-runtime").JSX.Element;
export {};
