import React from 'react';
import { default as TableAntDesign } from 'antd/lib/table';
import 'antd/lib/table/style/css';

import { StyledTable } from 'styles/components/StyledTable';

// https://ant.design/components/table/
const Table = props => {
  return (
    <StyledTable>
      <TableAntDesign {...props} />
    </StyledTable>
  );
};

StyledTable.displayName = 'StyledTable';

export default Table;
