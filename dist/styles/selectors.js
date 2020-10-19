"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.progressBackgroundColor = exports.progressFontSize = exports.progressHeight = exports.gridContainerLg = exports.gridContainerMd = exports.gridContainerSm = exports.gridColumns = exports.gridBreakpoints = exports.gridHalfGutterWidth = exports.gridGutterCompensation = exports.gridGutterWidth = exports.gridOuterMargin = exports.gridOuterPadding = exports.switchPeriodComparativeFontSize = exports.cardLineHeight = exports.cardFontSize = exports.cardPaddingY = exports.cardPaddingX = exports.selectPaddingX = exports.selectFontSize = exports.selectHeight = exports.inputPaddingX = exports.inputFontSize = exports.inputHeight = exports.tabPaddingX = exports.tabFontSize = exports.tabHeight = exports.tagPaddingY = exports.tagPaddingX = exports.tagFontSize = exports.tagHeight = exports.tableFontSize = exports.paginationPaddingX = exports.paginationFontSize = exports.paginationHeight = exports.dataPickerPaddingX = exports.dataPickerFontSize = exports.dataPickerHeight = exports.buttonSize = exports.headingLineHeight = exports.headingFontSize = exports.componentHeight = exports.infoColor = exports.errorColor = exports.warningColor = exports.successColor = exports.primaryColorSvg = exports.primaryColor = exports.purple = exports.green = exports.grey = exports.brown = exports.amber = exports.red = exports.orange = exports.blueLight = exports.blue = exports.magenta = exports.error = exports.white = exports.gray900 = exports.gray800 = exports.gray700 = exports.gray600 = exports.gray500 = exports.gray400 = exports.gray300 = exports.gray200 = exports.gray100 = exports.gray50 = exports.boxShadowHover = exports.boxShadow = exports.backgroundColorDisabled = exports.backgroundColorFocused = exports.backgroundColorHover = exports.backgroundColorActive = exports.backgroundColorSelected = exports.backgroundColor = exports.iconColorActive = exports.iconColor = exports.iconSize = exports.fontWeightBold = exports.fontWeightSemiBold = exports.fontWeightNormal = exports.fontWeightLight = exports.fontColorActive = exports.fontColor = exports.fontSize = exports.borderColor = exports.borderRadius = exports.border = exports.margin = exports.padding = exports.propFromTheme = void 0;

var _get = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var propFromTheme = function propFromTheme(theme, prop) {
  return (0, _get["default"])(theme, "theme.".concat(prop));
};

exports.propFromTheme = propFromTheme;

var padding = function padding(props) {
  return propFromTheme(props, 'padding');
};

exports.padding = padding;

var margin = function margin(props) {
  return propFromTheme(props, 'padding');
};

exports.margin = margin;

var border = function border(props) {
  return propFromTheme(props, 'border');
};

exports.border = border;

var borderRadius = function borderRadius(props) {
  return propFromTheme(props, 'borderRadius');
};

exports.borderRadius = borderRadius;

var borderColor = function borderColor(props) {
  return propFromTheme(props, 'borderColor');
};

exports.borderColor = borderColor;

var fontSize = function fontSize(props) {
  return propFromTheme(props, 'fontSize');
};

exports.fontSize = fontSize;

var fontColor = function fontColor(props) {
  return propFromTheme(props, 'fontColor');
};

exports.fontColor = fontColor;

var fontColorActive = function fontColorActive(props) {
  return propFromTheme(props, 'fontColorActive');
};

exports.fontColorActive = fontColorActive;

var fontWeightLight = function fontWeightLight(props) {
  return propFromTheme(props, 'fontWeightLight');
};

exports.fontWeightLight = fontWeightLight;

var fontWeightNormal = function fontWeightNormal(props) {
  return propFromTheme(props, 'fontWeightNormal');
};

exports.fontWeightNormal = fontWeightNormal;

var fontWeightSemiBold = function fontWeightSemiBold(props) {
  return propFromTheme(props, 'fontWeightSemiBold');
};

exports.fontWeightSemiBold = fontWeightSemiBold;

var fontWeightBold = function fontWeightBold(props) {
  return propFromTheme(props, 'fontWeightBold');
};

exports.fontWeightBold = fontWeightBold;

var iconSize = function iconSize(props) {
  return propFromTheme(props, 'iconSize');
};

exports.iconSize = iconSize;

var iconColor = function iconColor(props) {
  return propFromTheme(props, 'iconColor');
};

exports.iconColor = iconColor;

var iconColorActive = function iconColorActive(props) {
  return propFromTheme(props, 'iconColorActive');
};

exports.iconColorActive = iconColorActive;

var backgroundColor = function backgroundColor(props) {
  return propFromTheme(props, 'backgroundColor');
};

exports.backgroundColor = backgroundColor;

var backgroundColorSelected = function backgroundColorSelected(props) {
  return propFromTheme(props, 'backgroundColorSelected');
};

exports.backgroundColorSelected = backgroundColorSelected;

var backgroundColorActive = function backgroundColorActive(props) {
  return propFromTheme(props, 'backgroundColorActive');
};

exports.backgroundColorActive = backgroundColorActive;

var backgroundColorHover = function backgroundColorHover(props) {
  return propFromTheme(props, 'backgroundColorHover');
};

exports.backgroundColorHover = backgroundColorHover;

var backgroundColorFocused = function backgroundColorFocused(props) {
  return propFromTheme(props, 'backgroundColorFocused');
};

exports.backgroundColorFocused = backgroundColorFocused;

var backgroundColorDisabled = function backgroundColorDisabled(props) {
  return propFromTheme(props, 'backgroundColorDisabled');
};

exports.backgroundColorDisabled = backgroundColorDisabled;

var boxShadow = function boxShadow(props) {
  return propFromTheme(props, 'boxShadow');
};

exports.boxShadow = boxShadow;

var boxShadowHover = function boxShadowHover(props) {
  return propFromTheme(props, 'boxShadowHover');
};

exports.boxShadowHover = boxShadowHover;

var gray50 = function gray50(props) {
  return propFromTheme(props, 'color.gray50');
};

exports.gray50 = gray50;

var gray100 = function gray100(props) {
  return propFromTheme(props, 'color.gray100');
};

exports.gray100 = gray100;

var gray200 = function gray200(props) {
  return propFromTheme(props, 'color.gray200');
};

exports.gray200 = gray200;

var gray300 = function gray300(props) {
  return propFromTheme(props, 'color.gray300');
};

exports.gray300 = gray300;

var gray400 = function gray400(props) {
  return propFromTheme(props, 'color.gray400');
};

exports.gray400 = gray400;

var gray500 = function gray500(props) {
  return propFromTheme(props, 'color.gray500');
};

exports.gray500 = gray500;

var gray600 = function gray600(props) {
  return propFromTheme(props, 'color.gray600');
};

exports.gray600 = gray600;

var gray700 = function gray700(props) {
  return propFromTheme(props, 'color.gray700');
};

exports.gray700 = gray700;

var gray800 = function gray800(props) {
  return propFromTheme(props, 'color.gray800');
};

exports.gray800 = gray800;

var gray900 = function gray900(props) {
  return propFromTheme(props, 'color.gray900');
};

exports.gray900 = gray900;

var white = function white(props) {
  return propFromTheme(props, 'color.white');
};

exports.white = white;

var error = function error(props) {
  return propFromTheme(props, 'color.error');
};

exports.error = error;

var magenta = function magenta(props) {
  return propFromTheme(props, 'color.magenta');
};

exports.magenta = magenta;

var blue = function blue(props) {
  return propFromTheme(props, 'color.blue');
};

exports.blue = blue;

var blueLight = function blueLight(props) {
  return propFromTheme(props, 'color.blueLight');
};

exports.blueLight = blueLight;

var orange = function orange(props) {
  return propFromTheme(props, 'color.orange');
};

exports.orange = orange;

var red = function red(props) {
  return propFromTheme(props, 'color.red');
};

exports.red = red;

var amber = function amber(props) {
  return propFromTheme(props, 'color.amber');
};

exports.amber = amber;

var brown = function brown(props) {
  return propFromTheme(props, 'color.brown');
};

exports.brown = brown;

var grey = function grey(props) {
  return propFromTheme(props, 'color.grey');
};

exports.grey = grey;

var green = function green(props) {
  return propFromTheme(props, 'color.green');
};

exports.green = green;

var purple = function purple(props) {
  return propFromTheme(props, 'color.purple');
};

exports.purple = purple;

var primaryColor = function primaryColor(props) {
  return propFromTheme(props, 'primary');
};

exports.primaryColor = primaryColor;

var primaryColorSvg = function primaryColorSvg(props) {
  var newPrimaryColor = propFromTheme(props, 'primary');
  return newPrimaryColor.replace('#', '');
};

exports.primaryColorSvg = primaryColorSvg;

var successColor = function successColor(props) {
  return propFromTheme(props, 'success');
};

exports.successColor = successColor;

var warningColor = function warningColor(props) {
  return propFromTheme(props, 'warning');
};

exports.warningColor = warningColor;

var errorColor = function errorColor(props) {
  return propFromTheme(props, 'error');
};

exports.errorColor = errorColor;

var infoColor = function infoColor(props) {
  return propFromTheme(props, 'info');
};

exports.infoColor = infoColor;

var componentHeight = function componentHeight(props) {
  return propFromTheme(props, 'heightElements');
};

exports.componentHeight = componentHeight;

var headingFontSize = function headingFontSize(props) {
  return propFromTheme(props, 'heading.fontSize');
};

exports.headingFontSize = headingFontSize;

var headingLineHeight = function headingLineHeight(props) {
  return propFromTheme(props, 'heading.lineHeight');
};

exports.headingLineHeight = headingLineHeight;

var buttonSize = function buttonSize(props) {
  return propFromTheme(props, 'button.size');
};

exports.buttonSize = buttonSize;

var dataPickerHeight = function dataPickerHeight(props) {
  return propFromTheme(props, 'dataPicker.height');
};

exports.dataPickerHeight = dataPickerHeight;

var dataPickerFontSize = function dataPickerFontSize(props) {
  return propFromTheme(props, 'dataPicker.fontSize');
};

exports.dataPickerFontSize = dataPickerFontSize;

var dataPickerPaddingX = function dataPickerPaddingX(props) {
  return propFromTheme(props, 'dataPicker.paddingX');
};

exports.dataPickerPaddingX = dataPickerPaddingX;

var paginationHeight = function paginationHeight(props) {
  return propFromTheme(props, 'pagination.height');
};

exports.paginationHeight = paginationHeight;

var paginationFontSize = function paginationFontSize(props) {
  return propFromTheme(props, 'pagination.fontSize');
};

exports.paginationFontSize = paginationFontSize;

var paginationPaddingX = function paginationPaddingX(props) {
  return propFromTheme(props, 'pagination.paddingX');
};

exports.paginationPaddingX = paginationPaddingX;

var tableFontSize = function tableFontSize(props) {
  return propFromTheme(props, 'table.fontSize');
};

exports.tableFontSize = tableFontSize;

var tagHeight = function tagHeight(props) {
  return propFromTheme(props, 'tag.height');
};

exports.tagHeight = tagHeight;

var tagFontSize = function tagFontSize(props) {
  return propFromTheme(props, 'tag.fontSize');
};

exports.tagFontSize = tagFontSize;

var tagPaddingX = function tagPaddingX(props) {
  return propFromTheme(props, 'tag.paddingX');
};

exports.tagPaddingX = tagPaddingX;

var tagPaddingY = function tagPaddingY(props) {
  return propFromTheme(props, 'tag.paddingY');
};

exports.tagPaddingY = tagPaddingY;

var tabHeight = function tabHeight(props) {
  return propFromTheme(props, 'tab.height');
};

exports.tabHeight = tabHeight;

var tabFontSize = function tabFontSize(props) {
  return propFromTheme(props, 'tab.fontSize');
};

exports.tabFontSize = tabFontSize;

var tabPaddingX = function tabPaddingX(props) {
  return propFromTheme(props, 'tab.paddingX');
};

exports.tabPaddingX = tabPaddingX;

var inputHeight = function inputHeight(props) {
  return propFromTheme(props, 'input.height');
};

exports.inputHeight = inputHeight;

var inputFontSize = function inputFontSize(props) {
  return propFromTheme(props, 'input.fontSize');
};

exports.inputFontSize = inputFontSize;

var inputPaddingX = function inputPaddingX(props) {
  return propFromTheme(props, 'input.paddingX');
};

exports.inputPaddingX = inputPaddingX;

var selectHeight = function selectHeight(props) {
  return propFromTheme(props, 'select.height');
};

exports.selectHeight = selectHeight;

var selectFontSize = function selectFontSize(props) {
  return propFromTheme(props, 'select.fontSize');
};

exports.selectFontSize = selectFontSize;

var selectPaddingX = function selectPaddingX(props) {
  return propFromTheme(props, 'select.paddingX');
};

exports.selectPaddingX = selectPaddingX;

var cardPaddingX = function cardPaddingX(props) {
  return propFromTheme(props, 'card.paddingX');
};

exports.cardPaddingX = cardPaddingX;

var cardPaddingY = function cardPaddingY(props) {
  return propFromTheme(props, 'card.paddingY');
};

exports.cardPaddingY = cardPaddingY;

var cardFontSize = function cardFontSize(props) {
  return propFromTheme(props, 'card.fontSize');
};

exports.cardFontSize = cardFontSize;

var cardLineHeight = function cardLineHeight(props) {
  return propFromTheme(props, 'card.lineHeight');
};

exports.cardLineHeight = cardLineHeight;

var switchPeriodComparativeFontSize = function switchPeriodComparativeFontSize(props) {
  return propFromTheme(props, 'switchPeriodComparative.fontSize');
};

exports.switchPeriodComparativeFontSize = switchPeriodComparativeFontSize;

var gridOuterPadding = function gridOuterPadding(props) {
  return propFromTheme(props, 'grid.outerPadding');
};

exports.gridOuterPadding = gridOuterPadding;

var gridOuterMargin = function gridOuterMargin(props) {
  return propFromTheme(props, 'grid.outerMargin');
};

exports.gridOuterMargin = gridOuterMargin;

var gridGutterWidth = function gridGutterWidth(props) {
  return propFromTheme(props, 'grid.gutterWidth');
};

exports.gridGutterWidth = gridGutterWidth;

var gridGutterCompensation = function gridGutterCompensation(props) {
  return propFromTheme(props, 'grid.gutterCompensation');
};

exports.gridGutterCompensation = gridGutterCompensation;

var gridHalfGutterWidth = function gridHalfGutterWidth(props) {
  return propFromTheme(props, 'grid.halfGutterWidth');
};

exports.gridHalfGutterWidth = gridHalfGutterWidth;

var gridBreakpoints = function gridBreakpoints(props) {
  return propFromTheme(props, 'grid.breakpoints');
};

exports.gridBreakpoints = gridBreakpoints;

var gridColumns = function gridColumns(props) {
  return propFromTheme(props, 'grid.columns');
};

exports.gridColumns = gridColumns;

var gridContainerSm = function gridContainerSm(props) {
  return propFromTheme(props, 'grid.containerSm');
};

exports.gridContainerSm = gridContainerSm;

var gridContainerMd = function gridContainerMd(props) {
  return propFromTheme(props, 'grid.containerMd');
};

exports.gridContainerMd = gridContainerMd;

var gridContainerLg = function gridContainerLg(props) {
  return propFromTheme(props, 'grid.containerLg');
};

exports.gridContainerLg = gridContainerLg;

var progressHeight = function progressHeight(props) {
  return propFromTheme(props, 'progress.height');
};

exports.progressHeight = progressHeight;

var progressFontSize = function progressFontSize(props) {
  return propFromTheme(props, 'progress.fontSize');
};

exports.progressFontSize = progressFontSize;

var progressBackgroundColor = function progressBackgroundColor(props) {
  return propFromTheme(props, 'progress.backgroundColor');
};

exports.progressBackgroundColor = progressBackgroundColor;