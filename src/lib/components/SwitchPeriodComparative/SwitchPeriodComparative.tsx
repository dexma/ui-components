import { useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import { uniqueId } from 'lodash';
import dayjs, { type Dayjs } from 'dayjs';
import defaultTheme from '@utils/theme';
import { ISO_FORMAT } from '@utils/dates';
import { RadioFieldGroup, type FieldGroupItem } from '@components';
import { StyledSwitchPeriodComparative } from '@styles/SwitchPeriodComparative/StyledSwitchPeriodComparative';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

const getRangeDaysBetweenTwoDates = (startDate: string, endDate: string) => {
    const start = dayjs(new Date(startDate)).startOf('day');
    const end = dayjs(new Date(endDate)).startOf('day');
    return dayjs.duration(end.diff(start)).asDays();
};

const getDayBefore = (date: string, days: number) => dayjs(new Date(date)).subtract(days, 'd');
const getYearBefore = (date: string, years: number) => dayjs(new Date(date)).subtract(years, 'y');

export const getPreviousDate = (startDate: string, endDate: string): [string, string] => {
    const rangeDaysBetweenTwoDates = getRangeDaysBetweenTwoDates(startDate, endDate);
    const end = getDayBefore(startDate, 1).endOf('day');
    const start = getDayBefore(end.toString(), rangeDaysBetweenTwoDates).startOf('day');
    return [start.format(ISO_FORMAT), end.format(ISO_FORMAT)];
};

export const getSamePeriodLastYear = (startDate: string, endDate: string): [string, string] => {
    const start = dayjs(new Date(startDate)).startOf('day').toString();
    const end = dayjs(new Date(endDate)).startOf('day').toString();
    const startYearBefore = getYearBefore(start, 1);
    const endYearBefore = getYearBefore(end, 1);
    return [startYearBefore.format(ISO_FORMAT), endYearBefore.format(ISO_FORMAT)];
};

export enum SelectedPeriodType {
    PREVIOUS_PERIOD = 'previous_period',
    LAST_PERIOD = 'last_period',
}

type SwitchPeriodComparativeProps = {
    selectedPeriod: SelectedPeriodType;
    startDate: string;
    endDate: string;
    previousPeriodText?: string;
    samePeriodLastYearText?: string;
    disabled?: boolean;
    onPeriodSelect?: ({ period, date }: { period: string; date: { startDate: Dayjs; endDate: Dayjs } }) => void;
};

export const SwitchPeriodComparative = ({
    selectedPeriod = SelectedPeriodType.PREVIOUS_PERIOD,
    startDate,
    endDate,
    previousPeriodText,
    samePeriodLastYearText,
    disabled,
    onPeriodSelect,
    ...props
}: SwitchPeriodComparativeProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    const [currentPeriod, setCurrentPeriod] = useState(selectedPeriod.toString());
    const formatDate = (start: string, end: string): { startDate: Dayjs; endDate: Dayjs } => {
        const newStartDate = dayjs(start, ISO_FORMAT).startOf('day');
        const newEndDate = dayjs(end, ISO_FORMAT).endOf('day');
        return {
            startDate: newStartDate,
            endDate: newEndDate,
        };
    };

    const renderPeriodComparativeItem = (text: string | undefined, date: string, id: string) => (
        <div className='compare-period-item' data-testid={`compare-period-${id}`}>
            <div className='title' data-testid={`compare-period-${id}-title`}>
                {text}
            </div>
            <div className='dates' data-testid={`compare-period-${id}-dates`}>
                {date}
            </div>
        </div>
    );

    const [previousStartDate, previousEndDate] = getPreviousDate(startDate, endDate);
    const [lastYearStartDate, lastYearEndDate] = getSamePeriodLastYear(startDate, endDate);

    const getActivePeriod = (value: string) =>
        value === SelectedPeriodType.PREVIOUS_PERIOD ? formatDate(previousStartDate, previousEndDate) : formatDate(lastYearStartDate, lastYearEndDate);

    const onPeriodChange = (value: FieldGroupItem) => {
        setCurrentPeriod(value.value);
        if (onPeriodSelect) onPeriodSelect({ period: value.value, date: getActivePeriod(value.value) });
    };
    const previousPeriod = `${previousStartDate} - ${previousEndDate}`;
    const samePeriodLastYear = `${lastYearStartDate} - ${lastYearEndDate}`;

    const prevId = uniqueId();
    const lastId = uniqueId();

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            var oppositePeriod = values.find(v => v.value !== currentPeriod);
            if (oppositePeriod) {
                setCurrentPeriod(oppositePeriod.value);
                if (onPeriodSelect) onPeriodSelect({ period: oppositePeriod.value, date: getActivePeriod(oppositePeriod.value) });
            }
        }
    };

    const values = [
        {
            value: 'previous_period',
            label: renderPeriodComparativeItem(previousPeriodText, previousPeriod, 'previous-period'),
            id: prevId,
            name: prevId,
            isDisabled: disabled
        },
        {
            value: 'last_period',
            label: renderPeriodComparativeItem(samePeriodLastYearText, samePeriodLastYear, 'last-period'),
            id: lastId,
            name: lastId,
            isDisabled: disabled
        },
    ];

    return (
        <StyledSwitchPeriodComparative data-testid='switch-period-comparative' {...props} theme={th}>
            <div className='compare-period'>
                <div className='compare-period-container'>
                    <RadioFieldGroup
                        values={values}
                        selectedValues={selectedPeriod}
                        onChange={(item) => {
                            onPeriodChange(item);
                        }}
                        onKeyDown={handleKeyDown}
                        aria-disabled={values[0].isDisabled}
                    />
                </div>
            </div>
        </StyledSwitchPeriodComparative>
    );
};
