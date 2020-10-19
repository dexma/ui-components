"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInput = exports.getIcon = exports.getLoading = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _selectors = require("../selectors");

var _StyledSpinner = require("./StyledSpinner");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getLoading = function getLoading() {
  return (0, _styledComponents.css)(["border:", ";border-radius:", ";input{padding-right:40px;}", "{position:absolute;right:10px;top:6.5px;}"], _selectors.border, _selectors.borderRadius, _StyledSpinner.StyledSpinner);
};

exports.getLoading = getLoading;

var getIcon = function getIcon() {
  return (0, _styledComponents.css)(["border:", ";border-radius:", ";input{padding-left:0;border:none;}.icon-container{height:", ";line-height:", ";display:inline-flex;border-radius:", " 0 0 ", ";padding:0 0.5rem;display:flex;align-items:center;}"], _selectors.border, _selectors.borderRadius, _selectors.inputHeight, _selectors.inputHeight, _selectors.borderRadius, _selectors.borderRadius);
};

exports.getIcon = getIcon;

var StyledInput = _styledComponents["default"].div.withConfig({
  displayName: "StyledInput",
  componentId: "sc-1u7by5a-0"
})(["position:relative;zoom:1;display:flex;justify-content:center;align-items:center;input{border:", ";border-radius:", ";padding:0 ", ";height:", ";line-height:", ";font-size:", ";display:inline-flex;flex:1 1 auto;width:100%;color:", ";}", ";", ";"], _selectors.border, _selectors.borderRadius, _selectors.inputPaddingX, _selectors.inputHeight, _selectors.inputHeight, _selectors.inputFontSize, _selectors.gray500, function (props) {
  return props.icon && getIcon;
}, function (props) {
  return props.isLoading && getLoading;
});

exports.StyledInput = StyledInput;