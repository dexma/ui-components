import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GeneralPropTypes } from 'utils/propTypes';

const propTypes = {
  ...GeneralPropTypes,
  size: PropTypes.oneOf(['full', 'auto', 'shrink']),
  small: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  medium: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  large: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  smallOffset: PropTypes.string,
  mediumOffset: PropTypes.string,
  largeOffset: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  classNamePrefix: 'cell',
};

const Cell = ({
  className,
  classNamePrefix,
  size,
  small,
  medium,
  large,
  smallOffset,
  mediumOffset,
  largeOffset,
  dataCy,
  children,
  ...props
}) => {
  const classes = classNames(
    className,
    classNamePrefix,
    size && size,
    small && `small-${small}`,
    medium && `medium-${medium}`,
    large && `large-${large}`,
    smallOffset && `small-offset-${smallOffset}`,
    mediumOffset && `medium-offset-${mediumOffset}`,
    largeOffset && `large-offset-${largeOffset}`
  );
  return (
    <div data-cy={dataCy} className={classes} {...props}>
      {children || null}
    </div>
  );
};

Cell.propTypes = propTypes;
Cell.defaultProps = defaultProps;

export default memo(Cell);
