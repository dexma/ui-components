import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import theme from 'styles/theme';
import { StyledTitle } from 'styles/components/StyledTitle';

import Heading from 'components/Heading';
import Cell from 'components/Cell';

const propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  theme: PropTypes.shape({}),
};

const defaultProps = {
  type: 'h6',
  text: 'Title',
  theme: theme,
};

const Title = ({ type, text, theme, dataCy }) => {
  return (
    <StyledTitle theme={theme}>
      <Cell size="shrink">
        <Heading type={type} text={text} data-cy={dataCy} line={false} />
      </Cell>
      <Cell size="auto" className="line" />
    </StyledTitle>
  );
};

StyledTitle.displayName = 'StyledTitle';

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default memo(withTheme(Title));
