"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledLoading = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyledSpinner = require("./StyledSpinner");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StyledLoading = _styledComponents["default"].div.withConfig({
  displayName: "StyledLoading",
  componentId: "sc-1q2opsh-0"
})(["width:100%;height:100%;z-index:999999999;display:flex;align-items:center;justify-content:center;", "{align-self:center;}"], _StyledSpinner.StyledSpinner);

exports.StyledLoading = StyledLoading;