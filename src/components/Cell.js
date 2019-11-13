import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  DefaultGeneralPropTypes,
  GeneralPropTypes,
  BreakpointsPropTypes,
  ColumnSizePropTypes,
} from 'utils/propTypes';
import { withTheme } from 'styled-components';
import { StyledCell } from 'styles/components/StyledCell';

const propTypes = {
  ...GeneralPropTypes,
  xs: ColumnSizePropTypes,
  sm: ColumnSizePropTypes,
  md: ColumnSizePropTypes,
  lg: ColumnSizePropTypes,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  first: BreakpointsPropTypes,
  last: BreakpointsPropTypes,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
};

const Cell = ({
  xs,
  sm,
  md,
  lg,
  xsOffset,
  smOffset,
  mdOffset,
  lgOffset,
  first,
  last,
  dataCy,
  children,
  theme,
}) => {
  return (
    <StyledCell
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xsOffset={xsOffset}
      smOffset={smOffset}
      mdOffset={mdOffset}
      lgOffset={lgOffset}
      first={first}
      last={last}
      data-cy={dataCy}
      theme={theme}
    >
      {children || null}
    </StyledCell>
  );
};

StyledCell.displayName = 'StyledCell';

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default memo(withTheme(Cell));
