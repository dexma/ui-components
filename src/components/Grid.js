import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import { withTheme } from 'styled-components';

import { StyledGrid } from 'styles/components/StyledGrid';

const propTypes = {
  ...GeneralPropTypes,
  fluid: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  fluid: false,
};

const Grid = ({ fluid, dataCy, children, theme }) => {
  return (
    <StyledGrid data-cy={dataCy} fluid={fluid} theme={theme}>
      {children || null}
    </StyledGrid>
  );
};

StyledGrid.displayName = 'StyledGrid';

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default memo(withTheme(Grid));
