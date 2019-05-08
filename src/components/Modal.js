import React, { Component } from 'react';

const style = {
  mask: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 10001,
  },
  maskHidden: {
    display: 'none',
  },
  container: {
    position: 'fixed',
    top: 120,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    zIndex: 10000,
  },
  containerHidden: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  panel: {
    backgroundColor: '#fff',
    borderRadius: '5px',
    boxSizing: 'border-box',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
    transform: 'translate3d(0, 0, 0)',
    transition:
      'transform 500ms cubic-bezier(0, 0, 0.25, 1), opacity 500ms cubic-bezier(0, 0, 0.25, 1)',
    zIndex: 10002,
  },
  panelHidden: {
    transform: 'translate3d(0, -100px, 0)',
    opacity: 0,
    zIndex: -1,
    height: 0,
    width: 0,
    overflow: 'hidden',
  },
};

export default class Modal extends Component {
  constructor(props) {
    super(props);
    const effect = props.effect || 'fadeInDown';
    this.setSize(effect);
    this.state = {
      visible: props.visible,
      style,
    };
  }

  componentWillReceiveProps({ visible, effect = 'fadeInDown' }) {
    this.setState({
      visible,
    });
    this.setSize(effect);
    this.setStyles(effect);
  }

  setStyles() {
    if (this.props && this.props.styles) {
      style.panel = {
        ...style.panel,
        ...this.props.styles,
      };
    }
  }

  setSize() {
    if (this.props && this.props.width) {
      if (this.props.width.charAt(this.props.width.length - 1) === '%') {
        // Use Percentage
        const width = this.props.width.slice(0, -1);
        style.panel.width = `${width}%`;
      } else if (this.props.width.charAt(this.props.width.length - 1) === 'x') {
        // Use Pixels
        const width = this.props.width.slice(0, -2);
        style.panel.width = `${width}px`;
      } else {
        // Defaults
        style.panel.width = `${this.props.width}px`;
      }
    }
    if (this.props && this.props.height) {
      if (this.props.height.charAt(this.props.height.length - 1) === '%') {
        // Use Percentage
        const height = this.props.height.slice(0, -1);
        style.panel.height = `${height}vh`;
      } else if (
        this.props.height.charAt(this.props.height.length - 1) === 'x'
      ) {
        // Use Pixels
        const height = this.props.height.slice(0, -2);
        style.panel.height = `${height}px`;
      } else {
        // Defaults
        style.panel.height = `${this.props.height}px`;
      }
    }
  }

  render() {
    return (
      <div className="modal">
        <div
          style={
            this.state.visible
              ? this.state.style.container
              : this.state.style.containerHidden
          }
        >
          <div
            style={
              this.state.visible
                ? { ...this.state.style.panel }
                : this.state.style.panelHidden
            }
          >
            {this.props.children}
          </div>
          <div
            style={
              this.state.visible
                ? this.state.style.mask
                : this.state.style.maskHidden
            }
            onClick={this.props.onClickAway ? this.props.onClickAway : null}
          />
        </div>
      </div>
    );
  }
}
