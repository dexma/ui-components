"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSelect = exports.getSelectSize = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _polished = require("polished");

var _selectors = require("../selectors");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getSelectSize = function getSelectSize(props) {
  return (0, _styledComponents.css)(["font-size:", ";line-height:", ";padding:0 ", ";min-height:", ";height:", ";"], _selectors.selectFontSize, _selectors.selectFontSize, _selectors.selectPaddingX, _selectors.selectHeight, props.isMulti ? 'auto' : (0, _selectors.selectHeight)(props));
};

exports.getSelectSize = getSelectSize;

var StyledSelect = _styledComponents["default"].div.withConfig({
  displayName: "StyledSelect",
  componentId: "sc-5gy5fg-0"
})([".css-1aya2g8{background:", ";border-radius:", ";border:", ";margin:0;padding:0;cursor:text;overflow:hidden;}.css-2o5izw,.css-1aya2g8{height:calc(", " - 2px);line-height:calc(", " - 2px);border-radius:", ";border:", ";}.css-1aya2g8:hover,.css-1aya2g8:focus,.css-2o5izw:hover{border-color:", ";box-shadow:none;}.css-d8oujb{display:none;}.css-15k3avv{background-color:hsl(0,0%,100%);border-radius:0px 0px ", " ", ";border:", ";box-shadow:", ";margin-bottom:0px;margin-top:-1px;position:absolute;width:100%;z-index:1;box-sizing:border-box;}.css-11unzgr{padding-top:0px;padding-bottom:0px;}.css-1ep9fjw{padding:5px;}.css-1sjym57,.css-1rtrksz{padding:0 6px;}.css-rsyb7x{margin:0;padding-bottom:0px;}.css-z5z6cw,.css-v73v8k,.css-wqgs6e{padding:6px 6px;}.css-wqgs6e{background-color:", ";}.css-10odw4q{color:inherit;font-weight:", ";}.css-1alnv5e:hover{background-color:transparent;color:inherit;cursor:pointer;}.select-styled__placeholder{color:", ";font-size:", ";}.select-styled__dropdown-indicator,.select-styled__dropdown-indicator:hover{color:", ";cursor:pointer;}.css-1g6gooi{padding:0px;margin:0px;}.select-styled__menu{box-shadow:", ";}.select-styled__menu-list{padding-bottom:0px;padding-top:0px;}.select-styled__option{color:", ";font-size:", ";text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.select-styled__option,.select-styled__option--is-selected{font-size:", ";padding:0 ", ";height:", ";line-height:", ";}.select-styled__control,.select-styled__control:hover{border:", ";box-shadow:none;}.select-styled__control{border-radius:", ";", ";}.select-styled__indicator-separator{display:none;}.select-styled__value-container{padding:0;}.select-styled__value-container--is-multi{padding:2px 0;.css-1g6gooi{height:", ";line-height:", ";}}.select-styled__multi-value{color:", ";font-size:", ";font-weight:", ";border:0px;background:", ";margin:2px;height:", ";line-height:", ";}.select-styled__multi-value__label{padding:0px 0px 0px 6px;}.select-styled__menu{box-shadow:rgba(0,0,0,0.05) 0px 2px 6px,rgba(0,0,0,0.07) 0px 0px 0px 1px;border-radius:", ";margin-bottom:0px;margin-top:0px;}.select-styled__option--is-selected{background-color:", "!important;color:", ";}.select-styled__control--menu-is-open{border-color:", "!important;}.select-styled__option:active,.select-styled__option--is-focused{background-color:", ";}.select-styled__dropdown-indicator,.select-styled__dropdown-indicator:hover,.select-styled__single-value{font-size:", ";color:", ";padding:0px;}.select-styled__input{input{box-shadow:none !important;outline:none !important;outline:0px !important;}}.select-styled__clear-indicator{padding:0px 2px 0px 0px;cursor:pointer;}"], _selectors.backgroundColor, _selectors.borderRadius, _selectors.border, _selectors.selectHeight, _selectors.selectHeight, _selectors.borderRadius, _selectors.border, _selectors.borderColor, _selectors.borderRadius, _selectors.borderRadius, _selectors.border, _selectors.boxShadowHover, _selectors.backgroundColorSelected, _selectors.fontWeightBold, _selectors.iconColor, _selectors.selectFontSize, _selectors.iconColor, _selectors.boxShadow, _selectors.fontColor, _selectors.selectFontSize, _selectors.selectFontSize, _selectors.selectPaddingX, _selectors.selectHeight, _selectors.selectHeight, _selectors.border, _selectors.borderRadius, getSelectSize, _selectors.tagHeight, _selectors.tagHeight, _selectors.fontColor, _selectors.tagFontSize, _selectors.fontWeightSemiBold, _selectors.gray100, _selectors.tagHeight, _selectors.tagHeight, _selectors.borderRadius, function (props) {
  return (0, _polished.transparentize)(0.6, (0, _selectors.backgroundColorActive)(props));
}, _selectors.fontColor, _selectors.primaryColor, _selectors.backgroundColorSelected, _selectors.selectFontSize, _selectors.fontColor);

exports.StyledSelect = StyledSelect;