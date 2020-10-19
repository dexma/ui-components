"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Row = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("../styles/theme"));

var _StyledRow = require("../styles/components/StyledRow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propTypes = {
  /**
   * Reverse de the direction
   */
  reverse: _propTypes["default"].bool,

  /**
   * Align horizontal items like cell
   */
  alignItems: _propTypes["default"].oneOf(['start', 'center', 'end']),

  /**
   * Theme json based
   */
  theme: _propTypes["default"].shape({})
};
var defaultProps = {
  reverse: false,
  alignItems: 'center',
  theme: _theme["default"]
};

var Row = function Row(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledRow.StyledRow, props);
};

exports.Row = Row;
_StyledRow.StyledRow.displayName = 'StyledRow';
Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

var _default = (0, _styledComponents.withTheme)(Row);

exports["default"] = _default;