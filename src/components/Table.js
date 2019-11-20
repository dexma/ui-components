import React, { memo } from 'react';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import { Table as TableAntDesign } from 'antd';

import { StyledTable } from 'styles/components/StyledTable';

const propTypes = {
  ...GeneralPropTypes,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
};

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

export default memo(withTheme(Table));
