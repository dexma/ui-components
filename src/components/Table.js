import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';
import { Table as TableAntDesign } from 'antd';

import theme from '../styles/theme';
import { StyledTable } from '../styles/components/StyledTable';
import { itemRender } from './Pagination';
import { Button } from './Button';

const propTypes = {
  /**
   * When you have a expanded table you need to set true the flag
   */
  isExpanded: PropTypes.bool,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  isExpanded: false,
  theme: theme,
};

export const Table = props => {
  const { theme, isExpanded, expandedRowRender, columns } = props;
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
  return (
    <StyledTable data-testid="table" theme={theme}>
      <TableAntDesign
        expandIconAsCell={false}
        expandIcon={expandedRowRender && getExpandedIcon}
        pagination={{ itemRender: itemRender }}
        columns={isExpanded ? getColumnsExpanded() : columns}
        {...tableProps}
      />
    </StyledTable>
  );
};

StyledTable.displayName = 'StyledTable';

Table.defaultProps = propTypes;
Table.defaultProps = defaultProps;

export default withTheme(Table);
