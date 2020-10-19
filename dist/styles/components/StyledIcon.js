"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledIcon = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledIcon = _styledComponents["default"].svg.withConfig({
  displayName: "StyledIcon",
  componentId: "ifbl6q-0"
})(["fill:", ";height:", ";"], function (props) {
  return props.fillColor;
}, function (props) {
  return props.height;
});

exports.StyledIcon = StyledIcon;