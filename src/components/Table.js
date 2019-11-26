import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Table as TableAntDesign } from 'antd';

import theme from 'styles/theme';
import { StyledTable } from 'styles/components/StyledTable';
import { itemRender } from 'components/Pagination';

const propTypes = {
  className: PropTypes.string,
  dataCy: PropTypes.string,
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
};

export const Table = props => {
  const { theme, dataCy } = props;
  return (
    <StyledTable theme={theme} dataCy={dataCy}>
      <TableAntDesign pagination={{ itemRender: itemRender }} {...props} />
    </StyledTable>
  );
};

StyledTable.displayName = 'StyledTable';

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default memo(withTheme(Table));
