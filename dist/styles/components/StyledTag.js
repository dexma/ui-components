"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTag = exports.getTagOutline = exports.getTagPrimary = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _get = _interopRequireDefault(require("lodash/get"));

var _selectors = require("../selectors");

var _StyledIcon = require("./StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getTagPrimary = function getTagPrimary() {
  return (0, _styledComponents.css)(["border-color:transparent;color:", ";", "{fill:", ";}"], _selectors.white, _StyledIcon.StyledIcon, _selectors.white);
};

exports.getTagPrimary = getTagPrimary;

var getTagColor = function getTagColor(props) {
  var theme = props.theme,
      color = props.color;
  return (0, _get["default"])(theme.color, color);
};

var getTagOutline = function getTagOutline(props) {
  var themeColor = getTagColor(props);
  var tagBackgroundColor = (0, _polished.transparentize)(0.9, themeColor);
  var tagColor = (0, _polished.darken)(0.1, themeColor);
  return (0, _styledComponents.css)(["border-color:", ";color:", ";background:", ";", "{fill:", ";}"], themeColor, tagColor, tagBackgroundColor, _StyledIcon.StyledIcon, tagColor);
};

exports.getTagOutline = getTagOutline;

var StyledTag = _styledComponents["default"].div.withConfig({
  displayName: "StyledTag",
  componentId: "sc-7v8rbg-0"
})(["display:inline-flex;align-items:center;padding:", " ", ";font-size:", ";font-weight:", ";line-height:", ";white-space:nowrap;cursor:default;opacity:1;border:", ";background:", ";border-radius:", ";", ";", ";", ";", "{margin-right:2px;margin-left:-2px;}"], _selectors.tagPaddingX, _selectors.tagPaddingY, _selectors.tagFontSize, _selectors.fontWeightSemiBold, _selectors.tagFontSize, _selectors.border, function (props) {
  return props.color && getTagColor(props);
}, function (props) {
  return props.type === 'rounded' ? '16px' : _selectors.borderRadius;
}, function (props) {
  return props.onClick && 'cursor: pointer';
}, function (props) {
  return props.variant === 'primary' && getTagPrimary;
}, function (props) {
  return props.variant === 'outline' && getTagOutline;
}, _StyledIcon.StyledIcon);

exports.StyledTag = StyledTag;