"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Alert = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _antd = require("antd");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _theme = _interopRequireDefault(require("../styles/theme"));

var _StyledAlert = require("../styles/components/StyledAlert");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var propTypes = {
  theme: _propTypes["default"].shape({}),
  type: _propTypes["default"].string
};
var defaultProps = {
  theme: _theme["default"],
  type: 'warning'
};

var Alert = function Alert(props) {
  var theme = props.theme,
      type = props.type,
      closable = props.closable;
  var renderIcon = null;

  if (type === 'warning') {
    renderIcon = 'circle_info_outline';
  }

  if (type === 'info') {
    renderIcon = 'alert_sign';
  }

  if (type === 'success') {
    renderIcon = 'circle_check_outline';
  }

  if (type === 'error') {
    renderIcon = 'circle_delete_outline';
  }

  var alertProps = (0, _omit["default"])(props, ['theme']);
  return /*#__PURE__*/_react["default"].createElement(_StyledAlert.StyledAlert, {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(_antd.Alert, _extends({}, alertProps, {
    icon: /*#__PURE__*/_react["default"].createElement("div", {
      name: renderIcon,
      size: "medium",
      className: "alert-icon",
      "data-testid": "alert-icon"
    }),
    closeText: closable ? /*#__PURE__*/_react["default"].createElement("div", {
      name: "close",
      size: "medium",
      className: "close-icon",
      "data-testid": "alert-close-icon"
    }) : null,
    "data-testid": "alert"
  })));
};

exports.Alert = Alert;
_StyledAlert.StyledAlert.displayName = 'StyledAlert';
Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

var _default = (0, _styledComponents.withTheme)(Alert);

exports["default"] = _default;