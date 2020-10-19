"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Dropdown = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _antd = require("antd");

var _theme = _interopRequireDefault(require("../styles/theme"));

var _Button = _interopRequireDefault(require("./Button"));

var _StyledDropdown = require("../styles/components/StyledDropdown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react/button-has-type */
var propTypes = {
  placement: _propTypes["default"].string,
  trigger: _propTypes["default"].string,
  content: _propTypes["default"].func,
  children: _propTypes["default"].node,
  text: _propTypes["default"].string,
  theme: _propTypes["default"].shape({})
};
var defaultProps = {
  placement: 'bottomRight',
  trigger: 'hover',
  variant: 'primary',
  text: null,
  theme: _theme["default"]
};

var getContent = function getContent(content) {
  return content.map(function (itemContent) {
    var icon = itemContent.icon,
        text = itemContent.text,
        onClick = itemContent.onClick;
    return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      className: "dropdown-button-item",
      variant: "icon",
      onClick: onClick,
      iconBefore: icon,
      text: text
    });
  });
};

var Dropdown = function Dropdown(props) {
  var trigger = props.trigger,
      text = props.text,
      placement = props.placement,
      content = props.content,
      icon = props.icon;
  var renderContent = content ? getContent(content) : null;
  return /*#__PURE__*/_react["default"].createElement(_antd.Popover, {
    content: renderContent,
    title: null,
    trigger: trigger,
    placement: placement
  }, /*#__PURE__*/_react["default"].createElement(_StyledDropdown.StyledGlobalDropdown, props), text && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: "dropdown-button",
    variant: "icon",
    iconBefore: icon,
    text: text
  }), !text && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    className: "dropdown-button",
    variant: "icon-secondary",
    iconBefore: icon,
    text: null,
    isCircle: true
  }));
};

exports.Dropdown = Dropdown;
Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

var _default = /*#__PURE__*/(0, _react.memo)((0, _styledComponents.withTheme)(Dropdown));

exports["default"] = _default;