import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import theme from 'styles/theme';
import { StyledModal } from 'styles/components/StyledModal';
import { withTheme } from 'styled-components';

const propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  onClickAway: PropTypes.func,
  visible: PropTypes.bool,
  theme: PropTypes.objectOf(PropTypes.any),
};

const defaultProps = {
  width: '600px',
  height: 'auto',
  visible: false,
  theme: theme,
};

class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { visible } = nextProps;
    this.setState({
      visible,
    });
  }

  render() {
    const { visible } = this.state;
    const { width, height, theme, onClickAway, children } = this.props;
    const containerClass = visible ? 'container' : 'containerHidden';
    const panelClass = visible ? 'panel' : 'panelHidden';
    const maskClass = visible ? 'mask' : 'maskHidden';
    return (
      <StyledModal width={width} height={height} theme={theme}>
        <div className={containerClass}>
          <div className={panelClass}>{children}</div>
          <div className={maskClass} onClick={onClickAway} />
        </div>
      </StyledModal>
    );
  }
}

StyledModal.displayName = 'StyledModal';

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default withTheme(Modal);
