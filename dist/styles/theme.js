"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.boxShadowHover = exports.boxShadow = exports.heightComponents = exports.heightElements = exports.borderColor = exports.padding = exports.radius = exports.backgroundColorFocused = exports.backgroundColorHover = exports.backgroundColorActive = exports.backgroundColorSelected = exports.backgroundColor = exports.iconColorActive = exports.iconColor = exports.iconSize = exports.pxToRem = exports.fontWeightBold = exports.fontWeightSemiBold = exports.fontWeightNormal = exports.fontWeightLight = exports.fontColorActive = exports.fontColor = exports.fontSize = exports.fontSizeType = exports.fontSizeNumber = exports.info = exports.error = exports.warning = exports.success = exports.primary = exports.transparent = exports.color = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Colors (https://dexmatech.atlassian.net/wiki/spaces/design/pages/698253492/Colour)
var color = {
  white: '#FFFFFF',
  black: '#000000',
  gray50: '#F2F5F7',
  gray100: '#F1F2F3',
  gray200: '#D6D8DB',
  gray300: '#BBBEC3',
  gray400: '#9FA3AA',
  gray500: '#7E8085',
  gray600: '#606266',
  gray700: '#404145',
  gray800: '#2C2D30',
  gray900: '#141518',
  turquoise: '#15DAD3',
  blue: '#0054A1',
  blueLight: '#56A6F1',
  red: '#F65B5B',
  amber: '#FFC400',
  orange: '#F7863B',
  brown: '#9C755F',
  grey: '#9FA3AA',
  green: '#00CC88',
  magenta: '#E12F8A',
  purple: '#9230B0'
};
exports.color = color;
var transparent = 'transparent';
exports.transparent = transparent;
var primary = color.turquoise;
exports.primary = primary;
var success = color.green;
exports.success = success;
var warning = color.amber;
exports.warning = warning;
var error = color.red;
exports.error = error;
var info = color.blue; // Font

exports.info = info;
var fontSizeNumber = 1;
exports.fontSizeNumber = fontSizeNumber;
var fontSizeType = 'rem';
exports.fontSizeType = fontSizeType;
var fontSize = "".concat(fontSizeNumber).concat(fontSizeType);
exports.fontSize = fontSize;
var fontColor = color.gray700;
exports.fontColor = fontColor;
var fontColorActive = color.white;
exports.fontColorActive = fontColorActive;
var fontWeightLight = 300;
exports.fontWeightLight = fontWeightLight;
var fontWeightNormal = 400;
exports.fontWeightNormal = fontWeightNormal;
var fontWeightSemiBold = 600;
exports.fontWeightSemiBold = fontWeightSemiBold;
var fontWeightBold = 700;
exports.fontWeightBold = fontWeightBold;

var getSize = function getSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : fontSizeNumber;
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : fontSizeType;
  return "".concat(size).concat(type);
};

var pxToRem = function pxToRem(px) {
  return px / 14;
}; // Icon


exports.pxToRem = pxToRem;
var iconSize = fontSize;
exports.iconSize = iconSize;
var iconColor = color.gray500;
exports.iconColor = iconColor;
var iconColorActive = color.white; // Background

exports.iconColorActive = iconColorActive;
var backgroundColor = color.white;
exports.backgroundColor = backgroundColor;
var backgroundColorSelected = color.gray100;
exports.backgroundColorSelected = backgroundColorSelected;
var backgroundColorActive = primary;
exports.backgroundColorActive = backgroundColorActive;
var backgroundColorHover = color.white;
exports.backgroundColorHover = backgroundColorHover;
var backgroundColorFocused = color.white; // Others

exports.backgroundColorFocused = backgroundColorFocused;
var radius = '4px';
exports.radius = radius;
var padding = '20px';
exports.padding = padding;
var borderColor = color.gray200;
exports.borderColor = borderColor;
var heightElements = '30px';
exports.heightElements = heightElements;
var heightComponents = pxToRem(32);
exports.heightComponents = heightComponents;
var boxShadow = '0 1px 5px 0 rgba(0,0,0,0.2)';
exports.boxShadow = boxShadow;
var boxShadowHover = '0 4px 8px 0 rgba(0, 0, 0, 0.2)'; // Base
// ==========================================================================

exports.boxShadowHover = boxShadowHover;
var base = {
  border: "1px solid ".concat(borderColor),
  borderRadius: radius,
  borderColor: borderColor,
  padding: padding,
  fontSize: fontSize,
  fontColor: fontColor,
  fontColorActive: fontColorActive,
  fontWeightLight: fontWeightLight,
  fontWeightNormal: fontWeightNormal,
  fontWeightSemiBold: fontWeightSemiBold,
  fontWeightBold: fontWeightBold,
  iconSize: iconSize,
  iconColor: iconColor,
  iconColorActive: iconColorActive,
  backgroundColor: backgroundColor,
  backgroundColorSelected: backgroundColorSelected,
  backgroundColorActive: backgroundColorActive,
  backgroundColorHover: backgroundColorHover,
  backgroundColorFocused: backgroundColorFocused,
  backgroundColorDisabled: color.gray200,
  boxShadow: boxShadow,
  boxShadowHover: boxShadowHover,
  color: color,
  primary: primary,
  success: success,
  warning: warning,
  error: error,
  info: info,
  heightComponents: heightComponents,
  heightElements: heightElements
}; // Button
// ==========================================================================

var buttonPaddingX = 1;
var buttonHeight = heightComponents;
var buttonFontSize = fontSizeNumber;
var button = {
  size: {
    small: {
      paddingX: getSize(buttonPaddingX - 0.25),
      fontSize: getSize(buttonFontSize - 0.25),
      height: getSize(buttonHeight - 0.25)
    },
    medium: {
      paddingX: getSize(buttonPaddingX),
      fontSize: getSize(buttonFontSize),
      height: getSize(buttonHeight)
    },
    large: {
      paddingX: getSize(buttonPaddingX + 0.25 * 3.5),
      fontSize: getSize(buttonFontSize + 0.25 * 2),
      height: getSize(buttonHeight + 0.75)
    },
    xlarge: {
      paddingX: getSize(buttonPaddingX + 0.25 * 5),
      fontSize: getSize(buttonFontSize + 0.25 * 3),
      height: getSize(buttonHeight + 1.25)
    }
  }
}; // Heading
// ==========================================================================

var heading = {
  fontSize: {
    h1: getSize(pxToRem(24)),
    // 24px
    h2: getSize(pxToRem(20)),
    // 20px
    h3: getSize(pxToRem(18)),
    // 18px
    h4: getSize(pxToRem(16)),
    // 16px
    h5: getSize(pxToRem(14)),
    // 14px
    h6: getSize(pxToRem(12)) // 12px

  }
}; // DatePicker
// ==========================================================================

var datePickerPaddingX = 0.75;
var datePickerHeight = heightComponents;
var datePickerFontSize = fontSizeNumber;
var dataPicker = {
  paddingX: getSize(datePickerPaddingX),
  fontSize: getSize(datePickerFontSize),
  height: getSize(datePickerHeight)
}; // Select
// ==========================================================================

var selectPaddingX = 0.75;
var selectHeight = heightComponents;
var selectFontSize = fontSizeNumber;
var select = {
  paddingX: getSize(selectPaddingX),
  fontSize: getSize(selectFontSize),
  height: getSize(selectHeight)
}; // Card
// ==========================================================================

var cardPaddingX = 1.25;
var cardPaddingY = 0.5;
var cardFontSize = fontSizeNumber;
var cardLineHeight = 1.25;
var card = {
  paddingX: getSize(cardPaddingX),
  paddingY: getSize(cardPaddingY),
  fontSize: getSize(cardFontSize),
  lineHeight: getSize(cardLineHeight)
}; // SwitchPeriodComparative
// ==========================================================================

var switchPeriodComparativeFontSize = 0.875;
var switchPeriodComparative = {
  fontSize: getSize(switchPeriodComparativeFontSize)
}; // Grid
// ==========================================================================

var columns = 12;
var gridGutterWidth = 1;
var gridOuterMargin = 2;
var gridOuterPadding = 2;
var gridXS = 34.286;
var gridSM = 54.857;
var gridMD = 73.143;
var gridLG = 85.714;
var grid = {
  outerPadding: getSize(gridOuterPadding),
  outerMargin: getSize(gridOuterMargin),
  gutterWidth: getSize(gridGutterWidth),
  gutterCompensation: getSize(gridGutterWidth * 0.5 * -1),
  halfGutterWidth: getSize(gridGutterWidth * 0.5),
  breakpoints: {
    xs: getSize(gridXS),
    sm: getSize(gridSM),
    md: getSize(gridMD),
    lg: getSize(gridLG)
  },
  columns: columns,
  screenSm: getSize(gridSM, 'em'),
  screenMd: getSize(gridMD, 'em'),
  screenLg: getSize(gridLG, 'em'),
  containerSm: getSize(gridSM + gridGutterWidth),
  containerMd: getSize(gridMD + gridGutterWidth),
  containerLg: getSize(gridLG + gridGutterWidth)
}; // Pagination
// ==========================================================================

var paginationPaddingX = 0.75;
var paginationFontSize = fontSizeNumber;
var paginationHeight = heightComponents;
var pagination = {
  paddingX: getSize(paginationPaddingX),
  fontSize: getSize(paginationFontSize),
  height: getSize(paginationHeight)
}; // Table
// ==========================================================================

var tableFontSize = pxToRem(12);
var table = {
  fontSize: getSize(tableFontSize)
}; // Tag
// ==========================================================================

var tagPaddingX = pxToRem(2);
var tagPaddingY = pxToRem(8);
var tagFontSize = pxToRem(12);
var tag = {
  paddingX: getSize(tagPaddingX),
  paddingY: getSize(tagPaddingY),
  fontSize: getSize(tagFontSize)
}; // Tabs
// ==========================================================================

var tabPaddingX = 0.5;
var tabFontSize = fontSizeNumber;
var tabHeight = 1.25;
var tab = {
  paddingX: getSize(tabPaddingX),
  fontSize: getSize(tabFontSize),
  height: getSize(tabHeight)
}; // Input
// ==========================================================================

var inputPaddingX = 0.75;
var inputFontSize = fontSizeNumber;
var inputHeight = heightComponents;
var input = {
  paddingX: getSize(inputPaddingX),
  fontSize: getSize(inputFontSize),
  height: getSize(inputHeight)
}; // Progress
// ==========================================================================

var progressPaddingX = 0.75;
var progressFontSize = pxToRem(12);
var progressHeight = pxToRem(8);
var progress = {
  paddingX: getSize(progressPaddingX),
  fontSize: getSize(progressFontSize),
  height: getSize(progressHeight),
  backgroundColor: color.white
};

var theme = _objectSpread(_objectSpread({}, base), {}, {
  button: button,
  heading: heading,
  dataPicker: dataPicker,
  select: select,
  card: card,
  switchPeriodComparative: switchPeriodComparative,
  grid: grid,
  pagination: pagination,
  table: table,
  tag: tag,
  tab: tab,
  input: input,
  progress: progress
});

var _default = theme;
exports["default"] = _default;