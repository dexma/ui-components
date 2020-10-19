"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledButtonGroup = exports.getButtonGroupBase = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _StyledButton = require("./StyledButton");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getButtonGroupBase = function getButtonGroupBase() {
  return (0, _styledComponents.css)(["", "{margin-right:0;&:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;}&:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;}&:focus,&:active,&.active{box-shadow:none;}}"], _StyledButton.StyledButton);
};

exports.getButtonGroupBase = getButtonGroupBase;

var StyledButtonGroup = _styledComponents["default"].div.withConfig({
  displayName: "StyledButtonGroup",
  componentId: "sc-1j6o32-0"
})(["", ";"], getButtonGroupBase);

exports.StyledButtonGroup = StyledButtonGroup;