import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import { StyledParagraph } from 'styles/components/StyledParagraph';

const propTypes = {
  ...GeneralPropTypes,
  m: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  m: '0 0 0 0',
};

const Paragraph = ({ dataCy, theme, m, children }) => {
  return (
    <StyledParagraph margin={m} data-cy={dataCy} theme={theme}>
      {children || null}
    </StyledParagraph>
  );
};

StyledParagraph.displayName = 'StyledParagraph';

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default memo(withTheme(Paragraph));
