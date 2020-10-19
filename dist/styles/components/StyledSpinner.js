"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSpinner = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _animation = require("../utils/animation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledSpinner = _styledComponents["default"].div.withConfig({
  displayName: "StyledSpinner",
  componentId: "l7kjyp-0"
})(["border-radius:3em;display:inline-block;overflow:hidden;position:relative;transition:all 200ms ease-out;vertical-align:middle;height:", "px;width:", "px;animation:", " 0.7s linear infinite;border-width:2px;border-style:solid;border-color:rgba(0,0,0,0.03);border-top-color:rgba(0,0,0,0.15);margin:0 auto;"], function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, _animation.rotate360);

exports.StyledSpinner = StyledSpinner;