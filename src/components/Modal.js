import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Modal as ModalAntd } from 'antd';
import { GeneralPropTypes } from 'utils/propTypes';

const propTypes = {
  ...GeneralPropTypes,
  close: PropTypes.func,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  children: PropTypes.node,
};

const defaultProps = {
  classNamePrefix: 'modal',
};

const Modal = ({
  className,
  classNamePrefix,
  dataCy,
  close,
  content,
  children,
  ...props
}) => {
  const classes = classNames(className, classNamePrefix);
  const Content = content || null;
  return (
    <ModalAntd footer={null} onCancel={close} className={classes} {...props}>
      {content && <Content />}
      {children && children}
    </ModalAntd>
  );
};

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
