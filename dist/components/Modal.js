"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Modal = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _Icon = _interopRequireDefault(require("./Icon"));

var _theme = _interopRequireDefault(require("../styles/theme"));

var _StyledModal = require("../styles/components/StyledModal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var propTypes = {
  className: _propTypes["default"].string,
  dataCy: _propTypes["default"].string,
  theme: _propTypes["default"].shape({})
};
var defaultProps = {
  theme: _theme["default"]
};

var Modal = function Modal(props) {
  var theme = props.theme;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_StyledModal.StyledModal, _extends({
    closeIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "close",
      color: "gray300",
      size: "medium"
    }),
    theme: theme,
    footer: false
  }, props)), /*#__PURE__*/_react["default"].createElement(_StyledModal.StyledModalGlobal, {
    theme: theme
  }));
};

exports.Modal = Modal;
_StyledModal.StyledModal.displayName = 'StyledModal';
Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

var _default = (0, _styledComponents.withTheme)(Modal);

exports["default"] = _default;