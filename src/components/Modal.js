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
  onEscape: PropTypes.func,
  visible: PropTypes.bool,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  width: '600px',
  height: 'auto',
  visible: false,
};

export class Modal extends PureComponent {
  componentWillMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    const { onEscape } = this.props;
    if (e.key === 'Escape') {
      onEscape(e);
    }
  };

  render() {
    const {
      visible,
      width,
      height,
      theme,
      onClickAway,
      onClose,
      children,
    } = this.props;
    const containerClass = visible ? 'container' : 'containerHidden';
    const panelClass = visible ? 'panel' : 'panelHidden';
    const maskClass = visible ? 'mask' : 'maskHidden';
    return (
      <StyledModal width={width} height={height} theme={theme}>
        <div className={containerClass}>
          <div className={panelClass}>
            <span onClick={onClose} className="close-icon">
              <Icon name="close" color="gray300" size="medium" />
            </span>
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
