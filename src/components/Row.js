import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  GeneralPropTypes,
  DefaultGeneralPropTypes,
  BreakpointsPropTypes,
} from 'utils/propTypes';
import { withTheme } from 'styled-components';

import { StyledRow } from 'styles/components/StyledRow';

const propTypes = {
  ...GeneralPropTypes,
  reverse: PropTypes.bool,
  start: BreakpointsPropTypes,
  center: BreakpointsPropTypes,
  end: BreakpointsPropTypes,
  top: BreakpointsPropTypes,
  middle: BreakpointsPropTypes,
  bottom: BreakpointsPropTypes,
  around: BreakpointsPropTypes,
  between: BreakpointsPropTypes,
  first: BreakpointsPropTypes,
  last: BreakpointsPropTypes,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  reverse: false,
};

export const Row = ({
  reverse,
  start,
  center,
  end,
  top,
  middle,
  bottom,
  around,
  between,
  first,
  last,
  dataCy,
  children,
  theme,
}) => {
  return (
    <StyledRow
      reverse={reverse}
      start={start}
      center={center}
      end={end}
      top={top}
      middle={middle}
      bottom={bottom}
      around={around}
      between={between}
      first={first}
      last={last}
      theme={theme}
      data-cy={dataCy}
    >
      {children || null}
    </StyledRow>
  );
};

StyledRow.displayName = 'StyledRow';

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default memo(withTheme(Row));
