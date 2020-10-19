"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDot = exports.StyledDots = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _selectors = require("../selectors");

var _animation = require("../utils/animation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledDot = _styledComponents["default"].div.withConfig({
  displayName: "StyledDots__StyledDot",
  componentId: "sc-98toix-0"
})(["background:", ";display:inline-block;vertical-align:top;width:", "px;height:", "px;border-radius:3em;margin:0 ", "px;animation:", " 1.5s ease-in-out infinite;&:nth-child(1){animation-delay:0s;}&:nth-child(2){animation-delay:0.3s;}&:nth-child(3){animation-delay:0.6s;}&:nth-child(4){animation-delay:0.9s;}"], _selectors.iconColor, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size / 2;
}, _animation.glow);

exports.StyledDot = StyledDot;

var StyledDots = _styledComponents["default"].div.withConfig({
  displayName: "StyledDots",
  componentId: "sc-98toix-1"
})(["display:inline-block;height:", "px;"], function (props) {
  return props.size;
});

exports.StyledDots = StyledDots;