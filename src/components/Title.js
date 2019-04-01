import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GeneralPropTypes } from 'utils/propTypes';

import Heading from 'components/Heading';
import Cell from 'components/Cell';

const propTypes = {
  ...GeneralPropTypes,
  type: PropTypes.string,
  text: PropTypes.string,
};

const defaultProps = {
  classNamePrefix: 'title',
  type: 'h6',
  text: 'Title',
};

const Title = ({ className, classNamePrefix, type, text, dataCy }) => {
  const classes = classNames(className, classNamePrefix);
  return (
    <Fragment>
      <Cell size="shrink">
        <Heading
          type={type}
          text={text}
          data-cy={dataCy}
          className={classes}
          line={false}
        />
      </Cell>
      <Cell size="auto" className="line" />
    </Fragment>
  );
};

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;

export default Title;
