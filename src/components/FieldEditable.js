import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AutosizeInput from 'react-input-autosize';
import { GeneralPropTypes } from 'utils/propTypes';

import Grid from 'components/Grid';
import Button from 'components/Button';

const propTypes = {
  ...GeneralPropTypes,
  activeClassName: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  onEdit: PropTypes.func,
  onSave: PropTypes.func,
  onClose: PropTypes.func,
  onChange: PropTypes.func,
};

const defaultProps = {
  classNamePrefix: 'field-autosize',
  activeClassName: 'active',
  hasError: false,
};

class FieldEditable extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: false,
      showEdit: false,
    };
  }

  handleKeyPress = e => {
    const { isEditable } = this.state;
    if (e.keyCode === 27 && isEditable) {
      this.onClose();
    }
    if (e.keyCode === 13 && isEditable) {
      this.onSave();
    }
  };

  onEdit = () => {
    this.setState({
      isEditable: true,
    });
    this.input.focus();
  };

  onSave = () => {
    this.props.onSave();
    this.setState({
      isEditable: false,
      showEdit: false,
    });
    this.input.blur();
  };

  onClose = () => {
    this.props.onClose();
    this.setState({
      isEditable: false,
      showEdit: false,
    });
    this.input.blur();
  };

  onFocus = () => {
    this.setState({
      isEditable: true,
      showEdit: false,
    });
    this.input.focus();
  };

  onMouseEnter = () => {
    this.setState({
      showEdit: true,
    });
  };

  onMouseLeave = () => {
    this.setState({
      showEdit: false,
    });
  };

  render() {
    const { isEditable, showEdit } = this.state;
    const {
      className,
      classNamePrefix,
      dataCy,
      activeClassName,
      hasError,
      isLoading,
      onSave,
      onClose,
      disabled,
      ...props
    } = this.props;
    const classes = classNames(
      className,
      classNamePrefix,
      isEditable && activeClassName,
      hasError && 'hasError'
    );
    const showButtonEdit = showEdit && !isEditable;
    return (
      <div
        className={classes}
        data-cy={dataCy}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <Grid className="editable">
          <AutosizeInput
            className="cell auto text"
            autoComplete="off"
            disabled={disabled}
            inputRef={element => (this.input = element)}
            onFocus={this.onFocus}
            onKeyDown={this.handleKeyPress}
            {...props}
          />
          {!disabled && isLoading && (
            <Button className="cell shrink loading" size="small" isLoading />
          )}
          {!disabled && isEditable && !isLoading && (
            <Fragment>
              <Button
                iconAfter="tick"
                className="cell shrink save"
                size="small"
                onClick={this.onSave}
              />
              <Button
                iconAfter="close"
                className="cell shrink close"
                size="small"
                onClick={this.onClose}
              />
            </Fragment>
          )}
          {!disabled && showButtonEdit && !isLoading && (
            <Button
              iconAfter="pencil"
              className="cell shrink edit"
              size="small"
              onClick={this.onEdit}
            />
          )}
        </Grid>
      </div>
    );
  }
}

FieldEditable.propTypes = propTypes;
FieldEditable.defaultProps = defaultProps;

export default FieldEditable;
