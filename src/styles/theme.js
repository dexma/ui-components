// Colors (https://dexmatech.atlassian.net/wiki/spaces/design/pages/698253492/Colour)
export const color = {
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
  purple: '#9230B0',
};

export const transparent = 'transparent';
export const primary = color.turquoise;
export const success = color.green;
export const warning = color.amber;
export const error = color.red;
export const info = color.blue;

// Font
export const fontSizeNumber = 1;
export const fontSizeType = 'rem';
export const fontSize = `${fontSizeNumber}${fontSizeType}`;
export const fontColor = color.gray700;
export const fontColorActive = color.white;
export const fontWeightLight = 300;
export const fontWeightNormal = 400;
export const fontWeightSemiBold = 600;
export const fontWeightBold = 700;

const getSize = (size = fontSizeNumber, type = fontSizeType) =>
  `${size}${type}`;
export const pxToRem = px => px / 14;

// Icon
export const iconSize = fontSize;
export const iconColor = color.gray500;
export const iconColorActive = color.white;

// Background
export const backgroundColor = color.white;
export const backgroundColorSelected = color.gray100;
export const backgroundColorActive = primary;
export const backgroundColorHover = color.white;
export const backgroundColorFocused = color.white;

// Others
export const radius = '4px';
export const padding = '20px';
export const borderColor = color.gray200;
export const heightElements = '30px';
export const heightComponents = pxToRem(32);
export const boxShadow = '0 1px 5px 0 rgba(0,0,0,0.2)';
export const boxShadowHover = '0 4px 8px 0 rgba(0, 0, 0, 0.2)';

// Base
// ==========================================================================
const base = {
  border: `1px solid ${borderColor}`,
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
  heightElements: heightElements,
};

// Button
// ==========================================================================

const buttonPaddingX = 1;
const buttonHeight = heightComponents;
const buttonFontSize = fontSizeNumber;

const button = {
  size: {
    small: {
      paddingX: getSize(buttonPaddingX - 0.25),
      fontSize: getSize(buttonFontSize - 0.25),
      height: getSize(buttonHeight - 0.25),
    },
    medium: {
      paddingX: getSize(buttonPaddingX),
      fontSize: getSize(buttonFontSize),
      height: getSize(buttonHeight),
    },
    large: {
      paddingX: getSize(buttonPaddingX + 0.25 * 3.5),
      fontSize: getSize(buttonFontSize + 0.25 * 2),
      height: getSize(buttonHeight + 0.75),
    },
    xlarge: {
      paddingX: getSize(buttonPaddingX + 0.25 * 5),
      fontSize: getSize(buttonFontSize + 0.25 * 3),
      height: getSize(buttonHeight + 1.25),
    },
  },
};

// Heading
// ==========================================================================

const heading = {
  fontSize: {
    h1: getSize(pxToRem(24)), // 24px
    h2: getSize(pxToRem(20)), // 20px
    h3: getSize(pxToRem(18)), // 18px
    h4: getSize(pxToRem(16)), // 16px
    h5: getSize(pxToRem(14)), // 14px
    h6: getSize(pxToRem(12)), // 12px
  },
};

// DatePicker
// ==========================================================================

const datePickerPaddingX = 0.75;
const datePickerHeight = heightComponents;
const datePickerFontSize = fontSizeNumber;

const dataPicker = {
  paddingX: getSize(datePickerPaddingX),
  fontSize: getSize(datePickerFontSize),
  height: getSize(datePickerHeight),
};

// Select
// ==========================================================================

const selectPaddingX = 0.75;
const selectHeight = heightComponents;
const selectFontSize = fontSizeNumber;

const select = {
  paddingX: getSize(selectPaddingX),
  fontSize: getSize(selectFontSize),
  height: getSize(selectHeight),
};

// Card
// ==========================================================================

const cardPaddingX = 1.25;
const cardPaddingY = 0.5;
const cardFontSize = fontSizeNumber;
const cardLineHeight = 1.25;

const card = {
  paddingX: getSize(cardPaddingX),
  paddingY: getSize(cardPaddingY),
  fontSize: getSize(cardFontSize),
  lineHeight: getSize(cardLineHeight),
};

// SwitchPeriodComparative
// ==========================================================================

const switchPeriodComparativeFontSize = 0.875;

const switchPeriodComparative = {
  fontSize: getSize(switchPeriodComparativeFontSize),
};

// Grid
// ==========================================================================

const columns = 12;
const gridGutterWidth = 1;
const gridOuterMargin = 2;
const gridOuterPadding = 2;
const gridXS = 30;
const gridSM = 48;
const gridMD = 64;
const gridLG = 75;

const grid = {
  outerPadding: getSize(gridOuterPadding),
  outerMargin: getSize(gridOuterMargin),
  gutterWidth: getSize(gridGutterWidth),
  gutterCompensation: getSize(gridGutterWidth * 0.5 * -1),
  halfGutterWidth: getSize(gridGutterWidth * 0.5),
  breakpoints: {
    xs: getSize(gridXS),
    sm: getSize(gridSM),
    md: getSize(gridMD),
    lg: getSize(gridLG),
  },
  columns: columns,
  screenSm: getSize(gridSM, 'em'),
  screenMd: getSize(gridMD, 'em'),
  screenLg: getSize(gridLG, 'em'),
  containerSm: getSize(gridSM + gridGutterWidth),
  containerMd: getSize(gridMD + gridGutterWidth),
  containerLg: getSize(gridLG + gridGutterWidth),
};

// Pagination
// ==========================================================================

const paginationPaddingX = 0.75;
const paginationFontSize = fontSizeNumber;
const paginationHeight = heightComponents;

const pagination = {
  paddingX: getSize(paginationPaddingX),
  fontSize: getSize(paginationFontSize),
  height: getSize(paginationHeight),
};

// Table
// ==========================================================================

const tableFontSize = pxToRem(12);
const table = {
  fontSize: getSize(tableFontSize),
};

// Tag
// ==========================================================================

const tagPaddingX = pxToRem(2);
const tagPaddingY = pxToRem(8);
const tagFontSize = pxToRem(12);

const tag = {
  paddingX: getSize(tagPaddingX),
  paddingY: getSize(tagPaddingY),
  fontSize: getSize(tagFontSize),
};

// Tabs
// ==========================================================================

const tabPaddingX = 0.5;
const tabFontSize = fontSizeNumber;
const tabHeight = 1.25;

const tab = {
  paddingX: getSize(tabPaddingX),
  fontSize: getSize(tabFontSize),
  height: getSize(tabHeight),
};

// Input
// ==========================================================================

const inputPaddingX = 0.75;
const inputFontSize = fontSizeNumber;
const inputHeight = heightComponents;

const input = {
  paddingX: getSize(inputPaddingX),
  fontSize: getSize(inputFontSize),
  height: getSize(inputHeight),
};

// Progress
// ==========================================================================

const progressPaddingX = 0.75;
const progressFontSize = pxToRem(12);
const progressHeight = pxToRem(8);

const progress = {
  paddingX: getSize(progressPaddingX),
  fontSize: getSize(progressFontSize),
  height: getSize(progressHeight),
  backgroundColor: color.white,
};

const theme = {
  ...base,
  button,
  heading,
  dataPicker,
  select,
  card,
  switchPeriodComparative,
  grid,
  pagination,
  table,
  tag,
  tab,
  input,
  progress,
};

export default theme;
