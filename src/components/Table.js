import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import omit from 'lodash/omit';
import { Table as TableAntDesign } from 'antd';

import theme from '../styles/theme';
import { itemRender } from './Pagination';
import { Button } from './Button';
import { StyledResult } from '../styles/components/StyledResult';
import { StyledTable } from '../styles/components/StyledTable';
import withDataId from '../components/DataId/withDataId';

const propTypes = {
  /**
   * When you have a expanded table you need to set true the flag
   */
  isExpanded: PropTypes.bool,
  /**
   * State to show/hide loading
   */
  isLoading: PropTypes.bool,
  /**
   * State to show/hide error
   */
  showError: PropTypes.bool,
  /**
   * The content of the error normally will be a Result component
   */
  errorContent: PropTypes.node,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
  /**
   * data-id attribute to identfy the element in DOM
   */
  dataId: PropTypes.string,
};

const defaultProps = {
  isExpanded: false,
  theme: theme,
  dataId: 'table'
};

const StyledTableLoading = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  height: 400px;
  align-items: center;
  justify-content: center;
`;

const TableLoading = () => (
  <StyledTableLoading data-testid="table-loading">
    <svg
      width="210"
      height="210"
      aria-labelledby="loading-aria"
      preserveAspectRatio="none"
      viewBox="0 0 210 210"
    >
      <rect
        width="100%"
        height="100%"
        fill='url("#fill")'
        clipPath="url(#clip-path-table)"
      ></rect>
      <defs>
        <clipPath id="clip-path-table">
          <rect width="9" height="158" x="10" y="26" rx="0" ry="0"></rect>
          <rect width="1" height="88" x="107" y="73" rx="0" ry="0"></rect>
          <rect width="190" height="9" x="10" y="26" rx="0" ry="0"></rect>
          <rect width="184" height="9" x="10" y="175" rx="0" ry="0"></rect>
          <rect width="9" height="158" x="191" y="26" rx="0" ry="0"></rect>
          <rect width="4" height="158" x="59" y="26" rx="0" ry="0"></rect>
          <rect width="4" height="158" x="103" y="26" rx="0" ry="0"></rect>
          <rect width="4" height="158" x="147" y="26" rx="0" ry="0"></rect>
          <rect width="184" height="4" x="10" y="68" rx="0" ry="0"></rect>
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.6" stopColor="#f3f3f3">
            <animate
              attributeName="offset"
              dur="2s"
              keyTimes="0; 0.25; 1"
              repeatCount="indefinite"
              values="-2; -2; 1"
            ></animate>
          </stop>
          <stop offset="1.6" stopColor="#ecebeb">
            <animate
              attributeName="offset"
              dur="2s"
              keyTimes="0; 0.25; 1"
              repeatCount="indefinite"
              values="-1; -1; 2"
            ></animate>
          </stop>
          <stop offset="2.6" stopColor="#f3f3f3">
            <animate
              attributeName="offset"
              dur="2s"
              keyTimes="0; 0.25; 1"
              repeatCount="indefinite"
              values="0; 0; 3"
            ></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  </StyledTableLoading>
);

const StyledTableError = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  height: 400px;
  align-items: center;
  justify-content: center;
  ${StyledResult} {
    margin: 0;
  }
`;

const TableError = props => (
  <StyledTableError data-testid="table-error" {...props} />
);

export const Table = props => {
  const {
    theme,
    isExpanded,
    expandedRowRender,
    columns,
    dataSource,
    isLoading,
    showError,
    errorContent,
    dataId,
  } = props;
  const tableProps = omit(props, ['theme', 'columns']);

  const getColumnsExpanded = () => {
    const newFirstColumn = {
      className: 'expanded-first-column',
      ...columns[0],
    };
    return Object.assign([], columns, { 0: newFirstColumn });
  };

  const getExpandedIcon = props => {
    const { expanded, onExpand } = props;
    const classButton = expanded ? 'button-no-expanded' : 'button-expanded';
    return (
      <Button
        className={classButton}
        iconAfter="chevron_down"
        variant="icon-secondary"
        onClick={e => {
          e.stopPropagation();
          onExpand();
        }}
      />
    );
  };

  const loading = isLoading && !showError;
  const error = !isLoading && showError && errorContent;
  const showTable = !loading && !error && columns && dataSource;

  return (
    <StyledTable data-testid="table" theme={theme} data-id={dataId}>
      {loading && <TableLoading />}
      {error && <TableError> {errorContent} </TableError>}
      {showTable && (
        <TableAntDesign
          expandIconAsCell={false}
          expandIcon={expandedRowRender && getExpandedIcon}
          pagination={{ itemRender: itemRender }}
          columns={isExpanded ? getColumnsExpanded() : columns}
          {...tableProps}
        />
      )}
    </StyledTable>
  );
};

StyledTable.displayName = 'StyledTable';

Table.defaultProps = propTypes;
Table.defaultProps = defaultProps;

export default withTheme(withDataId(Table));
