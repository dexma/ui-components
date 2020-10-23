import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from '../utils/propTypes';

import { StyledParagraph } from '../styles/components/StyledParagraph';

const propTypes = {
  ...GeneralPropTypes,
  m: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  m: '0 0 0 0',
  size: '1rem',
};

export const Paragraph = ({ dataCy, theme, m, size, children }) => {
  return (
    <StyledParagraph margin={m} size={size} data-cy={dataCy} theme={theme}>
      {children || null}
    </StyledParagraph>
  );
};

StyledParagraph.displayName = 'StyledParagraph';

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default withTheme(Paragraph);
