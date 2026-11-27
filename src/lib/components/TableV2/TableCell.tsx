import { Children, useContext, type MouseEvent, type ReactNode } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme, { type Theme } from '@utils/theme';
import { Button, Dropdown, Icon, type DropdownContent } from '@components';
import { StyledTableCell } from '@styles/TableV2/StyledTableCell';

const useCellTheme = (): Theme => useContext(ThemeContext) || defaultTheme;
const clampPercent = (value: number) => Math.min(100, Math.max(0, value));
// Interactive cells keep their clicks (menu items included, which bubble through React) from the row's onClick.
const keepClickInCell = (event: MouseEvent) => event.stopPropagation();

type TextProps = { children: ReactNode; secondLine?: ReactNode; leading?: ReactNode };

/** Text with an optional second line, after an optional 24px icon, 40px avatar or star. Truncates with its column. */
const TextCell = ({ children, secondLine, leading }: TextProps) => (
    <StyledTableCell theme={useCellTheme()} className='table-cell-text'>
        {leading && <span className='table-cell-leading'>{leading}</span>}
        <span className='table-cell-lines'>
            <span>{children}</span>
            {secondLine && <span className='table-cell-second-line'>{secondLine}</span>}
        </span>
    </StyledTableCell>
);

/** Small grey tags. */
const TagsCell = ({ tags }: { tags: ReactNode[] }) => (
    <StyledTableCell theme={useCellTheme()} className='table-cell-tags'>
        {Children.toArray(tags.map((tag) => <span className='table-cell-tag'>{tag}</span>))}
    </StyledTableCell>
);

type Comparison = { value: ReactNode; direction?: 'up' | 'down'; tone: 'good' | 'bad' | 'neutral' };
type NumericProps = { value: ReactNode; comparison?: Comparison; secondLine?: ReactNode };

/** A right-aligned number, with an optional comparison. The column sets `align: 'right'` so its header lines up. */
const NumericCell = ({ value, comparison, secondLine }: NumericProps) => {
    const th = useCellTheme();
    const toneColor = { bad: th.color.errorDefault, good: th.color.successDefault, neutral: th.color.gray900 };
    return (
        <StyledTableCell theme={th} className='table-cell-numeric'>
            <span className='table-cell-numeric-line'>
                {value}
                {comparison && (
                    <span className='table-cell-comparison' style={{ color: toneColor[comparison.tone] }}>
                        {comparison.direction && <Icon name={`arrow_${comparison.direction}`} size={12} color={toneColor[comparison.tone]} ariaLabel='' aria-hidden />}
                        {comparison.value}
                    </span>
                )}
            </span>
            {secondLine && <span className='table-cell-second-line'>{secondLine}</span>}
        </StyledTableCell>
    );
};

/** An 8px status dot. `color` is a theme colour name or any CSS colour. */
const BadgeCell = ({ color, ariaLabel }: { color: string; ariaLabel: string }) => {
    const th = useCellTheme();
    return <StyledTableCell theme={th} className='table-cell-badge' role='img' aria-label={ariaLabel} style={{ background: th.color[color as keyof Theme['color']] ?? color }} />;
};

type MVRow = {
    /** Where the bar ends, 0–100. */
    percent: number;
    /** Where the target marker sits, 0–100. */
    target?: number;
    tone: 'neutral' | 'positive';
    /** The whole line of text. Format the value yourself and wrap it in <strong>, e.g. <><strong>618</strong> / 7 30 days</>. */
    label: ReactNode;
};

const MVBar = ({ percent, target, tone, label }: MVRow) => (
    <span className='table-cell-mv-row'>
        <span className='table-cell-mv-track' aria-hidden>
            <span className='table-cell-mv-fill' data-tone={tone} style={{ width: `${clampPercent(percent)}%` }} />
            {target !== undefined && <span className='table-cell-mv-target' style={{ left: `${clampPercent(target)}%` }} />}
        </span>
        <span className='table-cell-mv-label'>{label}</span>
    </span>
);

/** Measurement & verification: two bars with labels. */
const MVCell = ({ rows: [first, second] }: { rows: [MVRow, MVRow] }) => (
    <StyledTableCell theme={useCellTheme()} className='table-cell-mv'>
        <MVBar {...first} />
        <MVBar {...second} />
    </StyledTableCell>
);

type FeedbackStatus = 'success' | 'warning' | 'error' | 'info';
const feedbackIcons: Record<FeedbackStatus, string> = { success: 'circle_check_outline', warning: 'warning_outline', error: 'error_outline', info: 'circle_info_outline' };

type FeedbackProps = { status: FeedbackStatus; variant?: 'border' | 'solid'; children: ReactNode };

/** A status label: tinted with a border, or solid. */
const FeedbackCell = ({ status, variant = 'border', children }: FeedbackProps) => {
    const th = useCellTheme();
    const { color } = th;
    const tones = {
        success: { tint: color.successLighter, border: color.successLight, strong: color.successDefault },
        warning: { tint: color.warningLight, border: color.warningDefault, strong: color.warningDark },
        error: { tint: color.errorLighter, border: color.errorLight, strong: color.errorDefault },
        info: { tint: color.infoLighter, border: color.infoDefault, strong: color.infoDark },
    }[status];
    const solid = variant === 'solid';
    return (
        <StyledTableCell
            theme={th}
            className='table-cell-feedback'
            data-status={status}
            data-variant={variant}
            style={{ background: solid ? tones.strong : tones.tint, borderColor: solid ? tones.strong : tones.border, color: solid ? color.white : color.gray900 }}
        >
            <Icon name={feedbackIcons[status]} size={16} color={solid ? color.white : tones.strong} ariaLabel='' aria-hidden />
            {children}
        </StyledTableCell>
    );
};

/** A check for true and a cross for false. The labels are the accessible names. */
const BooleanCell = ({ value, trueLabel, falseLabel }: { value: boolean; trueLabel: string; falseLabel: string }) => {
    const th = useCellTheme();
    return <Icon name={value ? 'circle_check_outline' : 'close'} size={16} color={value ? th.primary : 'gray500'} ariaLabel={value ? trueLabel : falseLabel} role='img' />;
};

/** Monospace text, such as ids. */
const CodeCell = ({ children }: { children: ReactNode }) => (
    <StyledTableCell theme={useCellTheme()} as='code' className='table-cell-code'>
        {children}
    </StyledTableCell>
);

/** A link-style action. */
const ActionCell = ({ children, onClick }: { children: string; onClick: () => void }) => (
    <StyledTableCell theme={useCellTheme()} className='table-cell-action' onClick={keepClickInCell}>
        <Button variant='link' text={children} onClick={onClick} />
    </StyledTableCell>
);

/** A 16px more_vert button that opens a menu of actions; each item runs its own onClick. The column sets `width: 40`. */
const ActionsCell = ({ items, ariaLabel }: { items: DropdownContent[]; ariaLabel: string }) => (
    <StyledTableCell theme={useCellTheme()} className='table-cell-utility table-cell-actions' onClick={keepClickInCell}>
        <Dropdown icon='more_vert' iconAriaLabel={ariaLabel} content={items} trigger={['click']} onItemSelected={() => undefined} />
    </StyledTableCell>
);

type FavoriteProps = { isFavorite: boolean; onChange: (next: boolean) => void; ariaLabel: string };

/** A star toggle (Figma 6368:22762). The column sets `width: 40`. */
const FavoriteCell = ({ isFavorite, onChange, ariaLabel }: FavoriteProps) => {
    const th = useCellTheme();
    return (
        <StyledTableCell theme={th} className='table-cell-utility table-cell-favorite' onClick={keepClickInCell}>
            <button type='button' aria-pressed={isFavorite} aria-label={ariaLabel} onClick={() => onChange(!isFavorite)}>
                <Icon name={isFavorite ? 'star_filled' : 'star_outline'} size={16} color={isFavorite ? th.primary : 'gray400'} ariaLabel='' aria-hidden />
            </button>
        </StyledTableCell>
    );
};

/** Cell contents for the Dexma table, used inside a column's `render`. */
export const TableCell = {
    Text: TextCell,
    Tags: TagsCell,
    Numeric: NumericCell,
    Badge: BadgeCell,
    MV: MVCell,
    Feedback: FeedbackCell,
    Boolean: BooleanCell,
    Code: CodeCell,
    Action: ActionCell,
    Actions: ActionsCell,
    Favorite: FavoriteCell,
};
