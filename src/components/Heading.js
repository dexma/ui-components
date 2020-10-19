import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { GeneralPropTypes, DefaultGeneralPropTypes } from '../utils/propTypes';
import { StyledHeading } from '../styles/components/StyledHeading';

const propTypes = {
  ...GeneralPropTypes,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  type: 'h3',
  text: 'Heading',
};

export const Heading = ({ type, text, theme, children, dataCy }) => {
  return (
    <StyledHeading theme={theme} as={type} dataCy={dataCy}>
      {text}
      {children || null}
    </StyledHeading>
  );
};

StyledHeading.displayName = 'StyledHeading';

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default memo(withTheme(Heading));
