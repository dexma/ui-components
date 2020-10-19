"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTooltip = exports.getTooltipSize = void 0;

var _styledComponents = require("styled-components");

var _get = _interopRequireDefault(require("lodash/get"));

var _selectors = require("../selectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Handy CSS animations for micro-interactions
var getTooltipSize = function getTooltipSize(props) {
  var sizeProps = (0, _get["default"])((0, _selectors.buttonSize)(props), props.size);
  var paddingX = sizeProps.paddingX,
      fontSize = sizeProps.fontSize;
  return (0, _styledComponents.css)(["font-size:", ";padding:0 ", ";"], fontSize, paddingX);
};

exports.getTooltipSize = getTooltipSize;
var getTooltip = (0, _styledComponents.css)(["&[data-tooltip]{position:relative;transition:all 0.3s;outline:none;i{opacity:0.3;}&::before{content:'';position:absolute;top:-6px;left:50%;transform:translateX(-50%);border-width:4px 6px 0 6px;border-style:solid;border-color:rgba(0,0,0,0.8) transparent transparent transparent;z-index:100;}&::after{text-shadow:none;content:attr(data-tooltip);position:absolute;left:50%;top:-6px;transform:translateX(-50%) translateY(-100%);background:rgba(0,0,0,0.8);text-align:center;color:#fff;border-radius:4px;pointer-events:none;display:flex;flex-direction:row;margin:0;justify-content:center;align-items:center;align-content:center;z-index:99999;", "}}"], function (props) {
  return props.size && getTooltipSize;
});
exports.getTooltip = getTooltip;