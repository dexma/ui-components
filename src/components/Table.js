import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { default as TableAntDesign } from 'antd/lib/table';
import 'antd/lib/table/style/css';

import theme from 'styles/theme';
import { StyledTable } from 'styles/components/StyledTable';

const propTypes = {
  theme: PropTypes.objectOf(PropTypes.any),
};

const defaultProps = {
  theme: theme,
};

// https://ant.design/components/table/
const Table = props => {
  return (
    <StyledTable>
      <TableAntDesign {...props} />
    </StyledTable>
  );
};

StyledTable.displayName = 'StyledTable';

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default withTheme(Table);
