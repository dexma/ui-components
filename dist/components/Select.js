"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Select = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSelect = _interopRequireWildcard(require("react-select"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _theme = _interopRequireDefault(require("../styles/theme"));

var _StyledSelect = require("../styles/components/StyledSelect");

var _Icon = _interopRequireDefault(require("./Icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  theme: _propTypes["default"].shape({}),
  children: _propTypes["default"].node
};
var defaultProps = {
  theme: _theme["default"]
};

var _DropdownIndicator = function DropdownIndicator(props) {
  var iconName = props.selectProps.menuIsOpen ? 'chevron_up' : 'chevron_down';
  return _reactSelect.components.DropdownIndicator && /*#__PURE__*/_react["default"].createElement(_reactSelect.components.DropdownIndicator, props, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: iconName,
    size: "medium"
  }));
};

var _ClearIndicator = function ClearIndicator(props) {
  return _reactSelect.components.ClearIndicator && /*#__PURE__*/_react["default"].createElement(_reactSelect.components.ClearIndicator, props, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: "close",
    size: 17
  }));
};

var SelectInput = function SelectInput(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/_react["default"].createElement(_reactSelect.components.Input, _extends({
    "data-testid": "select-input"
  }, props));
};

var _Option = function Option(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    "data-testid": "select-option",
    title: props.label
  }, /*#__PURE__*/_react["default"].createElement(_reactSelect.components.Option, props, props.label));
};

var Select = function Select(props) {
  var theme = props.theme,
      isMulti = props.isMulti;
  var selectProps = (0, _omit["default"])(props, ['theme']);
  var defaultValueSelect = props.defaultValue ? props.defaultValue.label : null;
  var titleSelect = !defaultValueSelect && props.value ? props.value.label : null;
  return /*#__PURE__*/_react["default"].createElement(_StyledSelect.StyledSelect, {
    theme: theme,
    isMulti: isMulti,
    title: titleSelect
  }, /*#__PURE__*/_react["default"].createElement(_reactSelect["default"], _extends({
    "data-testid": "select",
    classNamePrefix: "select-styled",
    optionClassName: "select-option",
    components: {
      DropdownIndicator: function DropdownIndicator(selectProps) {
        return _DropdownIndicator(_objectSpread({}, selectProps));
      },
      ClearIndicator: function ClearIndicator(selectProps) {
        return _ClearIndicator(_objectSpread({}, selectProps));
      },
      Input: function Input(selectProps) {
        return SelectInput(_objectSpread(_objectSpread({}, selectProps), {}, {
          name: props.name
        }));
      },
      Option: function Option(selectProps) {
        return _Option(_objectSpread(_objectSpread({}, selectProps), {}, {
          name: props.name
        }));
      }
    },
    blurInputOnSelect: false,
    maxMenuHeight: 192
  }, selectProps)));
};

exports.Select = Select;
_StyledSelect.StyledSelect.displayName = 'StyledSelect';
Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

var _default = /*#__PURE__*/(0, _react.memo)(Select);

exports["default"] = _default;