"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SwitchPeriodComparative = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _propTypes2 = require("../utils/propTypes");

var _dates = require("../utils/dates");

var _StyledSwitchPeriodComparative = require("../styles/components/StyledSwitchPeriodComparative");

var _FieldGroup = _interopRequireDefault(require("./FieldGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getRangeDaysBetweenTwoDates = function getRangeDaysBetweenTwoDates(startDate, endDate) {
  var start = (0, _moment["default"])(new Date(startDate)).startOf('day');
  var end = (0, _moment["default"])(new Date(endDate)).startOf('day');

  var duration = _moment["default"].duration(end.diff(start));

  return duration.asDays();
};

var getDayBefore = function getDayBefore(date, days) {
  return (0, _moment["default"])(new Date(date)).subtract(days, 'd');
};

var getYearBefore = function getYearBefore(date, years) {
  return (0, _moment["default"])(new Date(date)).subtract(years, 'y');
};

var propTypes = _objectSpread(_objectSpread({}, _propTypes2.GeneralPropTypes), {}, {
  startDate: _propTypes["default"].string.isRequired,
  endDate: _propTypes["default"].string.isRequired,
  previousPriodText: _propTypes["default"].string,
  samePriodLastYearText: _propTypes["default"].string,
  onPeriodSelect: _propTypes["default"].func
});

var defaultProps = _objectSpread({}, _propTypes2.DefaultGeneralPropTypes);

var SwitchPeriodComparative = /*#__PURE__*/function (_PureComponent) {
  _inherits(SwitchPeriodComparative, _PureComponent);

  var _super = _createSuper(SwitchPeriodComparative);

  function SwitchPeriodComparative(props) {
    var _this;

    _classCallCheck(this, SwitchPeriodComparative);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "previousDate", function (startDate, endDate) {
      if (!startDate || !endDate) return null;
      var rangeDaysBetweenTwoDates = getRangeDaysBetweenTwoDates(startDate, endDate);
      var end = getDayBefore(startDate, 1).endOf('day');
      var start = getDayBefore(end, rangeDaysBetweenTwoDates).startOf('day');
      return [start.format(_dates.ISO_FORMAT), end.format(_dates.ISO_FORMAT)];
    });

    _defineProperty(_assertThisInitialized(_this), "samePeriodLastYear", function (startDate, endDate) {
      if (!startDate || !endDate) return null;
      var start = (0, _moment["default"])(new Date(startDate)).startOf('day');
      var end = (0, _moment["default"])(new Date(endDate)).startOf('day');
      var startYearBefore = getYearBefore(start, 1);
      var endYearBefore = getYearBefore(end, 1);
      return [startYearBefore.format(_dates.ISO_FORMAT), endYearBefore.format(_dates.ISO_FORMAT)];
    });

    _defineProperty(_assertThisInitialized(_this), "changePeriod", function (value) {
      _this.setState({
        activePeriod: value
      }, function () {
        return _this.callOnPeriodSelect();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "callOnPeriodSelect", function () {
      var onPeriodSelect = _this.props.onPeriodSelect;
      return onPeriodSelect && onPeriodSelect(_this.activePeriodDates);
    });

    _defineProperty(_assertThisInitialized(_this), "formatDate", function (start, end) {
      var startDate = (0, _moment["default"])(start, _dates.ISO_FORMAT).startOf('day');
      var endDate = (0, _moment["default"])(end, _dates.ISO_FORMAT).endOf('day');
      return {
        startDate: startDate,
        endDate: endDate
      };
    });

    _defineProperty(_assertThisInitialized(_this), "renderPeriodComparativeItem", function (text, date) {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "compare-period-item"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "title"
      }, text), /*#__PURE__*/_react["default"].createElement("div", {
        className: "dates"
      }, date));
    });

    _this.state = {
      activePeriod: 'previous_period' // todo enum

    };
    _this.activePeriodDates = [];
    return _this;
  }

  _createClass(SwitchPeriodComparative, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.callOnPeriodSelect();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var activePeriod = this.state.activePeriod;
      var _this$props = this.props,
          startDate = _this$props.startDate,
          endDate = _this$props.endDate,
          previousPriodText = _this$props.previousPriodText,
          samePriodLastYearText = _this$props.samePriodLastYearText,
          theme = _this$props.theme;

      var _this$previousDate = this.previousDate(startDate, endDate),
          _this$previousDate2 = _slicedToArray(_this$previousDate, 2),
          previousStartDate = _this$previousDate2[0],
          previousEndDate = _this$previousDate2[1];

      var _this$samePeriodLastY = this.samePeriodLastYear(startDate, endDate),
          _this$samePeriodLastY2 = _slicedToArray(_this$samePeriodLastY, 2),
          lastYearStartDate = _this$samePeriodLastY2[0],
          lastYearEndDate = _this$samePeriodLastY2[1];

      this.activePeriodDates = activePeriod === 'previous_period' ? this.formatDate(previousStartDate, previousEndDate) : this.formatDate(lastYearStartDate, lastYearEndDate);
      var previousPriod = "".concat(previousStartDate, " - ").concat(previousEndDate);
      var samePriodLastYear = "".concat(lastYearStartDate, " - ").concat(lastYearEndDate);
      return /*#__PURE__*/_react["default"].createElement(_StyledSwitchPeriodComparative.StyledSwitchPeriodComparative, {
        theme: theme
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "compare-period"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "compare-period-container"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        values: [{
          value: 'previous_period',
          label: this.renderPeriodComparativeItem(previousPriodText, previousPriod),
          id: 'previous_period',
          name: 'previous_period'
        }, {
          value: 'last_period',
          label: this.renderPeriodComparativeItem(samePriodLastYearText, samePriodLastYear),
          id: 'last_period',
          name: 'last_period'
        }],
        selectedValues: activePeriod,
        type: "radio",
        onChange: function onChange(item) {
          return _this2.changePeriod(item.value);
        }
      }))));
    }
  }]);

  return SwitchPeriodComparative;
}(_react.PureComponent);

exports.SwitchPeriodComparative = SwitchPeriodComparative;
_StyledSwitchPeriodComparative.StyledSwitchPeriodComparative.displayName = 'StyledSwitchPeriodComparative';
SwitchPeriodComparative.propTypes = propTypes;
SwitchPeriodComparative.defaultProps = defaultProps;
var _default = SwitchPeriodComparative;
exports["default"] = _default;