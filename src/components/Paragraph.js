import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { StyledParagraph } from '../styles/components/StyledParagraph';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Set the color name for the paragraph, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
   */
  color: PropTypes.string,
  /**
   * Set margin like css
   */
  margin: PropTypes.string,
  /**
   * Set the size of button
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']).isRequired,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  color: 'gray700',
  margin: '0 0 0 0',
  size: 'medium',
  theme: theme,
};

export const Paragraph = props => <StyledParagraph {...props} />;

StyledParagraph.displayName = 'StyledParagraph';

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default withTheme(Paragraph);
