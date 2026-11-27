import styled, { css } from 'styled-components';

import { type Theme } from '@utils/theme';
import { gray200, gray50, gray700, gray900, primaryColor, white } from '@utils/selectors';
import { getStyledPagination } from '@styles/Pagination/StyledPagination';

/** The table's own antd class prefix, so app rules written for the old Table (`.ant-table…`) can't restyle it. */
export const tablePrefixCls = 'dexma-table';
const t = `.${tablePrefixCls}`;

// Colours, padding per size, font size and selection width are antd Table tokens set in
// TableV2.tsx. Only what the tokens can't express lives here.
const utilityColumnWidth = '40px';

/** A bare button around one icon: no browser chrome, the icon centred, the Dexma 2px focus ring. */
export const iconButton = (theme: Theme) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border: 0;
    border-radius: 2px;
    background: none;
    cursor: pointer;
    vertical-align: middle;
    &:focus-visible {
        outline: 2px solid ${primaryColor(theme)};
        outline-offset: 2px;
    }
`;

type StyledTableV2Props = {
    theme: Theme;
};
const StyledTableV2 = styled.div<StyledTableV2Props>`
    ${t}-title {
        padding: 16px 0;
    }

    ${t}-expand-icon-col {
        width: ${utilityColumnWidth};
    }
    ${t}-thead > tr > th${t}-row-expand-icon-cell,
    ${t}-tbody > tr > td${t}-row-expand-icon-cell {
        padding-inline: 8px;
    }

    .table-expand-button,
    .table-expand-all {
        ${(props) => iconButton(props.theme)};
        width: 16px;
        height: 16px;
    }
    .table-expand-button {
        svg {
            transition: transform 0.2s;
        }
        &[data-open='false'] svg {
            transform: rotate(-90deg);
        }
    }
    /* 40px utility columns (TableCell.Actions, TableCell.Favorite) keep 8px padding so their 24px button fits. */
    ${t}-cell:has(.table-cell-utility) {
        padding-inline: 8px;
        text-align: center;
    }
    .table-expand-placeholder {
        display: inline-block;
        width: 16px;
        height: 16px;
    }

    /* Expand-all (Figma 6956:46386): in the expand column header, or 8px before a tree table's first title. */
    .table-expand-all {
        margin-inline-end: 8px;
    }
    th${t}-row-expand-icon-cell .table-expand-all {
        margin-inline-end: 0;
    }

    /* A title with icons beside it: the icons centre on the text line, and an ellipsis title truncates its text, not the icons. */
    .table-header-title {
        display: inline-flex;
        align-items: center;
        max-width: 100%;
        vertical-align: top;
    }
    .table-header-title-text {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    /* Header controls (Figma 1450:29437): info 4px after the title; filter and search 8px after it, flush with the cell padding. */
    .table-header-info {
        ${(props) => iconButton(props.theme)};
        margin-inline-start: 4px;
    }
    ${t}-wrapper ${t}-filter-trigger {
        margin-inline: 4px -4px;
        padding: 0 4px;
        /* A tab stop now (TableV2 sets tabindex 0): the same focus ring as the other header controls. */
        &:focus-visible {
            outline: 2px solid ${(props) => primaryColor(props.theme)};
            outline-offset: -2px;
        }
    }

    /* Filter bar (Figma 6375:30553): the summary, then chips 8px apart, inside the card above the table. */
    .table-filter-bar {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px 16px;
        padding: 8px 12px;
    }
    .table-filter-summary {
        color: ${(props) => gray900(props.theme)};
        font-size: 14px;
        line-height: 22px;
    }
    .table-filter-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        min-width: 0;
        max-width: 100%;
    }
    .table-filter-chip {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        height: 20px;
        padding: 2px 4px 2px 8px;
        border-radius: 10px;
        background: ${(props) => gray50(props.theme)};
        color: ${(props) => gray700(props.theme)};
        font-size: 12px;
        line-height: 16px;
        max-width: 100%;
        white-space: nowrap;
        /* One line: a long chip ends in an ellipsis (its title has the whole text), never wraps out of its 20px. */
        .table-filter-chip-text {
            min-width: 0;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        button {
            ${(props) => iconButton(props.theme)};
            border-radius: 50%;
            &:focus-visible {
                outline-offset: 1px;
            }
        }
    }

    .expanded-first-column {
        position: relative;
        padding-left: 50px !important;
    }
    tr${t}-expanded-row td:first-child:not(.expanded-first-column) {
        padding: 0 !important;
    }

    .table-card {
        padding: 4px;
        background: ${(props) => white(props.theme)};
        border: 1px solid ${(props) => gray200(props.theme)};
        border-radius: 8px;
    }
    /* Without a footer the card border closes the table, so the last row shown needs no divider: the last row, or the
       one the table marks while the last detail row is closed (a closed detail row stays in the DOM, hidden). */
    .table-card > ${t}-wrapper:last-child ${t}-tbody > tr:last-child > td,
    .table-card > ${t}-wrapper:last-child ${t}-tbody > tr.table-row-last-shown > td {
        border-bottom: 0;
    }
    /* A table inside an expanded row already sits in the parent card. */
    ${t}-expanded-row .table-card {
        padding: 0;
        border: 0;
        border-radius: 0;
    }

    ${(props) => getStyledPagination(props.theme)};

    /* Footer: total on the left, pages centred, page-size select on the right. */
    .table-footer {
        padding: 8px;
        .ant-pagination {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            min-height: 32px;
        }
        .ant-pagination-total-text {
            position: absolute;
            left: 0;
            color: ${(props) => gray900(props.theme)};
            font-size: 14px;
            line-height: 22px;
            height: auto;
        }
        .ant-pagination-item {
            border-radius: 6px;
        }
        .ant-pagination-item-active {
            font-weight: 600;
        }
        .ant-pagination-options {
            position: absolute;
            right: 0;
            margin: 0;
        }
    }
`;

/** The search filter dropdown (Figma 6219:11466, lower half): the input, then confirm and reset side by side. */
const StyledSearchDropdown = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 248px;
    padding: 8px;
    .table-search-actions {
        display: flex;
        gap: 8px;
        > .ant-btn {
            flex: 1;
        }
    }
`;

/**
 * The table's popup layer, placed where the app keeps its popups (else body). antd renders filter dropdowns in a
 * portal, out of reach of StyledTableV2, and tokens can't set their width or footer (Figma 6219:11632: 248px, 40px rows, 50/50 footer).
 */
const StyledTablePopups = styled.div`
    .ant-dropdown ${t}-filter-dropdown {
        min-width: 248px;
    }
    ${t}-filter-dropdown .ant-dropdown-menu-item {
        padding-block: 9px;
    }
    ${t}-filter-dropdown ${t}-filter-dropdown-btns > .ant-btn {
        flex: 1;
    }
    /* The only tooltips here are sort tooltips; while an info icon is hovered its own tooltip replaces them. */
    &.table-popups-info-hover .ant-tooltip {
        display: none;
    }
`;

export { StyledTableV2, StyledSearchDropdown, StyledTablePopups };
