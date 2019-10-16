import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import { StyledParagraph } from 'styles/components/StyledParagraph';

const propTypes = {
  ...GeneralPropTypes,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
};

const Paragraph = ({ dataCy, theme, children }) => {
  return (
    <StyledParagraph data-cy={dataCy} theme={theme}>
      {children || null}
    </StyledParagraph>
  );
};

StyledParagraph.displayName = 'StyledParagraph';

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default memo(withTheme(Paragraph));
