import React from 'react';
import { default as TableAntd } from 'antd/lib/table';
import 'antd/lib/table/style/css';

import { StyledTable } from 'styles/components/StyledTable';

// https://ant.design/components/table/
const Table = props => {
  return (
    <StyledTable>
      <TableAntd {...props} />
    </StyledTable>
  );
};

StyledTable.displayName = 'StyledTable';

export default Table;
