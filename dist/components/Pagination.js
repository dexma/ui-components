"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Pagination = exports.itemRender = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _styledComponents = require("styled-components");

var _propTypes = require("../utils/propTypes");

var _Icon = _interopRequireDefault(require("./Icon"));

var _StyledPagination = require("../styles/components/StyledPagination");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = _objectSpread({}, _propTypes.GeneralPropTypes);

var defaultProps = _objectSpread({}, _propTypes.DefaultGeneralPropTypes);

var itemRender = function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "chevron_left_l",
      color: "gray900",
      size: 12
    });
  }

  if (type === 'next') {
    return /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      name: "chevron_right_l",
      color: "gray900",
      size: 12
    });
  }

  return originalElement;
};

exports.itemRender = itemRender;

var Pagination = function Pagination(_ref) {
  var theme = _ref.theme,
      dataCy = _ref.dataCy,
      props = _objectWithoutProperties(_ref, ["theme", "dataCy"]);

  return /*#__PURE__*/_react["default"].createElement(_StyledPagination.StyledPagination, {
    theme: theme
  }, /*#__PURE__*/_react["default"].createElement(_antd.Pagination, _extends({
    itemRender: itemRender
  }, props)));
};

exports.Pagination = Pagination;
_StyledPagination.StyledPagination.displayName = 'StyledPagination';
Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

var _default = /*#__PURE__*/(0, _react.memo)((0, _styledComponents.withTheme)(Pagination));

exports["default"] = _default;