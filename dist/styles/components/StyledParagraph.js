"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledParagraph = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledParagraph = _styledComponents["default"].p.withConfig({
  displayName: "StyledParagraph",
  componentId: "l4gls4-0"
})(["margin:", ";color:#404145;font-size:", ";"], function (props) {
  return props.margin;
}, function (props) {
  return props.size;
});

exports.StyledParagraph = StyledParagraph;