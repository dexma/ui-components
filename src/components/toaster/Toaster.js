import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import theme from 'styles/theme';
import { ToasterProvider } from 'components/toaster/Context';
import { Toast } from 'components/toaster/Toast';

const propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.node,
};

const defaultProps = {
  theme: theme,
};

const Toaster = props => {
  const [visible, setVisible] = useState(false);
  const [toastConfig, setToastConfig] = useState({});
  const [toastTimeout, setToastTimeout] = useState(null);

  const showToast = ({ text, type }) => {
    setToastConfig({ text: text, type: type });
    setVisible(true);
    clearTimeout(toastTimeout);
    setToastTimeout(
      setTimeout(() => {
        setVisible(false);
      }, 5000)
    );
  };

  return (
    <ToasterProvider value={{ toast: showToast }}>
      <React.Fragment>
        <div>{props.children}</div>
        {visible && <Toast {...props} {...toastConfig} />}
      </React.Fragment>
    </ToasterProvider>
  );
};

Toaster.propTypes = propTypes;
Toaster.defaultProps = defaultProps;

export default memo(withTheme(Toaster));
