import styled from 'styled-components';
import {
  border,
  borderRadius,
  backgroundColor,
  backgroundColorActive,
  backgroundColorSelected,
  fontSize,
  fontColor,
  fontColorActive,
  fontWeightBold,
  componentHeight,
} from 'styles/selectors';

import { getStyledPagination } from 'styles/components/StyledPagination';

const StyledTable = styled.div`
  .ant-table {
    color: ${fontColor};
  }
  .ant-table-body {
    -webkit-transition: opacity 0.3s;
    transition: opacity 0.3s;
  }
  .ant-table-empty .ant-table-body {
    overflow: auto !important;
  }
  .ant-table table {
    width: 100%;
    text-align: left;
    border-radius: ${borderRadius} ${borderRadius} 0px 0px;
    border-collapse: collapse;
  }
  .ant-table-thead > tr,
  .ant-table-thead > tr > th,
  .ant-table-thead > tr > th.ant-table-column-sort,
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover,
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover
    .anticon-filter,
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters:hover
    .ant-table-filter-icon {
    background: ${backgroundColorActive};
  }

  .ant-table-thead > tr > th {
    color: ${fontColorActive};
    font-weight: ${fontWeightBold};
    text-align: center;
    background: ${backgroundColorActive};
    border-bottom: ${border};
    transition: background 0.3s ease;
  }
  .ant-table-thead > tr > th[colspan] {
    text-align: center;
  }
  .ant-table-thead > tr > th .anticon-filter,
  .ant-table-thead > tr > th .ant-table-filter-icon {
    position: absolute;
    top: 0;
    right: 0;
    width: ${componentHeight};
    height: 100%;
    color: #bfbfbf;
    font-size: ${fontSize};
    text-align: center;
    cursor: pointer;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .ant-table-thead > tr > th .anticon-filter > svg,
  .ant-table-thead > tr > th .ant-table-filter-icon > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -5px;
    margin-left: -6px;
  }
  .ant-table-thead > tr > th .ant-table-filter-selected.anticon-filter {
    color: ${backgroundColorActive};
  }
  .ant-table-thead > tr > th .ant-table-column-sorter {
    display: table-cell;
    vertical-align: middle;
  }
  .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner {
    height: 1em;
    margin-top: 0.35em;
    margin-left: 0.57142857em;
    color: #bfbfbf;
    line-height: 1em;
    text-align: center;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-up,
  .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-down {
    display: inline-block;
    font-size: ${fontSize};
    font-size: 11px \\9;
    -webkit-transform: scale(0.91666667) rotate(0deg);
    -ms-transform: scale(0.91666667) rotate(0deg);
    transform: scale(0.91666667) rotate(0deg);
    display: block;
    height: 1em;
    line-height: 1em;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  :root
    .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-up,
  :root
    .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-down {
    font-size: ${fontSize};
  }
  .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-up.on,
  .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner
    .ant-table-column-sorter-down.on {
    color: ${fontColorActive};
  }
  .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner-full {
    margin-top: -0.15em;
  }
  .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner-full
    .ant-table-column-sorter-up,
  .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner-full
    .ant-table-column-sorter-down {
    height: 0.5em;
    line-height: 0.5em;
  }
  .ant-table-thead
    > tr
    > th
    .ant-table-column-sorter
    .ant-table-column-sorter-inner-full
    .ant-table-column-sorter-down {
    margin-top: 0.125em;
  }
  .ant-table-thead > tr > th.ant-table-column-has-actions {
    position: relative;
    background-clip: padding-box;
  }
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters {
    padding-right: 30px !important;
  }
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters
    .anticon-filter.ant-table-filter-open,
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters
    .ant-table-filter-icon.ant-table-filter-open {
    color: rgba(0, 0, 0, 0.45);
    background: ${backgroundColorSelected};
  }
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters:hover
    .anticon-filter:hover,
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters:hover
    .ant-table-filter-icon:hover {
    color: rgba(0, 0, 0, 0.45);
    background: ${backgroundColorSelected};
  }
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters:hover
    .anticon-filter:active,
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-filters:hover
    .ant-table-filter-icon:active {
    color: rgba(0, 0, 0, 0.65);
  }
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters {
    cursor: pointer;
  }

  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters:active
    .ant-table-column-sorter-up:not(.on),
  .ant-table-thead
    > tr
    > th.ant-table-column-has-actions.ant-table-column-has-sorters:active
    .ant-table-column-sorter-down:not(.on) {
    color: rgba(0, 0, 0, 0.45);
  }
  .ant-table-thead > tr > th .ant-table-header-column {
    display: inline-block;
    vertical-align: top;
  }
  .ant-table-thead
    > tr
    > th
    .ant-table-header-column
    .ant-table-column-sorters {
    display: table;
  }
  .ant-table-thead
    > tr
    > th
    .ant-table-header-column
    .ant-table-column-sorters
    > .ant-table-column-title {
    display: table-cell;
    vertical-align: middle;
  }
  .ant-table-thead
    > tr
    > th
    .ant-table-header-column
    .ant-table-column-sorters
    > *:not(.ant-table-column-sorter) {
    position: relative;
  }
  .ant-table-thead
    > tr
    > th
    .ant-table-header-column
    .ant-table-column-sorters::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    content: '';
  }
  .ant-table-thead
    > tr
    > th
    .ant-table-header-column
    .ant-table-column-sorters:hover::before {
    background: rgba(0, 0, 0, 0.04);
  }
  .ant-table-thead > tr > th.ant-table-column-has-sorters {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .ant-table-thead > tr:first-child {
    border-radius: 0px 0px 0px ${borderRadius};
    background: ${backgroundColorActive};
  }
  .ant-table-thead > tr:first-child > th:first-child {
    border-top-left-radius: ${borderRadius};
  }
  .ant-table-thead > tr:first-child > th:last-child {
    border-top-right-radius: ${borderRadius};
  }
  .ant-table-thead > tr:not(:last-child) > th[colspan] {
    border-bottom: 0;
  }
  .ant-table-tbody > tr > td {
    text-align: center;
  }
  .ant-table-thead > tr,
  .ant-table-tbody > tr {
    -webkit-transition: all 0.3s, height 0s;
    transition: all 0.3s, height 0s;
  }
  .ant-table-thead > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr.ant-table-row-hover:not(.ant-table-expanded-row) > td,
  .ant-table-thead > tr:hover:not(.ant-table-expanded-row) > td,
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background: ${backgroundColorSelected};
  }
  .ant-table-footer {
    position: relative;
    padding: 16px 16px;
    background: #fafafa;
    border-top: ${border};
    border-radius: 0 0 ${borderRadius} ${borderRadius};
  }
  .ant-table-footer::before {
    position: absolute;
    top: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background: #fafafa;
    content: '';
  }
  .ant-table.ant-table-bordered .ant-table-footer {
    border: ${border};
  }
  .ant-table-title {
    position: relative;
    top: 1px;
    padding: 16px 0;
    border-radius: ${borderRadius} ${borderRadius} 0 0;
  }
  .ant-table.ant-table-bordered .ant-table-title {
    padding-right: 16px;
    padding-left: 16px;
    border: ${border};
  }
  .ant-table-title + .ant-table-content {
    position: relative;
    overflow: hidden;
    border-radius: ${borderRadius} ${borderRadius} 0 0;
  }
  .ant-table-bordered .ant-table-title + .ant-table-content,
  .ant-table-bordered .ant-table-title + .ant-table-content table,
  .ant-table-bordered
    .ant-table-title
    + .ant-table-content
    .ant-table-thead
    > tr:first-child
    > th {
    border-radius: 0;
  }
  .ant-table-without-column-header .ant-table-title + .ant-table-content,
  .ant-table-without-column-header table {
    border-radius: 0;
  }
  .ant-table-without-column-header.ant-table-bordered.ant-table-empty
    .ant-table-placeholder {
    border-top: ${border};
    border-radius: ${borderRadius};
  }
  .ant-table-tbody > tr.ant-table-row-selected td {
    color: inherit;
    background: #fafafa;
  }
  .ant-table-tbody > tr > td.ant-table-column-sort {
    background: ${backgroundColor};
  }
  .ant-table-thead > tr > th,
  .ant-table-tbody > tr > td {
    padding: 6px 8px;
  }
  .ant-table-expand-icon-th,
  .ant-table-row-expand-icon-cell {
    width: 50px;
    min-width: 50px;
    text-align: center;
  }
  .ant-table-header {
    overflow: hidden;
    background: ${backgroundColorActive};
  }
  .ant-table-header table {
    border-radius: ${borderRadius} ${borderRadius} 0px 0px;
  }
  .ant-table-loading {
    position: relative;
  }
  .ant-table-loading .ant-table-body {
    background: #fff;
    opacity: 0.5;
  }
  .ant-table-loading .ant-table-spin-holder {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 20px;
    margin-left: -30px;
    line-height: 20px;
  }
  .ant-table-loading .ant-table-with-pagination {
    margin-top: -20px;
  }
  .ant-table-loading .ant-table-without-pagination {
    margin-top: 10px;
  }
  .ant-table-bordered .ant-table-header > table,
  .ant-table-bordered .ant-table-body > table,
  .ant-table-bordered .ant-table-fixed-left table,
  .ant-table-bordered .ant-table-fixed-right table {
    border: ${border};
    border-right: 0;
    border-bottom: 0;
  }
  .ant-table-bordered.ant-table-empty .ant-table-placeholder {
    border-right: ${border};
    border-left: ${border};
  }
  .ant-table-bordered.ant-table-fixed-header .ant-table-header > table {
    border-bottom: 0;
  }
  .ant-table-bordered.ant-table-fixed-header .ant-table-body > table {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .ant-table-bordered.ant-table-fixed-header
    .ant-table-header
    + .ant-table-body
    > table,
  .ant-table-bordered.ant-table-fixed-header .ant-table-body-inner > table {
    border-top: 0;
  }
  .ant-table-bordered .ant-table-thead > tr:not(:last-child) > th {
    border-bottom: ${border};
    .ant-table-tbody > tr > td;
  }
  .ant-table-bordered .ant-table-thead > tr > th,
  .ant-table-bordered .ant-table-tbody > tr > td {
    border-right: 0px;
  }
  .ant-table-placeholder {
    position: relative;
    z-index: 1;
    padding: 16px 16px;
    color: rgba(0, 0, 0, 0.25);
    font-size: ${fontSize};
    text-align: center;
    background: #fff;
    border-bottom: ${border};
    border-radius: 0 0 ${borderRadius} ${borderRadius};
  }
  .ant-table-placeholder .anticon {
    margin-right: 4px;
  }
  .ant-table-pagination.ant-pagination {
    float: right;
    margin: 16px 0;
  }
  .ant-table-filter-dropdown {
    position: relative;
    min-width: 96px;
    margin-left: -8px;
    background: #fff;
    border-radius: ${borderRadius};
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  .ant-table-filter-dropdown .ant-dropdown-menu {
    border: 0;
    border-radius: ${borderRadius} ${borderRadius} 0 0;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ant-table-filter-dropdown .ant-dropdown-menu-without-submenu {
    max-height: 400px;
    overflow-x: hidden;
  }
  .ant-table-filter-dropdown .ant-dropdown-menu-item > label + span {
    padding-right: 0;
  }
  .ant-table-filter-dropdown .ant-dropdown-menu-sub {
    border-radius: ${borderRadius};
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  .ant-table-filter-dropdown
    .ant-dropdown-menu
    .ant-dropdown-submenu-contain-selected
    .ant-dropdown-menu-submenu-title::after {
    color: ${backgroundColorActive};
    font-weight: bold;
  }
  .ant-table-filter-dropdown .ant-dropdown-menu-item {
    overflow: hidden;
  }
  .ant-table-filter-dropdown
    > .ant-dropdown-menu
    > .ant-dropdown-menu-item:last-child,
  .ant-table-filter-dropdown
    > .ant-dropdown-menu
    > .ant-dropdown-menu-submenu:last-child
    .ant-dropdown-menu-submenu-title {
    border-radius: 0;
  }
  .ant-table-filter-dropdown-btns {
    padding: 7px 8px;
    overflow: hidden;
    border-top: ${border};
  }
  .ant-table-filter-dropdown-link:active,
  .ant-table-filter-dropdown-link:hover,
  .ant-table-filter-dropdown-link {
    color: ${backgroundColorActive};
  }
  .ant-table-filter-dropdown-link.confirm {
    float: left;
  }
  .ant-table-filter-dropdown-link.clear {
    float: right;
  }
  .ant-table-selection {
    white-space: nowrap;
  }
  .ant-table-selection-select-all-custom {
    margin-right: 4px !important;
  }
  .ant-table-selection .anticon-down {
    color: #bfbfbf;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  .ant-table-selection-menu {
    min-width: 96px;
    margin-top: 5px;
    margin-left: -30px;
    background: ${backgroundColor};
    border-radius: ${borderRadius};
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  .ant-table-selection-menu .ant-action-down {
    color: #bfbfbf;
  }
  .ant-table-selection-down {
    display: inline-block;
    padding: 0;
    line-height: 1;
    cursor: pointer;
  }
  .ant-table-selection-down:hover .anticon-down {
    color: rgba(0, 0, 0, 0.6);
  }
  .ant-table-row-expand-icon {
    display: inline-block;
    width: 17px;
    height: 17px;
    line-height: 14px;
    text-align: center;
    background: #fff;
    border: ${border};
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .ant-table-row-expanded::after {
    content: '-';
  }
  .ant-table-row-collapsed::after {
    content: '+';
  }
  .ant-table-row-spaced {
    visibility: hidden;
  }
  .ant-table-row-spaced::after {
    content: '.';
  }
  tr.ant-table-expanded-row,
  tr.ant-table-expanded-row:hover {
    background: #fbfbfb;
  }
  tr.ant-table-expanded-row td > .ant-table-wrapper {
    margin: -16px -16px -17px;
  }
  .ant-table .ant-table-row-indent + .ant-table-row-expand-icon {
    margin-right: 8px;
  }
  .ant-table-scroll {
    overflow: auto;
    overflow-x: hidden;
  }
  .ant-table-scroll table {
    width: auto;
    min-width: 100%;
  }
  .ant-table-scroll table .ant-table-fixed-columns-in-body {
    visibility: hidden;
  }
  .ant-table-body-inner {
    height: 100%;
  }
  .ant-table-fixed-header
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-body {
    position: relative;
    background: #fff;
  }
  .ant-table-fixed-header .ant-table-body-inner {
    overflow: scroll;
  }
  .ant-table-fixed-header .ant-table-scroll .ant-table-header {
    margin-bottom: -20px;
    padding-bottom: 20px;
    overflow: scroll;
    opacity: 0.9999;
  }
  .ant-table-fixed-left,
  .ant-table-fixed-right {
    position: absolute;
    top: 0;
    z-index: auto;
    overflow: hidden;
    border-radius: 0;
    -webkit-transition: -webkit-box-shadow 0.3s ease;
    transition: -webkit-box-shadow 0.3s ease;
    transition: box-shadow 0.3s ease;
    transition: box-shadow 0.3s ease, -webkit-box-shadow 0.3s ease;
  }
  .ant-table-fixed-left table,
  .ant-table-fixed-right table {
    width: auto;
    background: #fff;
  }
  .ant-table-fixed-header
    .ant-table-fixed-left
    .ant-table-body-outer
    .ant-table-fixed,
  .ant-table-fixed-header
    .ant-table-fixed-right
    .ant-table-body-outer
    .ant-table-fixed {
    border-radius: 0;
  }
  .ant-table-fixed-left {
    left: 0;
    -webkit-box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.15);
    box-shadow: 6px 0 6px -4px rgba(0, 0, 0, 0.15);
  }
  .ant-table-fixed-left .ant-table-header {
    overflow-y: hidden;
  }
  .ant-table-fixed-left .ant-table-body-inner {
    margin-right: -20px;
    padding-right: 20px;
  }
  .ant-table-fixed-header .ant-table-fixed-left .ant-table-body-inner {
    padding-right: 0;
  }
  .ant-table-fixed-left,
  .ant-table-fixed-left table {
    border-radius: ${borderRadius} 0 0 0;
  }
  .ant-table-fixed-left .ant-table-thead > tr > th:last-child {
    border-top-right-radius: 0;
  }
  .ant-table-fixed-right {
    right: 0;
    -webkit-box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.15);
    box-shadow: -6px 0 6px -4px rgba(0, 0, 0, 0.15);
  }
  .ant-table-fixed-right,
  .ant-table-fixed-right table {
    border-radius: 0 ${borderRadius} 0 0;
  }
  .ant-table-fixed-right .ant-table-expanded-row {
    color: transparent;
    pointer-events: none;
  }
  .ant-table-fixed-right .ant-table-thead > tr > th:first-child {
    border-top-left-radius: 0;
  }
  .ant-table.ant-table-scroll-position-left .ant-table-fixed-left {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ant-table.ant-table-scroll-position-right .ant-table-fixed-right {
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ant-table colgroup > col.ant-table-selection-col {
    width: 60px;
  }
  .ant-table-thead
    > tr
    > th.ant-table-selection-column-custom
    .ant-table-selection {
    margin-right: -15px;
  }
  .ant-table-thead > tr > th.ant-table-selection-column,
  .ant-table-tbody > tr > td.ant-table-selection-column {
    text-align: center;
  }
  .ant-table-thead > tr > th.ant-table-selection-column .ant-radio-wrapper,
  .ant-table-tbody > tr > td.ant-table-selection-column .ant-radio-wrapper {
    margin-right: 0;
  }
  .ant-table-row[class*='ant-table-row-level-0']
    .ant-table-selection-column
    > span {
    display: inline-block;
  }
  .ant-table-middle > .ant-table-title,
  .ant-table-middle > .ant-table-footer {
    padding: 12px 8px;
  }
  .ant-table-middle
    > .ant-table-content
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-body
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-body
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-header
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-body
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-header
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-body
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-header
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-header
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-middle
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-tbody
    > tr
    > td {
    padding: 12px 8px;
  }
  .ant-table-middle tr.ant-table-expanded-row td > .ant-table-wrapper {
    margin: -12px -8px -13px;
  }
  .ant-table-small {
    border: ${border};
    border-radius: ${borderRadius};
  }
  .ant-table-small > .ant-table-title,
  .ant-table-small > .ant-table-footer {
    padding: 8px 8px;
  }
  .ant-table-small > .ant-table-title {
    top: 0;
    border-bottom: ${border};
  }
  .ant-table-small > .ant-table-content > .ant-table-body {
    margin: 0 8px;
  }
  .ant-table-small > .ant-table-content > .ant-table-header > table,
  .ant-table-small > .ant-table-content > .ant-table-body > table,
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-header
    > table,
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-body
    > table,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-header
    > table,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-header
    > table,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table {
    border: 0;
  }
  .ant-table-small
    > .ant-table-content
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-small
    > .ant-table-content
    > .ant-table-body
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-body
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-thead
    > tr
    > th,
  .ant-table-small
    > .ant-table-content
    > .ant-table-header
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-small
    > .ant-table-content
    > .ant-table-body
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-header
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-body
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-header
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-header
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-tbody
    > tr
    > td,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-tbody
    > tr
    > td {
    padding: 8px 8px;
  }
  .ant-table-small
    > .ant-table-content
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr,
  .ant-table-small
    > .ant-table-content
    > .ant-table-body
    > table
    > .ant-table-thead
    > tr,
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr,
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-body
    > table
    > .ant-table-thead
    > tr,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-thead
    > tr,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-thead
    > tr {
    background-color: transparent;
    border-bottom: ${border};
  }
  .ant-table-small
    > .ant-table-content
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th.ant-table-column-sort,
  .ant-table-small
    > .ant-table-content
    > .ant-table-body
    > table
    > .ant-table-thead
    > tr
    > th.ant-table-column-sort,
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th.ant-table-column-sort,
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-body
    > table
    > .ant-table-thead
    > tr
    > th.ant-table-column-sort,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th.ant-table-column-sort,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-header
    > table
    > .ant-table-thead
    > tr
    > th.ant-table-column-sort,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-thead
    > tr
    > th.ant-table-column-sort,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table
    > .ant-table-thead
    > tr
    > th.ant-table-column-sort {
    background-color: rgba(0, 0, 0, 0.01);
  }
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-header
    > table,
  .ant-table-small
    > .ant-table-content
    > .ant-table-scroll
    > .ant-table-body
    > table,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-header
    > table,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-header
    > table,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-left
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table,
  .ant-table-small
    > .ant-table-content
    > .ant-table-fixed-right
    > .ant-table-body-outer
    > .ant-table-body-inner
    > table {
    padding: 0;
  }
  .ant-table-small > .ant-table-content .ant-table-header {
    background-color: #fff;
  }
  .ant-table-small > .ant-table-content .ant-table-placeholder,
  .ant-table-small > .ant-table-content .ant-table-row:last-child td {
    border-bottom: 0;
  }
  .ant-table-small.ant-table-bordered {
    border-right: 0;
  }
  .ant-table-small.ant-table-bordered .ant-table-title {
    border: 0;
    border-right: ${border};
    border-bottom: ${border};
  }
  .ant-table-small.ant-table-bordered .ant-table-content {
    border-right: ${border};
  }
  .ant-table-small.ant-table-bordered .ant-table-footer {
    border: 0;
    border-top: ${border};
    border-right: ${border};
  }
  .ant-table-small.ant-table-bordered .ant-table-footer::before {
    display: none;
  }
  .ant-table-small.ant-table-bordered .ant-table-placeholder {
    border-right: 0;
    border-bottom: 0;
    border-left: 0;
  }
  .ant-table-small.ant-table-bordered .ant-table-thead > tr > th:last-child,
  .ant-table-small.ant-table-bordered .ant-table-tbody > tr > td:last-child {
    border-right: none;
  }
  .ant-table-small.ant-table-bordered
    .ant-table-fixed-left
    .ant-table-thead
    > tr
    > th:last-child,
  .ant-table-small.ant-table-bordered
    .ant-table-fixed-left
    .ant-table-tbody
    > tr
    > td:last-child {
    border-right: ${border};
  }
  .ant-table-small.ant-table-bordered .ant-table-fixed-right {
    border-right: ${border};
    border-left: ${border};
  }
  .ant-table-small tr.ant-table-expanded-row td > .ant-table-wrapper {
    margin: -8px -8px -9px;
  }

  ${getStyledPagination};
`;

export { StyledTable };
