"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Icon = exports.getIconSize = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _get = _interopRequireDefault(require("lodash/get"));

var _isNumber = _interopRequireDefault(require("lodash/isNumber"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _icon = _interopRequireDefault(require("../config/icon"));

var _theme = _interopRequireDefault(require("../styles/theme"));

var _StyledIcon = require("../styles/components/StyledIcon");

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var propTypes = {
  name: _propTypes["default"].string.isRequired,
  color: _propTypes["default"].string,
  size: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(_Button.BUTTON_SIZE), _propTypes["default"].number]),
  className: _propTypes["default"].string,
  theme: _propTypes["default"].shape({})
};
var defaultProps = {
  name: 'vader',
  color: 'iconColor',
  size: 'large',
  theme: _theme["default"]
};

var getIconSize = function getIconSize(size) {
  if ((0, _isNumber["default"])(size)) return size;
  if (size === 'small') return 16;
  if (size === 'medium') return 20;
  if (size === 'large') return 24;
  if (size === 'xlarge') return 32;
  return 24;
};

exports.getIconSize = getIconSize;

var getIconPaths = function getIconPaths(name) {
  var config = [];

  _icon["default"].forEach(function (item) {
    if (item.name === name) {
      config = item.icon;
    }
  });

  return config.map(function (itemConfig, i) {
    var tag = itemConfig.tag;

    switch (tag) {
      case 'path':
        var d = itemConfig.d,
            opacity = itemConfig.opacity,
            clipRule = itemConfig.clipRule,
            fillRule = itemConfig.fillRule;
        return /*#__PURE__*/_react["default"].createElement("path", {
          key: i,
          d: d,
          opacity: opacity,
          clipRule: clipRule,
          fillRule: fillRule
        });

      case 'circle':
        var cx = itemConfig.cx,
            cy = itemConfig.cy,
            r = itemConfig.r,
            transform = itemConfig.transform;
        return /*#__PURE__*/_react["default"].createElement("circle", {
          key: i,
          cx: cx,
          cy: cy,
          r: r,
          transform: transform
        });

      default:
        return null;
    }
  });
};

var Icon = function Icon(props) {
  var name = props.name,
      color = props.color,
      size = props.size,
      theme = props.theme;
  var fillColor = (0, _get["default"])(theme, color);
  var pathElements = getIconPaths(name);
  var iconSize = getIconSize(size);
  var iconProps = (0, _omit["default"])(props, ['name', 'color', 'size']);
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    width: iconSize,
    height: iconSize,
    viewBox: "0 0 24 24",
    strokeWidth: "0",
    fill: "currentColor",
    preserveAspectRatio: "xMidYMid meet",
    xmlns: "http://www.w3.org/2000/svg",
    fillColor: fillColor,
    "data-testid": "icon"
  }, iconProps), pathElements);
};

exports.Icon = Icon;
_StyledIcon.StyledIcon.displayName = 'StyledIcon';
Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

var _default = (0, _styledComponents.withTheme)(Icon);

exports["default"] = _default;