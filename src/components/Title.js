import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import Heading from 'components/Heading';
import Cell from 'components/Cell';

import { StyledTitle } from 'styles/components/StyledTitle';

const propTypes = {
  ...GeneralPropTypes,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  type: 'h6',
  text: 'Title',
};

export const Title = ({ type, text, theme, dataCy }) => {
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
