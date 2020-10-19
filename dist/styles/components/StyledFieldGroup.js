"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledFieldGroup = exports.getHorizontal = exports.getVertical = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _StyledButton = require("./StyledButton");

var _selectors = require("../selectors");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getVertical = function getVertical() {
  return (0, _styledComponents.css)(["display:inline-flex;flex-direction:column;align-items:flex-start;justify-content:center;label:not(:last-child){border-bottom-right-radius:0;border-bottom-left-radius:0;}label:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;}label + label{margin-top:-1px;margin-left:0;}"]);
};

exports.getVertical = getVertical;

var getHorizontal = function getHorizontal() {
  return (0, _styledComponents.css)(["display:flex;label:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;}label:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;}label + label{margin-left:-1px;}label:not(:disabled){cursor:pointer;}"]);
};

exports.getHorizontal = getHorizontal;

var StyledFieldGroup = _styledComponents["default"].div.withConfig({
  displayName: "StyledFieldGroup",
  componentId: "sc-83xur9-0"
})(["position:relative;vertical-align:middle;.vertical{", "}.horizontal{", "}label{", ";", " ", ";", ";margin:0;&.active{", ";}&:hover{border-color:", ";background-color:", ";}}.active + .active{border-left:1px solid ", ";}input{opacity:0;width:0px;}"], getVertical, getHorizontal, _StyledButton.getButtonBase, function (props) {
  return props.size && _StyledButton.getButtonSize;
}, _StyledButton.getIconSize, _StyledButton.getButtonVariantSecondary200, _StyledButton.getButtonVariantPrimary, _selectors.gray300, _selectors.gray300, function (props) {
  return (0, _polished.darken)(0.1, (0, _polished.saturate)(0.2, (0, _selectors.primaryColor)(props)));
});

exports.StyledFieldGroup = StyledFieldGroup;