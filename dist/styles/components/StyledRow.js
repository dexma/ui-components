"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRow = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _selectors = require("../selectors");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getAlignItems = function getAlignItems(align) {
  var newAlign = '';
  if (align === 'start') newAlign = 'flex-start';
  if (align === 'center') newAlign = 'center';
  if (align === 'end') newAlign = 'flex-end';
  return (0, _styledComponents.css)(["align-items:", ";"], newAlign);
};

var StyledRow = _styledComponents["default"].div.withConfig({
  displayName: "StyledRow",
  componentId: "sc-16zhca2-0"
})(["box-sizing:border-box;display:flex;flex:0 1 auto;flex-direction:row;flex-wrap:wrap;margin-right:", ";margin-left:", ";", ";", ";"], _selectors.gridGutterCompensation, _selectors.gridGutterCompensation, function (props) {
  return props.reverse && (0, _styledComponents.css)(["flex-direction:row-reverse;"]);
}, function (props) {
  return props.alignItems && getAlignItems(props.alignItems);
});

exports.StyledRow = StyledRow;