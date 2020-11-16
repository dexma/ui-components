import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { StyledParagraph } from '../styles/components/StyledParagraph';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Set margin like css
   */
  margin: PropTypes.string,
  /**
   * Set the size, it be like a font-size prop
   */
  size: PropTypes.string,
};

const defaultProps = {
  margin: '0 0 0 0',
  size: '1rem',
  theme: theme,
};

export const Paragraph = props => <StyledParagraph {...props} />;

StyledParagraph.displayName = 'StyledParagraph';

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default withTheme(Paragraph);
