import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { GeneralPropTypes, DefaultGeneralPropTypes } from '../utils/propTypes';
import { StyledDivider } from '../styles/components/StyledDivider';

const propTypes = {
  ...GeneralPropTypes,
  type: PropTypes.string.isRequired,
  vertical: PropTypes.bool,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  type: 'hr',
  vertical: false,
};

export const Divider = props => <StyledDivider {...props} />;

StyledDivider.displayName = 'StyledDivider';

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default memo(withTheme(Divider));
