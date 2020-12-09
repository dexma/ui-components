import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';

import { StyledHeading } from '../styles/components/StyledHeading';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Set the color name for the heading, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
   */
  color: PropTypes.string,
  /**
   * Set the type of heading
   */
  type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /**
   * Set the text of heading
   */
  text: PropTypes.string.isRequired,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  color: 'gray900',
  type: 'h3',
  theme: theme,
};

export const Heading = props => {
  const { type, text, children } = props;
  const headingProps = omit(props, ['type', 'text', 'children']);
  return (
    <StyledHeading data-testid="heading" as={type} {...headingProps}>
      {text}
      {children && children}
    </StyledHeading>
  );
};

StyledHeading.displayName = 'StyledHeading';

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default withTheme(Heading);
