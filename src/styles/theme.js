// Colors (https://dexmatech.atlassian.net/wiki/spaces/design/pages/698253492/Colour)
export const color = {
  teal50: '#e7fdf5',
  teal100: '#c6fcec',
  teal200: '#a1f7da',
  teal300: '#62ecbc',
  teal400: '#43d8ab',
  teal500: '#13C3A3',
  teal600: '#17a994',
  teal700: '#1d9088',
  teal800: '#23777d',
  teal900: '#275f72',

  blue50: '#e5f2ff',
  blue100: '#c7e0f9',
  blue200: '#8fc1f3',
  blue300: '#5da8f2',
  blue400: '#278ae4',
  blue500: '#1578d5',
  blue600: '#0565bf',
  blue700: '#0054a1',
  blue800: '#003b6f',
  blue900: '#011543',

  gray50: '#F7F9FA',
  gray100: '#f1f2f3',
  gray200: '#dee0e2',
  gray300: '#c9cccf',
  gray400: '#a9acb1',
  gray500: '#7e8084',
  gray600: '#606266',
  gray700: '#404145',
  gray800: '#2c2d30',
  gray900: '#141518',

  teal: '#17A994',
  red: '#F25A5A',
  orange: '#fb8f38',
  amber: '#ffc400',
  green: '#00cc87',
  cyan: '#38dcdf',
  blueLight: '#5da8f2',
  blue: '#0054a1',
  violet: '#9152A5',
  magenta: '#DD4B80',
  pink: '#ffaca8',
  brown: '#9c755f',
  gray: '#9fa3aa',
  white: '#FFFFFF',
  black: '#000000',
};

export const transparent = 'transparent';
export const primary = color.teal500;
export const success = color.green;
export const warning = color.amber;
export const error = color.red;
export const info = color.blue100;

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
export const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

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
  fontFamily: fontFamily,

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

// Alert
// ==========================================================================

const alertMessageFontSize = pxToRem(16);
const alertDescriptionFontSize = pxToRem(14);

const alert = {
  messageFontSize: getSize(alertMessageFontSize),
  descriptionFontSize: getSize(alertDescriptionFontSize),
};

// Button
// ==========================================================================

const buttonPaddingX = 1;

const button = {
  size: {
    small: {
      paddingX: getSize(buttonPaddingX - 0.25),
      fontSize: getSize(pxToRem(12)),
      height: getSize(pxToRem(24)),
    },
    medium: {
      paddingX: getSize(buttonPaddingX),
      fontSize: getSize(pxToRem(14)),
      height: getSize(pxToRem(32)),
    },
    large: {
      paddingX: getSize(buttonPaddingX + 0.25 * 3.5),
      fontSize: getSize(pxToRem(16)),
      height: getSize(pxToRem(40)),
    },
    xlarge: {
      paddingX: getSize(buttonPaddingX + 0.25 * 5),
      fontSize: getSize(pxToRem(24)),
      height: getSize(pxToRem(48)),
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
const gridXS = 34.286;
const gridSM = 54.857;
const gridMD = 73.143;
const gridLG = 85.714;

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

// Paragraph
// ==========================================================================

const paragraph = {
  size: {
    small: {
      fontSize: getSize(pxToRem(12)),
      lineHeight: getSize(pxToRem(16)),
    },
    medium: {
      fontSize: getSize(pxToRem(14)),
      lineHeight: getSize(pxToRem(20)),
    },
    large: {
      fontSize: getSize(pxToRem(16)),
      lineHeight: getSize(pxToRem(24)),
    },
    xlarge: {
      fontSize: getSize(pxToRem(20)),
      lineHeight: getSize(pxToRem(32)),
    },
  },
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
const tagLineHeight = pxToRem(16);

const tag = {
  paddingX: getSize(tagPaddingX),
  paddingY: getSize(tagPaddingY),
  fontSize: getSize(tagFontSize),
  lineHeight: getSize(tagLineHeight),
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

// FormControl
// ==========================================================================

const messageFontSize = pxToRem(12);

const formControl = {
  messageFontSize: getSize(messageFontSize),
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
  alert,
  button,
  heading,
  dataPicker,
  select,
  card,
  switchPeriodComparative,
  grid,
  pagination,
  paragraph,
  table,
  tag,
  tab,
  input,
  formControl,
  progress,
};

export default theme;
