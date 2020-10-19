"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Input = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _StyledInput = require("../styles/components/StyledInput");

var _theme = _interopRequireDefault(require("../styles/theme"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var propTypes = {
  /**
   * Placeholder input
   */
  placeholder: _propTypes["default"].string,

  /**
   * Id
   */
  id: _propTypes["default"].string,

  /**
   * Prefix name of a the icon
   */
  icon: _propTypes["default"].string,

  /**
   * Label text
   */
  label: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].node]),

  /**
   * Input initial value
   */
  defaultValue: _propTypes["default"].string,

  /**
   * Input value
   */
  value: _propTypes["default"].string,

  /**
   * Add "valid" validation styles to the input
   */
  isValid: _propTypes["default"].bool,

  /**
   * Add "error" validation styles to the input
   */
  hasError: _propTypes["default"].bool,

  /**
   * Disabled input
   */
  isDisabled: _propTypes["default"].bool,

  /**
   * Custom success message
   */
  success: _propTypes["default"].string,

  /**
   * Custom error message
   */
  error: _propTypes["default"].string,

  /**
   * Override type="text"
   */
  type: _propTypes["default"].string,

  /**
   * Override name="text"
   */
  name: _propTypes["default"].string,

  /**
   * Callback onChange
   */
  onChange: _propTypes["default"].func,

  /**
   * Helper text
   */
  helper: _propTypes["default"].string,

  /**
   * Component class
   */
  className: _propTypes["default"].string,

  /**
   * The cypress identifier
   */
  dataCy: _propTypes["default"].string,

  /**
   * Theme json based
   */
  theme: _propTypes["default"].shape({}),

  /**
   * Children node
   */
  children: _propTypes["default"].node
};
var defaultProps = {
  theme: _theme["default"]
};

var Input = function Input(props) {
  var icon = props.icon,
      isLoading = props.isLoading,
      theme = props.theme,
      children = props.children;
  var newProps = (0, _omit["default"])(props, ['children']);
  return /*#__PURE__*/_react["default"].createElement(_StyledInput.StyledInput, {
    icon: icon,
    isLoading: isLoading,
    theme: theme
  }, icon && /*#__PURE__*/_react["default"].createElement("div", {
    className: "icon-container"
  }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: icon,
    size: 20,
    color: "gray500"
  })), /*#__PURE__*/_react["default"].createElement("input", newProps), isLoading && /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
    size: 20
  }), children && children);
};

exports.Input = Input;
_StyledInput.StyledInput.displayName = 'StyledInput';
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

var _default = /*#__PURE__*/(0, _react.memo)((0, _styledComponents.withTheme)(Input));

exports["default"] = _default;