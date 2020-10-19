"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DatePicker = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDates = require("react-dates");

var _styledComponents = require("styled-components");

var _moment = _interopRequireDefault(require("moment"));

var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes2 = require("../utils/propTypes");

var _Icon = _interopRequireDefault(require("./Icon"));

var _Select = _interopRequireDefault(require("./Select"));

var _dates = require("../utils/dates");

require("react-dates/initialize");

require("react-dates/lib/css/_datepicker.css");

var _StyledDatePicker = require("../styles/components/StyledDatePicker");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

var withDatePickerFormat = function withDatePickerFormat(start, end) {
  return {
    startDate: start,
    endDate: end
  };
};

var custom = function custom() {
  return withDatePickerFormat(null, null);
};

var propTypes = _objectSpread(_objectSpread({}, _propTypes2.GeneralPropTypes), {}, {
  autoFocus: _propTypes["default"].bool,
  autoFocusEndDate: _propTypes["default"].bool,
  stateDateWrapper: _propTypes["default"].func,
  periodOptions: _propTypes["default"].arrayOf(_propTypes["default"].object),
  periodDefault: _propTypes["default"].objectOf(_propTypes["default"].string),
  periodLabel: _propTypes["default"].string,
  initialStartDate: _reactMomentProptypes["default"].momentObj,
  initialEndDate: _reactMomentProptypes["default"].momentObj,
  onDatesChange: _propTypes["default"].func,
  language: _propTypes["default"].string
});

var defaultProps = _objectSpread(_objectSpread({}, _propTypes2.DefaultGeneralPropTypes), {}, {
  autoFocus: false,
  autoFocusEndDate: false,
  stateDateWrapper: function stateDateWrapper(date) {
    return date;
  },
  startDateId: _dates.START_DATE,
  endDateId: _dates.END_DATE,
  numberOfMonths: _dates.NUMBER_OF_MONTHS,
  language: 'en'
});

var DatePicker = /*#__PURE__*/function (_PureComponent) {
  _inherits(DatePicker, _PureComponent);

  var _super = _createSuper(DatePicker);

  function DatePicker(props) {
    var _this;

    _classCallCheck(this, DatePicker);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "onDatesChange", function (_ref) {
      var startDate = _ref.startDate,
          endDate = _ref.endDate;
      var _this$props = _this.props,
          stateDateWrapper = _this$props.stateDateWrapper,
          onDatesChange = _this$props.onDatesChange;
      var start = startDate ? stateDateWrapper(startDate) : null;
      var end = endDate ? stateDateWrapper(endDate) : null;

      _this.setState({
        startDate: start,
        endDate: end
      }, function () {
        return onDatesChange && onDatesChange({
          startDate: start,
          endDate: end
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onFocusChange", function (focusedInput) {
      _this.setState({
        focusedInput: focusedInput
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectChange", function (_ref2) {
      var value = _ref2.value;

      var ranges = _this.datePickerRange(value, withDatePickerFormat);

      if (value === 'custom') {
        _this.onFocusChange(_dates.START_DATE);
      }

      _this.onDatesChange(ranges);
    });

    _defineProperty(_assertThisInitialized(_this), "datePickerRange", function (range) {
      var parser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (date) {
        return date;
      };
      if (range === _dates.DATE_RANGE.TODAY) return (0, _dates.today)(parser);
      if (range === _dates.DATE_RANGE.YESTERDAY) return (0, _dates.yesterday)(parser);
      if (range === _dates.DATE_RANGE.LAST_7_DAYS) return (0, _dates.last7Days)(parser);
      if (range === _dates.DATE_RANGE.LAST_28_DAYS) return (0, _dates.last28Days)(parser);
      if (range === _dates.DATE_RANGE.CURRENT_MONTH) return (0, _dates.currentMonth)(parser);
      if (range === _dates.DATE_RANGE.LAST_MONTH) return (0, _dates.lastMonth)(parser);
      if (range === _dates.DATE_RANGE.YEAR_TO_DATE) return (0, _dates.yearToDate)(parser);
      if (range === _dates.DATE_RANGE.PREVIOUS_YEAR) return (0, _dates.previousYear)(parser);
      if (range === _dates.DATE_RANGE.CUSTOM) return custom();
      return null;
    });

    var _focusedInput = null;

    if (props.autoFocus) {
      _focusedInput = _dates.START_DATE;
    } else if (props.autoFocusEndDate) {
      _focusedInput = _dates.END_DATE;
    }

    _this.state = {
      focusedInput: _focusedInput,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate
    };
    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          periodDefault = _this$props2.periodDefault,
          language = _this$props2.language;

      _moment["default"].locale(language);

      var ranges = periodDefault && periodDefault.value ? this.datePickerRange(periodDefault.value, withDatePickerFormat) : null;

      if (ranges) {
        this.onDatesChange(ranges);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          focusedInput = _this$state.focusedInput,
          startDate = _this$state.startDate,
          endDate = _this$state.endDate;
      var dateRangePickerProps = (0, _omit["default"])(this.props, ['classNamePrefix', 'autoFocus', 'autoFocusEndDate', 'initialStartDate', 'initialEndDate', 'stateDateWrapper', 'periodOptions', 'periodDefault']);
      var _this$props3 = this.props,
          periodOptions = _this$props3.periodOptions,
          periodDefault = _this$props3.periodDefault,
          periodLabel = _this$props3.periodLabel,
          theme = _this$props3.theme,
          dataCy = _this$props3.dataCy;
      var classes = (0, _classnames["default"])('date-range', periodOptions && "with-select");
      return /*#__PURE__*/_react["default"].createElement(_StyledDatePicker.StyledDatePicker, {
        theme: theme,
        focusedInput: focusedInput,
        withSelect: periodOptions
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: classes,
        "data-cy": dataCy
      }, /*#__PURE__*/_react["default"].createElement(_reactDates.DateRangePicker, _extends({}, dateRangePickerProps, {
        startDate: startDate,
        endDate: endDate,
        focusedInput: focusedInput,
        onDatesChange: this.onDatesChange,
        onFocusChange: this.onFocusChange,
        noBorder: true,
        daySize: _dates.DAY_SIZE,
        horizontalMonthPadding: 10,
        transitionDuration: 0,
        hideKeyboardShortcutsPanel: true,
        isOutsideRange: function isOutsideRange() {
          return false;
        },
        customArrowIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          name: "arrow_left",
          size: "small"
        }),
        displayFormat: _dates.ISO_FORMAT,
        minimumNights: 0,
        customInputIcon: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          name: "calendar_range",
          size: "xlarge",
          color: "gray500"
        }),
        navPrev: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          name: "chevron_left_l",
          size: 10,
          color: "gray600"
        }),
        navNext: /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
          name: "chevron_right_l",
          size: 10,
          color: "gray600"
        })
      }))), periodOptions && /*#__PURE__*/_react["default"].createElement("div", {
        className: "select"
      }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        options: periodOptions,
        defaultValue: periodDefault,
        placeholder: periodLabel,
        onChange: this.onSelectChange,
        isSearchable: false
      })));
    }
  }]);

  return DatePicker;
}(_react.PureComponent);

exports.DatePicker = DatePicker;
_StyledDatePicker.StyledDatePicker.displayName = 'StyledDatePicker';
DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;

var _default = (0, _styledComponents.withTheme)(DatePicker);

exports["default"] = _default;