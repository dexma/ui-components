import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';
import { Table as TableAntDesign } from 'antd';

import theme from '../styles/theme';
import { StyledTable } from '../styles/components/StyledTable';
import { itemRender } from './Pagination';

const propTypes = {
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
};

export const Table = props => {
  const { theme } = props;
  const tableProps = omit(props, ['theme']);
  return (
    <StyledTable data-testid="table" theme={theme}>
      <TableAntDesign pagination={{ itemRender: itemRender }} {...tableProps} />
    </StyledTable>
  );
};

StyledTable.displayName = 'StyledTable';

Table.defaultProps = propTypes;
Table.defaultProps = defaultProps;

export default withTheme(Table);
