"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FieldGroup = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _find = _interopRequireDefault(require("lodash/find"));

var _set = _interopRequireDefault(require("lodash/set"));

var _styledComponents = require("styled-components");

var _propTypes2 = require("../utils/propTypes");

var _Icon = _interopRequireDefault(require("./Icon"));

var _Button = require("./Button");

var _StyledFieldGroup = require("../styles/components/StyledFieldGroup");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = _objectSpread(_objectSpread({}, _propTypes2.GeneralPropTypes), {}, {
  type: _propTypes["default"].oneOf(['radio', 'checkbox']).isRequired,
  values: _propTypes["default"].arrayOf(_propTypes["default"].object),
  selectedValues: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number, _propTypes["default"].array]),
  size: _propTypes["default"].oneOf(_Button.BUTTON_SIZE),
  name: _propTypes["default"].string,
  vertical: _propTypes["default"].bool,
  onChange: _propTypes["default"].func,
  onFieldClick: _propTypes["default"].func
});

var defaultProps = _objectSpread(_objectSpread({}, _propTypes2.DefaultGeneralPropTypes), {}, {
  type: 'radio',
  vertical: false,
  size: 'medium'
});

var getSelectedField = function getSelectedField(type, values, selectedValues, selectedProp) {
  var selectedItem = false;

  if (type === 'radio') {
    var objectToSelect = (0, _set["default"])({}, selectedProp, selectedValues);
    selectedItem = (0, _find["default"])(values, objectToSelect) || false;
  }

  if (type === 'checkbox') {
    selectedItem = selectedValues.map(function (item) {
      var objectToSelect = (0, _set["default"])({}, selectedProp, item);
      return (0, _find["default"])(values, objectToSelect) || false;
    });
  }

  return selectedItem;
};

var isFieldSelected = function isFieldSelected(type, item, selectedField) {
  var isEqual = false;

  if (type === 'radio') {
    isEqual = !!(item === selectedField);
  }

  if (type === 'checkbox') {
    isEqual = !!(0, _find["default"])(selectedField, item);
  }

  return isEqual;
};

var FieldGroup = function FieldGroup(_ref) {
  var type = _ref.type,
      values = _ref.values,
      selectedValues = _ref.selectedValues,
      size = _ref.size,
      name = _ref.name,
      vertical = _ref.vertical,
      _onChange = _ref.onChange,
      onFieldClick = _ref.onFieldClick,
      dataCy = _ref.dataCy,
      theme = _ref.theme;
  var classes = (0, _classnames["default"])(vertical ? 'vertical' : 'horizontal');
  var selectedField = getSelectedField(type, values, selectedValues, 'value');
  return /*#__PURE__*/_react["default"].createElement(_StyledFieldGroup.StyledFieldGroup, {
    theme: theme,
    size: size
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "data-cy": dataCy,
    className: classes
  }, values.map(function (item) {
    var id = item.id,
        value = item.value,
        label = item.label,
        icon = item.icon,
        tooltip = item.tooltip;
    var isSelected = isFieldSelected(type, item, selectedField);
    var classesItem = (0, _classnames["default"])('item', "item-".concat(label), isSelected && 'active');
    return (
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
      _react["default"].createElement("label", {
        className: classesItem,
        "data-tooltip": tooltip,
        htmlFor: id,
        key: id,
        onClick: function onClick() {
          return onFieldClick && onFieldClick(item);
        }
      }, !icon && label ? label : null, icon ? /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        name: icon,
        size: size,
        color: "white"
      }) : null, /*#__PURE__*/_react["default"].createElement("input", {
        id: id,
        onChange: function onChange() {
          return _onChange && _onChange(item);
        },
        type: type,
        name: name,
        value: value,
        checked: isSelected
      }))
    );
  })));
};

exports.FieldGroup = FieldGroup;
_StyledFieldGroup.StyledFieldGroup.displayName = 'StyledFieldGroup';
FieldGroup.propTypes = propTypes;
FieldGroup.defaultProps = defaultProps;

var _default = /*#__PURE__*/(0, _react.memo)((0, _styledComponents.withTheme)(FieldGroup));

exports["default"] = _default;