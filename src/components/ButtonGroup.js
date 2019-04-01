import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GeneralPropTypes } from 'utils/propTypes';

const propTypes = {
  ...GeneralPropTypes,
  vertical: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  classNamePrefix: 'button-group',
  vertical: false,
};

const ButtonGroup = ({
  className,
  classNamePrefix,
  vertical,
  dataCy,
  children,
  ...props
}) => {
  const classes = classNames(
    className,
    classNamePrefix,
    vertical ? 'vertical' : 'horizontal'
  );
  return (
    <div data-cy={dataCy} className={classes} role="group" {...props}>
      {children || null}
    </div>
  );
};

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default ButtonGroup;
