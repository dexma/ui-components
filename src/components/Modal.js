import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import Icon from 'components/Icon';

import { StyledModal } from 'styles/components/StyledModal';

const propTypes = {
  ...GeneralPropTypes,
  width: PropTypes.string,
  height: PropTypes.string,
  onClickAway: PropTypes.func,
  onClose: PropTypes.func,
  closeIcon: PropTypes.bool,
  visible: PropTypes.bool,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  width: '600px',
  height: 'auto',
  closeIcon: false,
  visible: false,
};

export class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
  }

  componentWillMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillReceiveProps(nextProps) {
    const { visible } = nextProps;
    this.setState({
      visible,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  keyDown = e => {
    const { onClose } = this.props;
    if (e.key === 'Escape') {
      onClose();
      this.hideModal();
    }
  };

  render() {
    const { visible } = this.state;
    const {
      width,
      height,
      theme,
      onClickAway,
      onClose,
      closeIcon,
      children,
    } = this.props;
    const containerClass = visible ? 'container' : 'containerHidden';
    const panelClass = visible ? 'panel' : 'panelHidden';
    const maskClass = visible ? 'mask' : 'maskHidden';
    return (
      <StyledModal width={width} height={height} theme={theme}>
        <div className={containerClass}>
          <div className={panelClass}>
            {closeIcon && (
              <button onClick={onClose} className="close-icon">
                <Icon name="close" color="gray300" size="medium" />
              </button>
            )}
            {children}
          </div>
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
