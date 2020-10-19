"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreakpointsPropTypes = exports.ColumnSizePropTypes = exports.DefaultGeneralPropTypes = exports.GeneralPropTypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("../styles/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GeneralPropTypes = {
  className: _propTypes["default"].string,
  dataCy: _propTypes["default"].string,
  theme: _propTypes["default"].shape({})
};
exports.GeneralPropTypes = GeneralPropTypes;
var DefaultGeneralPropTypes = {
  theme: _theme["default"]
};
exports.DefaultGeneralPropTypes = DefaultGeneralPropTypes;

var ColumnSizePropTypes = _propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].bool]);

exports.ColumnSizePropTypes = ColumnSizePropTypes;

var BreakpointsPropTypes = _propTypes["default"].oneOf(['xs', 'sm', 'md', 'lg']);

exports.BreakpointsPropTypes = BreakpointsPropTypes;