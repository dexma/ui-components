"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Progress = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("../styles/theme"));

var _StyledProgress = require("../styles/components/StyledProgress");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var propTypes = {
  percent: _propTypes["default"].number.isRequired,
  marks: _propTypes["default"].arrayOf(_propTypes["default"].object),
  text: _propTypes["default"].string,
  isTransparent: _propTypes["default"]["boolean"],
  color: _propTypes["default"].oneOf(Object.keys(_theme["default"].color)),
  theme: _propTypes["default"].shape({})
};
var defaultProps = {
  theme: _theme["default"],
  isTransparent: false,
  color: 'green'
};

var Progress = function Progress(props) {
  var text = props.text,
      marks = props.marks;
  return /*#__PURE__*/_react["default"].createElement(_StyledProgress.StyledProgress, props, /*#__PURE__*/_react["default"].createElement("div", {
    className: "outer"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "inner"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "background"
  }), marks && marks.length > 0 ? marks.map(function (mark) {
    return /*#__PURE__*/_react["default"].createElement(_StyledProgress.StyledMark, _extends({}, mark, {
      theme: props.theme
    }));
  }) : null)), text && /*#__PURE__*/_react["default"].createElement("div", {
    className: "text"
  }, text));
};

exports.Progress = Progress;
Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

var _default = (0, _styledComponents.withTheme)(Progress);

exports["default"] = _default;