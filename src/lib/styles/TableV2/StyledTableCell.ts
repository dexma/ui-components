import styled from 'styled-components';

import { type Theme } from '@utils/theme';
import { iconButton } from './StyledTableV2';

type StyledTableCellProps = {
    theme: Theme;
};

// One wrapper for every TableCell, styled per cell class. No cell sets a height: row height comes from the
// table's cell padding, so each cell works at all three sizes (Figma 6290:23430).
const StyledTableCell = styled.span<StyledTableCellProps>`
    min-width: 0;

    &.table-cell-text {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .table-cell-leading {
        display: inline-flex;
        flex-shrink: 0;
    }
    .table-cell-lines {
        display: flex;
        flex-direction: column;
        min-width: 0;
    }
    .table-cell-lines > *,
    .table-cell-numeric-line {
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .table-cell-second-line {
        color: ${(props) => props.theme.color.gray500};
        font-size: 12px;
        line-height: 16px;
    }

    &.table-cell-tags {
        display: inline-flex;
        flex-wrap: wrap;
        gap: 4px;
        vertical-align: middle;
    }
    /* 20px tall like Figma's tag: 2px 8px including the 1px border. */
    .table-cell-tag {
        display: inline-flex;
        padding: 1px 7px;
        border: 1px solid ${(props) => props.theme.color.gray200};
        border-radius: 4px;
        background: ${(props) => props.theme.color.gray50};
        color: ${(props) => props.theme.color.gray700};
        font-size: 12px;
        line-height: 16px;
    }

    &.table-cell-numeric {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        text-align: right;
    }
    .table-cell-numeric-line {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }
    .table-cell-comparison {
        display: inline-flex;
        align-items: center;
        gap: 4px;
    }

    &.table-cell-badge {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        vertical-align: middle;
    }

    /* M&V (Figma 6292:26322): two rows, each a 105px bar on a baseline, then its label. */
    &.table-cell-mv {
        display: flex;
        flex-direction: column;
        gap: 8px;
        /* Figma gives the 36px block 9px vertical padding in a 54px row, so it takes no more room than a text line. */
        margin-block: -7px;
    }
    .table-cell-mv-row {
        display: flex;
        align-items: center;
        gap: 8px;
    }
    .table-cell-mv-track {
        position: relative;
        flex-shrink: 0;
        width: 105px;
        height: 8px;
        border-bottom: 1px solid ${(props) => props.theme.color.gray300};
    }
    .table-cell-mv-fill {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 8px;
        background: ${(props) => props.theme.color.gray300};
    }
    .table-cell-mv-fill[data-tone='positive'] {
        background: ${(props) => props.theme.color.successLight};
    }
    .table-cell-mv-target {
        position: absolute;
        top: -3px;
        bottom: -3px;
        width: 1px;
        background: ${(props) => props.theme.color.gray900};
    }
    .table-cell-mv-label {
        min-width: 105px;
        color: ${(props) => props.theme.color.gray600};
        font-size: 12px;
        line-height: 14px;
        text-align: right;
        white-space: nowrap;
        strong,
        b {
            color: ${(props) => props.theme.color.gray900};
            font-weight: 600;
        }
    }

    /* Feedback (Figma 6297:38290): 20px tall; colours per status and variant are set by the component. */
    &.table-cell-feedback {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 1px 7px;
        border: 1px solid;
        border-radius: 4px;
        font-size: 12px;
        line-height: 16px;
        white-space: nowrap;
        vertical-align: middle;
    }

    /* A link button as tall as a text line. */
    &.table-cell-action > button {
        height: auto;
        padding: 0;
        border: 0;
        line-height: 22px;
        vertical-align: top;
    }

    /* Utility cells (Actions, Favorite): a 24px button with a 16px icon, centred in a 40px column. */
    &.table-cell-utility {
        display: inline-flex;
        justify-content: center;
        margin-block: -1px;
        vertical-align: top;
    }
    &.table-cell-actions .dropdown-button {
        width: 24px;
        height: 24px;
        line-height: 24px;
        padding: 0;
        svg {
            width: 16px;
            height: 16px;
        }
    }
    &.table-cell-favorite button {
        ${(props) => iconButton(props.theme)};
        width: 24px;
        height: 24px;
    }

    &.table-cell-code {
        display: inline-block;
        font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
        line-height: 22px;
        vertical-align: top;
    }
`;

export { StyledTableCell };
