"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTooltip = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTippy = require("react-tippy");

require("react-tippy/dist/tippy.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var withTooltip = function withTooltip(BaseComponent) {
  return function (props) {
    var tooltip = props.tooltip;

    if (tooltip) {
      var size = props.size;
      var tooltipDistance = 20;
      if (size === 'medium') tooltipDistance = 22;
      if (size === 'large') tooltipDistance = 25;
      if (size === 'xlarge') tooltipDistance = 25;
      return /*#__PURE__*/_react["default"].createElement(_reactTippy.Tooltip, {
        title: tooltip,
        position: "bottom",
        trigger: "mouseenter",
        arrow: true,
        distance: tooltipDistance,
        size: "small"
      }, /*#__PURE__*/_react["default"].createElement(BaseComponent, props));
    }

    return /*#__PURE__*/_react["default"].createElement(BaseComponent, props);
  };
};

exports.withTooltip = withTooltip;