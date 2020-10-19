"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Card = exports.CardFooter = exports.CardBody = exports.CardHeader = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = require("styled-components");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes2 = require("../utils/propTypes");

var _Icon = _interopRequireDefault(require("./Icon"));

var _Paragraph = _interopRequireDefault(require("./Paragraph"));

var _StyledCard = require("../styles/components/StyledCard");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = _objectSpread(_objectSpread({}, _propTypes2.GeneralPropTypes), {}, {
  link: _propTypes["default"].string,
  title: _propTypes["default"].string,
  titleTruncated: _propTypes["default"].bool,
  subtitle: _propTypes["default"].string,
  description: _propTypes["default"].string,
  icon: _propTypes["default"].string,
  image: _propTypes["default"].string,
  footer: _propTypes["default"].node,
  isActive: _propTypes["default"].bool,
  isLoading: _propTypes["default"].bool,
  isHorizontal: _propTypes["default"].bool,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func
});

var defaultProps = _objectSpread(_objectSpread({}, _propTypes2.DefaultGeneralPropTypes), {}, {
  titleTruncated: false,
  isActive: false,
  isWhite: false,
  isLoading: false,
  isHorizontal: false
});

var CardHeader = function CardHeader(_ref) {
  var image = _ref.image,
      icon = _ref.icon;
  if (!image && !icon) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-header"
  }, image && !icon && /*#__PURE__*/_react["default"].createElement("img", {
    alt: "card-header",
    src: image,
    className: "card-img card-img-top"
  }), icon && !image && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
    name: icon,
    color: "iconColor"
  }));
};

exports.CardHeader = CardHeader;

var CardBody = function CardBody(_ref2) {
  var title = _ref2.title,
      subtitle = _ref2.subtitle,
      description = _ref2.description;
  if (!title && !subtitle && !description) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-body"
  }, title && /*#__PURE__*/_react["default"].createElement("h5", {
    className: "card-title"
  }, title), subtitle && /*#__PURE__*/_react["default"].createElement("h6", {
    className: "card-subtitle"
  }, subtitle), description && /*#__PURE__*/_react["default"].createElement(_Paragraph["default"], null, description));
};

exports.CardBody = CardBody;

var CardFooter = function CardFooter(_ref3) {
  var footer = _ref3.footer;
  if (!footer) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-footer"
  }, footer);
};

exports.CardFooter = CardFooter;

var Card = function Card(_ref4) {
  var titleTruncated = _ref4.titleTruncated,
      link = _ref4.link,
      title = _ref4.title,
      subtitle = _ref4.subtitle,
      description = _ref4.description,
      icon = _ref4.icon,
      image = _ref4.image,
      footer = _ref4.footer,
      isActive = _ref4.isActive,
      isLoading = _ref4.isLoading,
      isHorizontal = _ref4.isHorizontal,
      onClick = _ref4.onClick,
      onFocus = _ref4.onFocus,
      theme = _ref4.theme,
      dataCy = _ref4.dataCy;
  var classes = (0, _classnames["default"])(isActive && 'active');
  var CardComponent = link ? _StyledCard.StyledCardLink : _StyledCard.StyledCard;
  return /*#__PURE__*/_react["default"].createElement(CardComponent, {
    titleTruncated: titleTruncated,
    "data-cy": dataCy,
    className: classes,
    onClick: onClick,
    onFocus: onFocus,
    image: image,
    hasFooter: footer,
    isActive: isActive,
    isLoading: isLoading,
    isHorizontal: isHorizontal,
    theme: theme,
    href: link
  }, /*#__PURE__*/_react["default"].createElement(CardHeader, {
    image: image,
    icon: icon
  }), isHorizontal ? /*#__PURE__*/_react["default"].createElement("div", {
    className: "horizontal"
  }, /*#__PURE__*/_react["default"].createElement(CardBody, {
    title: title,
    subtitle: subtitle,
    description: description
  }), /*#__PURE__*/_react["default"].createElement(CardFooter, {
    footer: footer
  })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(CardBody, {
    title: title,
    subtitle: subtitle,
    description: description
  }), /*#__PURE__*/_react["default"].createElement(CardFooter, {
    footer: footer
  })));
};

exports.Card = Card;
_StyledCard.StyledCard.displayName = 'StyledCard';
Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

var _default = /*#__PURE__*/(0, _react.memo)((0, _styledComponents.withTheme)(Card));

exports["default"] = _default;