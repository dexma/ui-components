"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButton = exports.getButtonCircle = exports.getButtonLoading = exports.getButtonDisabled = exports.getButtonExpanded = exports.getButtonVariantIconOutline = exports.getButtonVariantIconSecondary = exports.getButtonVariantIcon = exports.getButtonVariantLink = exports.getButtonVariantDestructive = exports.getButtonVariantOutline = exports.getButtonVariantSecondary200 = exports.getButtonVariantSecondary300 = exports.getButtonVariantSecondary = exports.getButtonVariantPrimary = exports.getIconSize = exports.getButtonSize = exports.getButtonBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _get = _interopRequireDefault(require("lodash/get"));

var _selectors = require("../selectors");

var _StyledIcon = require("./StyledIcon");

var _StyledSpinner = require("./StyledSpinner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var getButtonBase = function getButtonBase() {
  return (0, _styledComponents.css)(["align-items:center;align-content:center;display:inline-flex;font-weight:normal;text-align:center;vertical-align:middle;cursor:pointer;text-transform:none;outline:none;box-sizing:border-box;user-select:none;text-decoration:none;overflow:visible;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;border-width:1px;border-style:solid;border-radius:", ";"], _selectors.borderRadius);
};

exports.getButtonBase = getButtonBase;

var getButtonSize = function getButtonSize(props) {
  var sizeProps = (0, _get["default"])((0, _selectors.buttonSize)(props), props.size);
  var paddingX = sizeProps.paddingX,
      fontSize = sizeProps.fontSize,
      height = sizeProps.height;
  return (0, _styledComponents.css)(["font-size:", ";padding:0 ", ";line-height:", ";height:", ";"], fontSize, paddingX, height, height);
};

exports.getButtonSize = getButtonSize;

var getIconSize = function getIconSize(props) {
  var sizeCss = "";
  var sizeArray = Object.entries((0, _selectors.buttonSize)(props));
  var iconAfter = props.iconAfter;
  var text = props.text;
  sizeArray.forEach(function (sizeItem) {
    var _sizeItem = _slicedToArray(sizeItem, 1),
        size = _sizeItem[0];

    var iconPaddding = 0.285;
    if (size === 'medium') iconPaddding = 0.285;
    if (size === 'large') iconPaddding = 0.5;
    if (size === 'xlarge') iconPaddding = 0.7;
    var paddingPosition = 'right';
    if (iconAfter) paddingPosition = 'left';
    var marginPosition = 'left';
    if (iconAfter) marginPosition = 'right';
    sizeCss += "\n          &.".concat(size, " {\n            ").concat(_StyledIcon.StyledIcon, " {\n              display: inline-flex;\n              ").concat(text && "margin-".concat(paddingPosition, ": ").concat(iconPaddding, "rem !important;\n              margin-").concat(marginPosition, ": -2px;"), "\n            }\n          }\n        ");
  });
  return (0, _styledComponents.css)(["", ""], sizeCss);
};

exports.getIconSize = getIconSize;

var getButtonVariantPrimary = function getButtonVariantPrimary(props) {
  var newHoverColor = (0, _polished.darken)(0.1, (0, _polished.saturate)(0.2, (0, _selectors.primaryColor)(props)));
  var newFocusColor = (0, _polished.transparentize)(0.3, (0, _selectors.primaryColor)(props));
  var color = (0, _selectors.white)(props);
  return (0, _styledComponents.css)(["color:", ";border-color:", ";background-color:", ";", "{fill:", ";}&:hover{color:", ";border-color:", ";background-color:", ";", "{fill:", ";}}&:focus{box-shadow:0px 0px 0px 2px ", ";}"], color, _selectors.primaryColor, _selectors.primaryColor, _StyledIcon.StyledIcon, color, color, newHoverColor, newHoverColor, _StyledIcon.StyledIcon, color, newFocusColor);
};

exports.getButtonVariantPrimary = getButtonVariantPrimary;

var getButtonVariantSecondary = function getButtonVariantSecondary(props) {
  var borderColor = (0, _selectors.gray400)(props);
  var color = (0, _selectors.gray900)(props);
  var colorHover = (0, _selectors.white)(props);
  var background = (0, _selectors.backgroundColor)(props);
  var newFocusColor = (0, _polished.transparentize)(0.3, borderColor);
  return (0, _styledComponents.css)(["color:", ";border-color:", ";background-color:", ";", "{fill:", ";}&:hover{color:", ";border-color:", ";background-color:", ";", "{fill:", ";}}&:focus{box-shadow:0px 0px 0px 2px ", ";}"], color, borderColor, background, _StyledIcon.StyledIcon, color, colorHover, borderColor, borderColor, _StyledIcon.StyledIcon, colorHover, newFocusColor);
};

exports.getButtonVariantSecondary = getButtonVariantSecondary;

var getButtonVariantSecondary300 = function getButtonVariantSecondary300(props) {
  var borderColor = (0, _selectors.gray300)(props);
  var color = (0, _selectors.gray900)(props);
  var colorHover = (0, _selectors.white)(props);
  var background = (0, _selectors.backgroundColor)(props);
  var newFocusColor = (0, _polished.transparentize)(0.3, borderColor);
  return (0, _styledComponents.css)(["color:", ";border-color:", ";background-color:", ";", "{fill:", ";}&:hover{color:", ";border-color:", ";background-color:", ";", "{fill:", ";}}&:focus{box-shadow:0px 0px 0px 2px ", ";}"], color, borderColor, background, _StyledIcon.StyledIcon, color, colorHover, borderColor, borderColor, _StyledIcon.StyledIcon, colorHover, newFocusColor);
};

exports.getButtonVariantSecondary300 = getButtonVariantSecondary300;

var getButtonVariantSecondary200 = function getButtonVariantSecondary200(props) {
  var borderColor = (0, _selectors.gray200)(props);
  var color = (0, _selectors.gray900)(props);
  var colorHover = (0, _selectors.white)(props);
  var background = (0, _selectors.backgroundColor)(props);
  var newFocusColor = (0, _polished.transparentize)(0.3, borderColor);
  return (0, _styledComponents.css)(["color:", ";border-color:", ";background-color:", ";", "{fill:", ";}&:hover{color:", ";border-color:", ";background-color:", ";", "{fill:", ";}}&:focus{box-shadow:0px 0px 0px 2px ", ";}"], color, borderColor, background, _StyledIcon.StyledIcon, color, colorHover, borderColor, borderColor, _StyledIcon.StyledIcon, colorHover, newFocusColor);
};

exports.getButtonVariantSecondary200 = getButtonVariantSecondary200;

var getButtonVariantOutline = function getButtonVariantOutline(props) {
  var borderColor = (0, _selectors.primaryColor)(props);
  var color = (0, _selectors.primaryColor)(props);
  var colorHover = (0, _selectors.white)(props);
  var background = (0, _selectors.backgroundColor)(props);
  var newFocusColor = (0, _polished.transparentize)(0.3, borderColor);
  return (0, _styledComponents.css)(["color:", ";border-color:", ";background-color:", ";", "{fill:", ";}&:hover{color:", ";border-color:", ";background-color:", ";", "{fill:", ";}}&:focus{box-shadow:0px 0px 0px 2px ", ";}"], color, borderColor, background, _StyledIcon.StyledIcon, color, colorHover, borderColor, borderColor, _StyledIcon.StyledIcon, colorHover, newFocusColor);
};

exports.getButtonVariantOutline = getButtonVariantOutline;

var getButtonVariantDestructive = function getButtonVariantDestructive(props) {
  var color = (0, _selectors.white)(props);
  var background = (0, _selectors.red)(props);
  var borderColor = background;
  var backgroundHover = (0, _polished.darken)(0.1, (0, _polished.saturate)(0.2, (0, _selectors.red)(props)));
  var newFocusColor = (0, _polished.transparentize)(0.3, backgroundHover);
  return (0, _styledComponents.css)(["color:", ";border-color:", ";background-color:", ";&:hover{color:", ";border-color:", ";background-color:", ";}&:focus{box-shadow:0px 0px 0px 2px ", ";}"], color, borderColor, background, color, backgroundHover, backgroundHover, newFocusColor);
};

exports.getButtonVariantDestructive = getButtonVariantDestructive;

var getButtonVariantLink = function getButtonVariantLink(props) {
  var color = (0, _selectors.primaryColor)(props);
  return (0, _styledComponents.css)(["color:", ";border-color:transparent;background-color:transparent;", "{fill:", ";}&:hover{color:", ";border-color:transparent;background-color:transparent;text-decoration:underline;}"], color, _StyledIcon.StyledIcon, color, color);
};

exports.getButtonVariantLink = getButtonVariantLink;

var getButtonVariantIcon = function getButtonVariantIcon(props) {
  var color = (0, _selectors.gray500)(props);
  var hoverColor = (0, _selectors.gray700)(props);
  return (0, _styledComponents.css)(["color:", ";border-color:transparent;background-color:transparent;", "{fill:", ";}&:hover{", "{fill:", ";}color:", ";border-color:transparent;background-color:transparent;text-decoration:underline;}"], color, _StyledIcon.StyledIcon, color, _StyledIcon.StyledIcon, hoverColor, hoverColor);
};

exports.getButtonVariantIcon = getButtonVariantIcon;

var getButtonVariantIconSecondary = function getButtonVariantIconSecondary(props) {
  var color = (0, _selectors.gray500)(props);
  var hoverColor = (0, _selectors.gray700)(props);
  var bgColorHover = (0, _polished.transparentize)(0.95, hoverColor);
  return (0, _styledComponents.css)(["color:", ";border-color:transparent;background-color:transparent;", "{fill:", ";}&:focus,&:hover{", "{fill:", ";}color:", ";border-color:transparent;background-color:", ";text-decoration:underline;}"], color, _StyledIcon.StyledIcon, color, _StyledIcon.StyledIcon, hoverColor, hoverColor, bgColorHover);
};

exports.getButtonVariantIconSecondary = getButtonVariantIconSecondary;

var getButtonVariantIconOutline = function getButtonVariantIconOutline(props) {
  var color = (0, _selectors.gray500)(props);
  var hoverColor = (0, _selectors.gray700)(props);
  return (0, _styledComponents.css)(["color:", ";border-color:transparent;background-color:transparent;", "{fill:", ";}&:hover{", "{fill:", ";}color:", ";border-color:", ";background-color:transparent;text-decoration:underline;}"], color, _StyledIcon.StyledIcon, color, _StyledIcon.StyledIcon, hoverColor, hoverColor, color);
};

exports.getButtonVariantIconOutline = getButtonVariantIconOutline;

var getButtonExpanded = function getButtonExpanded() {
  return (0, _styledComponents.css)(["&.expanded{&.small,&.medium,&.large,&.xlarge{display:block;width:100%;}}"]);
};

exports.getButtonExpanded = getButtonExpanded;

var getButtonDisabled = function getButtonDisabled() {
  return (0, _styledComponents.css)(["cursor:not-allowed;opacity:0.65;"]);
};

exports.getButtonDisabled = getButtonDisabled;

var getButtonLoading = function getButtonLoading(props) {
  return (0, _styledComponents.css)(["", "{", ";}"], _StyledSpinner.StyledSpinner, props.text && "margin-right: .25rem");
};

exports.getButtonLoading = getButtonLoading;

var getButtonCircle = function getButtonCircle(props) {
  var sizeProps = (0, _get["default"])((0, _selectors.buttonSize)(props), props.size);
  var height = sizeProps.height;
  return (0, _styledComponents.css)(["width:", ";border-radius:50%;padding:0;", "{margin:0 auto;}"], height, _StyledIcon.StyledIcon);
};

exports.getButtonCircle = getButtonCircle;

var StyledButton = _styledComponents["default"].button.withConfig({
  displayName: "StyledButton",
  componentId: "jhh19d-0"
})(["", ";", " ", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";", ";"], getButtonBase, function (props) {
  return props.size && getButtonSize;
}, getIconSize, function (props) {
  return props.variant === 'primary' && getButtonVariantPrimary;
}, function (props) {
  return props.variant === 'secondary' && getButtonVariantSecondary;
}, function (props) {
  return props.variant === 'outline' && getButtonVariantOutline;
}, function (props) {
  return props.variant === 'destructive' && getButtonVariantDestructive;
}, function (props) {
  return props.variant === 'link' && getButtonVariantLink;
}, function (props) {
  return props.variant === 'icon' && getButtonVariantIcon;
}, function (props) {
  return props.variant === 'icon-secondary' && getButtonVariantIconSecondary;
}, function (props) {
  return props.variant === 'icon-outline' && getButtonVariantIconOutline;
}, function (props) {
  return props.isCircle && getButtonCircle;
}, function (props) {
  return props.isDisabled && getButtonDisabled;
}, function (props) {
  return props.isLoading && getButtonLoading;
}, function (props) {
  return !props.isExpanded && getButtonExpanded;
});

exports.StyledButton = StyledButton;