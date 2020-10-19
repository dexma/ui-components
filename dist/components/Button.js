"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Button = exports.ButtonGroup = exports.BUTTON_VARIANT = exports.BUTTON_SIZE = exports.BUTTON_TYPE = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _debounce = _interopRequireDefault(require("lodash/debounce"));

var _styledComponents = require("styled-components");

var _withTooltip = require("../hoc/withTooltip");

var _theme = _interopRequireDefault(require("../styles/theme"));

var _Icon = _interopRequireWildcard(require("./Icon"));

var _Spinner = _interopRequireDefault(require("./Spinner"));

var _StyledButton = require("../styles/components/StyledButton");

var _StyledButtonGroup = require("../styles/components/StyledButtonGroup");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable import/no-cycle */
var BUTTON_TYPE = ['button', 'reset', 'submit', null];
exports.BUTTON_TYPE = BUTTON_TYPE;
var BUTTON_SIZE = ['small', 'medium', 'large', 'xlarge'];
exports.BUTTON_SIZE = BUTTON_SIZE;
var BUTTON_VARIANT = ['primary', 'secondary', 'outline', 'destructive', 'link', 'icon', 'icon-secondary', 'icon-outline'];
exports.BUTTON_VARIANT = BUTTON_VARIANT;
var propTypes = {
  id: _propTypes["default"].string,
  buttonRef: _propTypes["default"].func,
  className: _propTypes["default"].string,
  text: _propTypes["default"].string,
  type: _propTypes["default"].oneOf(BUTTON_TYPE),
  size: _propTypes["default"].oneOf(BUTTON_SIZE).isRequired,
  variant: _propTypes["default"].oneOf(BUTTON_VARIANT).isRequired,
  iconBefore: _propTypes["default"].string,
  iconAfter: _propTypes["default"].string,
  tooltip: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  isLoading: _propTypes["default"].bool,
  isDisabled: _propTypes["default"].bool,
  isCircle: _propTypes["default"].bool,
  isExpanded: _propTypes["default"].bool,
  debounceTime: _propTypes["default"].number,
  children: _propTypes["default"].node,
  dataCy: _propTypes["default"].string,
  theme: _propTypes["default"].shape({})
};
var defaultProps = {
  type: 'button',
  size: 'medium',
  variant: 'primary',
  isDisabled: false,
  isLoading: false,
  isExpanded: false,
  theme: _theme["default"]
};

var getButtonIconSize = function getButtonIconSize(size) {
  if (size === 'small') return 'small';
  if (size === 'medium') return 'medium';
  if (size === 'large') return 'large';
  if (size === 'xlarge') return 'large';
  return 'small';
};

var ButtonGroup = function ButtonGroup(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledButtonGroup.StyledButtonGroup, props);
};

exports.ButtonGroup = ButtonGroup;

var Button = function Button(_ref) {
  var id = _ref.id,
      buttonRef = _ref.buttonRef,
      className = _ref.className,
      text = _ref.text,
      type = _ref.type,
      iconBefore = _ref.iconBefore,
      iconAfter = _ref.iconAfter,
      tooltip = _ref.tooltip,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      isDisabled = _ref.isDisabled,
      isExpanded = _ref.isExpanded,
      isLoading = _ref.isLoading,
      isCircle = _ref.isCircle,
      size = _ref.size,
      variant = _ref.variant,
      debounceTime = _ref.debounceTime,
      dataCy = _ref.dataCy,
      theme = _ref.theme,
      children = _ref.children;
  var classes = (0, _classnames["default"])(isExpanded && 'expanded', size && size, className);
  var handleClick = debounceTime > 0 ? (0, _debounce["default"])(onClick, debounceTime) : onClick;
  var spinnerSize = (0, _Icon.getIconSize)(size);
  var iconSize = getButtonIconSize(size);
  return /*#__PURE__*/_react["default"].createElement(_StyledButton.StyledButton, {
    id: id,
    ref: buttonRef,
    type: type,
    "data-tooltip": tooltip,
    onClick: handleClick,
    onFocus: onFocus,
    disabled: isDisabled,
    className: classes,
    "data-cy": dataCy,
    theme: theme,
    variant: variant,
    size: size,
    iconSize: iconSize,
    iconAfter: iconAfter,
    isCircle: isCircle,
    text: text,
    isDisabled: isDisabled,
    isLoading: isLoading
  }, isLoading ? /*#__PURE__*/_react["default"].createElement(_Spinner["default"], {
    size: spinnerSize
  }) : null, !isLoading && iconBefore ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: iconBefore,
    size: iconSize,
    color: "white"
  }) : null, text || null, children || null, !isLoading && iconAfter ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: iconAfter,
    size: iconSize,
    color: "white"
  }) : null);
};

exports.Button = Button;
_StyledButton.StyledButton.displayName = 'StyledButton';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

var _default = (0, _styledComponents.withTheme)((0, _withTooltip.withTooltip)(Button));

exports["default"] = _default;