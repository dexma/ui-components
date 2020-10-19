"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tag = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _omit = _interopRequireDefault(require("lodash/omit"));

var _theme = _interopRequireDefault(require("../styles/theme"));

var _StyledTag = require("../styles/components/StyledTag");

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var propTypes = {
  /**
   Color related with theme
   */
  color: _propTypes["default"].string,

  /**
   Icon name that need to be able on the assets/icons
   */
  icon: _propTypes["default"].string,

  /**
   Click event
   */
  onClick: _propTypes["default"].func,

  /**
   Type of a tag
   */
  type: _propTypes["default"].oneOf(['normal', 'rounded']),

  /**
   Variant style
   */
  variant: _propTypes["default"].oneOf(['primary', 'outline']),

  /**
   * Theme json based
   */
  theme: _propTypes["default"].shape({})
};
var defaultProps = {
  theme: _theme["default"],
  type: 'normal',
  variant: 'primary'
};

var Tag = function Tag(props) {
  var icon = props.icon,
      children = props.children;
  var tagProps = (0, _omit["default"])(props, ['icon', 'children']);
  return /*#__PURE__*/_react["default"].createElement(_StyledTag.StyledTag, _extends({
    "data-testid": "tag"
  }, tagProps), icon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: icon,
    size: "small"
  }), children && children);
};

exports.Tag = Tag;
_StyledTag.StyledTag.displayName = 'StyledTag';
Tag.propTypes = propTypes;
Tag.defaultProps = defaultProps;

var _default = (0, _styledComponents.withTheme)(Tag);

exports["default"] = _default;