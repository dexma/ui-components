"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCardLink = exports.StyledCard = exports.getTextTruncate = exports.getHorizontal = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _selectors = require("../selectors");

var _StyledIcon = require("./StyledIcon");

var _StyledParagraph = require("./StyledParagraph");

var _StyledButton = require("./StyledButton");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getHorizontal = function getHorizontal() {
  return (0, _styledComponents.css)(["flex-direction:row;.card-header{width:33.33333333%;}.horizontal{flex-direction:column;width:66.66666667%;display:flex;.card-body{flex:1 1 100%;align-items:flex-start;justify-content:center;display:flex;flex-direction:column;padding:1.25rem;}.card-footer{width:100%;flex:auto;}}"]);
};

exports.getHorizontal = getHorizontal;

var getTextTruncate = function getTextTruncate() {
  return (0, _styledComponents.css)(["white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"]);
};

exports.getTextTruncate = getTextTruncate;
var getStyleCard = (0, _styledComponents.css)(["position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box;background-color:", ";border-radius:", ";box-shadow:", ";overflow:hidden;width:100%;&:hover{box-shadow:", ";.card-body,.card-footer{background:", ";}}> hr{margin-right:0;margin-left:0;}.card-header{display:flex;flex-shrink:0;width:100%;background-color:", ";.card-img,", "{width:100%;align-self:center;object-fit:cover;height:100%;}}.card-body{flex:1 1 auto;min-height:1px;padding:", ";color:", ";.card-title{margin-bottom:", ";font-weight:", ";font-size:", ";color:", ";line-height:", ";}.card-subtitle{margin-bottom:0;font-size:", ";color:", ";font-weight:", ";}", "{font-size:", ";color:", ";}.card-text:last-child{margin-bottom:0;}.card-link{&:hover{text-decoration:none;}+ .card-link{margin-left:", ";}}}.card-footer{padding:0 ", " ", " ", ";a,div,", "{margin:0;}}", ";"], _selectors.gray100, _selectors.borderRadius, _selectors.boxShadow, _selectors.boxShadowHover, _selectors.backgroundColor, _selectors.backgroundColor, _StyledIcon.StyledIcon, function (props) {
  return props.hasFooter ? (0, _styledComponents.css)(["", " ", " ", " ", ""], _selectors.cardPaddingX, _selectors.cardPaddingX, _selectors.cardPaddingY, _selectors.cardPaddingX) : _selectors.cardPaddingX;
}, _selectors.fontColor, _selectors.cardPaddingY, _selectors.fontWeightSemiBold, _selectors.cardFontSize, _selectors.gray900, _selectors.cardLineHeight, _selectors.fontSize, _selectors.gray700, _selectors.fontWeightNormal, _StyledParagraph.StyledParagraph, _selectors.fontSize, _selectors.gray500, _selectors.cardPaddingX, _selectors.cardPaddingX, _selectors.cardPaddingX, _selectors.cardPaddingX, _StyledButton.StyledButton, function (props) {
  return props.isHorizontal && getHorizontal;
});

var StyledCard = _styledComponents["default"].div.withConfig({
  displayName: "StyledCard",
  componentId: "sc-1qhq6a2-0"
})(["", ";"], getStyleCard);

exports.StyledCard = StyledCard;

var StyledCardLink = _styledComponents["default"].a.withConfig({
  displayName: "StyledCard__StyledCardLink",
  componentId: "sc-1qhq6a2-1"
})(["", ";"], getStyleCard);

exports.StyledCardLink = StyledCardLink;