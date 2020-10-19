"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledMark = exports.StyledProgress = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _get = _interopRequireDefault(require("lodash/get"));

var _polished = require("polished");

var _selectors = require("../selectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TRANSPARENT = '0.4';

var StyledProgress = _styledComponents["default"].div.withConfig({
  displayName: "StyledProgress",
  componentId: "sc-1vutmkq-0"
})(["display:flex;align-items:center;.outer{flex:1 1 0px;width:auto;.inner{position:relative;display:inline-block;width:100%;vertical-align:middle;background-color:", ";border-radius:0;border-bottom:1px solid ", ";height:8px;.background{position:relative;background-color:", ";border-radius:0;transition:all 0.4s cubic-bezier(0.08,0.82,0.17,1) 0s;height:", ";width:", "%;margin-left:0;}}}.text{margin-left:8px;font-size:", ";line-height:1;white-space:nowrap;text-align:left;vertical-align:middle;word-break:normal;flex:0 0 auto;width:auto;}"], _selectors.progressBackgroundColor, function (props) {
  return (0, _get["default"])(props.theme.color, props.color);
}, function (props) {
  var bgColor = (0, _get["default"])(props.theme.color, props.color);

  if (props.isTransparent) {
    return "".concat((0, _polished.transparentize)(TRANSPARENT, bgColor));
  }

  return bgColor;
}, _selectors.progressHeight, function (props) {
  return props.percent;
}, _selectors.progressFontSize);

exports.StyledProgress = StyledProgress;

var StyledMark = _styledComponents["default"].div.withConfig({
  displayName: "StyledProgress__StyledMark",
  componentId: "sc-1vutmkq-1"
})(["position:absolute;width:1px;height:18px;background:", ";top:-4px;left:", "%;"], function (props) {
  return (0, _get["default"])(props.theme.color, props.color);
}, function (props) {
  return props.value;
});

exports.StyledMark = StyledMark;