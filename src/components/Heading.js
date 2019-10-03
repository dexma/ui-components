import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme } from 'styled-components';

import theme from 'styles/theme';
import { StyledHeading } from 'styles/components/StyledHeading';

const propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  line: PropTypes.bool,
  theme: PropTypes.shape({}),
};

const defaultProps = {
  type: 'h3',
  text: 'Heading',
  line: false,
  theme: theme,
};

const Heading = ({ type, text, line, theme, dataCy }) => {
  const classes = classNames(line && 'line-bottom');
  const TitleElement = type;
  return (
    <StyledHeading theme={theme}>
      <TitleElement data-cy={dataCy} className={classes}>
        {text}
      </TitleElement>
    </StyledHeading>
  );
};

StyledHeading.displayName = 'StyledHeading';

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default withTheme(memo(Heading));
