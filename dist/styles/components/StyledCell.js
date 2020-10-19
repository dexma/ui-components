"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledCell = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _isNumber = _interopRequireDefault(require("lodash/isNumber"));

var _selectors = require("../selectors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var precentage = function precentage(number) {
  return number * 100;
};

var isColumnFull = function isColumnFull(value) {
  return !(0, _isNumber["default"])(value);
};

var getColumnFull = function getColumnFull() {
  return "{\n      flex-grow: 1;\n      flex-basis: 0;\n      max-width: 100%;      \n    }";
};

var getColumn = function getColumn(size, columns) {
  return "\n    flex: 0 0 ".concat(precentage(size / columns), "%;\n    max-width: ").concat(precentage(size / columns), "%;\n  ");
};

var getColumnOffset = function getColumnOffset(size, columns) {
  return "\n    margin-left: ".concat(precentage(size / columns), "%;\n  ");
};

var getColumns = function getColumns(props, breakpoint) {
  var columns = (0, _selectors.gridColumns)(props);
  return isColumnFull(breakpoint) ? getColumnFull(breakpoint) : getColumn(breakpoint, columns);
};

var getColumnsOffset = function getColumnsOffset(props, breakpoint) {
  var columns = (0, _selectors.gridColumns)(props);
  return getColumnOffset(breakpoint, columns);
};

var StyledCell = _styledComponents["default"].div.withConfig({
  displayName: "StyledCell",
  componentId: "si3ixd-0"
})(["box-sizing:border-box;flex:0 0 auto;padding-right:", ";padding-left:", ";flex-basis:0;flex-grow:1;max-width:100%;", " ", ";", ";@media only screen and (min-width:48em){", ";", ";}@media only screen and (min-width:64em){", ";", ";}@media only screen and (min-width:75em){", ";", ";}"], _selectors.gridHalfGutterWidth, _selectors.gridHalfGutterWidth, function (props) {
  return props.direction === 'left' && "left: 0; display: none";
}, function (props) {
  return props.xs && getColumns(props, props.xs);
}, function (props) {
  return props.xsOffset && getColumnsOffset(props, props.xsOffset);
}, function (props) {
  return props.sm && getColumns(props, props.sm);
}, function (props) {
  return props.smOffset && getColumnsOffset(props, props.smOffset);
}, function (props) {
  return props.md && getColumns(props, props.md);
}, function (props) {
  return props.mdOffset && getColumnsOffset(props, props.mdOffset);
}, function (props) {
  return props.lg && getColumns(props, props.lg);
}, function (props) {
  return props.lgOffset && getColumnsOffset(props, props.lgOffset);
});

exports.StyledCell = StyledCell;