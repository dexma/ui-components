import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GeneralPropTypes } from 'utils/propTypes';

const propTypes = {
  ...GeneralPropTypes,
  type: PropTypes.string,
  text: PropTypes.string,
  line: PropTypes.bool,
};

const defaultProps = {
  classNamePrefix: 'heading',
  type: 'h3',
  text: 'Title component',
  line: false,
};

const Heading = ({ className, classNamePrefix, type, text, line, dataCy }) => {
  const classes = classNames(className, classNamePrefix, line && 'line-bottom');
  const TitleElement = type;
  return (
    <TitleElement data-cy={dataCy} className={classes}>
      {text}
    </TitleElement>
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default memo(Heading);
