"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledGrid = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _selectors = require("../selectors");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getWidthContainer = function getWidthContainer(props) {
  return (0, _styledComponents.css)(["@media only screen and (min-width:48em){max-width:", ";}@media only screen and (min-width:64em){max-width:", ";}@media only screen and (min-width:75em){max-width:", ";}"], (0, _selectors.gridContainerSm)(props), (0, _selectors.gridContainerMd)(props), (0, _selectors.gridContainerLg)(props));
};

var StyledGrid = _styledComponents["default"].div.withConfig({
  displayName: "StyledGrid",
  componentId: "sc-148ukcg-0"
})(["margin-right:auto;margin-left:auto;width:100%;", ";"], function (props) {
  return props.fluid ? (0, _styledComponents.css)(["padding-right:", ";padding-left:", ";"], _selectors.gridOuterPadding, _selectors.gridOuterPadding) : getWidthContainer(props);
});

exports.StyledGrid = StyledGrid;