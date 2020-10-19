import React, { memo, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import theme from '../../styles/theme';
import ToasterContext from './ToasterContext';
import { Toast } from './Toast';

const propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.node,
};

const defaultProps = {
  theme: theme,
};

export class Toaster extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      toastConfig: {},
      timeout: null,
    };
  }

  showToast = ({ text, type }) => {
    clearTimeout(this.state.timeout);
    this.setState({
      visible: true,
      toastConfig: { text: text, type: type },
      timeout: setTimeout(() => {
        this.setState({ visible: false });
      }, 5000),
    });
  };

  render = () => {
    return (
      <ToasterContext.Provider value={{ toast: this.showToast }}>
        <React.Fragment>
          <div>{this.props.children}</div>
          {this.state.visible && (
            <Toast {...this.props} {...this.state.toastConfig} />
          )}
        </React.Fragment>
      </ToasterContext.Provider>
    );
  };
}

Toaster.propTypes = propTypes;
Toaster.defaultProps = defaultProps;

export default memo(withTheme(Toaster));
