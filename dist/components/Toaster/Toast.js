"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Toast = exports.ToastType = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("../../styles/theme"));

var _StyledToast = require("../../styles/components/StyledToast");

var _Icon = _interopRequireDefault(require("../Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ToastType = Object.freeze({
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  ERROR: 'ERROR'
});
exports.ToastType = ToastType;
var propTypes = {
  theme: _propTypes["default"].shape({}),
  text: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].oneOf(Object.keys(ToastType)).isRequired
};
var defaultProps = {
  theme: _theme["default"]
};

var Toast = function Toast(_ref) {
  var _ToastType$INFO$Toast;

  var text = _ref.text,
      type = _ref.type,
      theme = _ref.theme;
  var iconName = (_ToastType$INFO$Toast = {}, _defineProperty(_ToastType$INFO$Toast, ToastType.INFO, 'circle_info'), _defineProperty(_ToastType$INFO$Toast, ToastType.SUCCESS, 'circle_check'), _defineProperty(_ToastType$INFO$Toast, ToastType.WARNING, 'circle_info'), _defineProperty(_ToastType$INFO$Toast, ToastType.ERROR, 'circle_info'), _ToastType$INFO$Toast)[type];
  return /*#__PURE__*/_react["default"].createElement(_StyledToast.StyledToast, {
    theme: theme,
    type: type
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: iconName,
    size: "large",
    color: "iconColor"
  }), /*#__PURE__*/_react["default"].createElement("span", null, text));
};

exports.Toast = Toast;
_StyledToast.StyledToast.displayName = 'StyledToast';
Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

var _default = /*#__PURE__*/(0, _react.memo)((0, _styledComponents.withTheme)(Toast));

exports["default"] = _default;