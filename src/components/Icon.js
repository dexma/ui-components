import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GeneralPropTypes } from 'utils/propTypes';

const propTypes = {
  ...GeneralPropTypes,
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  children: PropTypes.node,
};

const defaultProps = {
  size: 'small',
  classNamePrefix: 'dexma-icon',
};

const Icon = ({ name, size, className, classNamePrefix, dataCy, children }) => {
  const classes = classNames(
    className,
    classNamePrefix,
    size && size,
    name && `dexma-icon-${name}`
  );
  return (
    <i data-cy={dataCy} className={classes}>
      {children || null}
    </i>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default memo(Icon);
