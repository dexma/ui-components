"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Chart = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var _styledComponents = require("styled-components");

var _highcharts = _interopRequireDefault(require("highcharts"));

var _sankey = _interopRequireDefault(require("highcharts/modules/sankey"));

var _exporting = _interopRequireDefault(require("highcharts/modules/exporting"));

var _offlineExporting = _interopRequireDefault(require("highcharts/modules/offline-exporting"));

var _exportData = _interopRequireDefault(require("highcharts/modules/export-data"));

var _boost = _interopRequireDefault(require("highcharts/modules/boost"));

var _theme = _interopRequireDefault(require("../styles/theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(0, _boost["default"])(_highcharts["default"]);
(0, _sankey["default"])(_highcharts["default"]);
(0, _exporting["default"])(_highcharts["default"]);
(0, _offlineExporting["default"])(_highcharts["default"]);
(0, _exportData["default"])(_highcharts["default"]);
var propTypes = {
  options: _propTypes["default"].objectOf(_propTypes["default"].any),
  callback: _propTypes["default"].func,
  theme: _propTypes["default"].shape({})
};
var defaultProps = {
  theme: _theme["default"]
};

var StyledChart = function StyledChart() {
  var backgroundColor = _theme["default"].backgroundColor;
  return {
    chart: {
      backgroundColor: backgroundColor,
      style: {
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
      }
    },
    title: {
      style: {
        fontWeight: 'bold'
      }
    },
    tooltip: {
      backgroundColor: backgroundColor,
      shadow: false
    },
    legend: {
      backgroundColor: backgroundColor,
      itemStyle: {}
    },
    xAxis: {
      labels: {
        style: {}
      }
    },
    yAxis: {
      title: {
        style: {}
      },
      labels: {
        style: {}
      }
    }
  };
};
/*
  exporting: {
    enabled: false
  }
* */


var defaultOptions = {
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  }
};

var Chart = /*#__PURE__*/function (_PureComponent) {
  _inherits(Chart, _PureComponent);

  var _super = _createSuper(Chart);

  function Chart(props) {
    var _this;

    _classCallCheck(this, Chart);

    _this = _super.call(this, props);
    _this.container = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }

  _createClass(Chart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          options = _this$props.options,
          callback = _this$props.callback;
      var newOptions = Object.assign(defaultOptions, options);
      this.chart = _highcharts["default"].chart(this.container.current, newOptions, callback || undefined);
      this.chart.update(StyledChart());
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!(0, _deepEqual["default"])(this.props.options, prevProps.options)) {
        this.chart.update(this.props.options);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.chart) {
        this.chart.destroy();
        this.chart = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.container
      });
    }
  }]);

  return Chart;
}(_react.PureComponent);

exports.Chart = Chart;
Chart.propTypes = propTypes;
Chart.defaultProps = defaultProps;

var _default = /*#__PURE__*/(0, _react.memo)((0, _styledComponents.withTheme)(Chart));

exports["default"] = _default;