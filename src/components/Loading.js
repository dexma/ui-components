import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GeneralPropTypes } from 'utils/propTypes';

import Spinner from 'components/Spinner';

const propTypes = {
  ...GeneralPropTypes,
  isLoading: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node,
};

const defaultProps = {
  classNamePrefix: 'dexma-loading',
  isLoading: false,
  width: 80,
  height: 80,
};

const Loading = ({
  className,
  classNamePrefix,
  isLoading,
  width,
  height,
  dataCy,
  children,
}) => {
  const classes = classNames(className, classNamePrefix);
  return isLoading ? (
    <div data-cy={dataCy} className={classes}>
      <Spinner width={width} height={height} />
    </div>
  ) : (
    children
  );
};

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default Loading;
