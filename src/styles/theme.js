// Colors (https://dexmatech.atlassian.net/wiki/spaces/design/pages/698253492/Colour)

export const white = '#FFFFFF';
export const black = '#000000';
export const gray50 = '#F2F5F7';
export const gray100 = '#F1F2F3';
export const gray200 = '#D6D8DB';
export const gray300 = '#adb0b6';
export const gray400 = '#9FA3AA';
export const gray500 = '#7E8085';
export const gray600 = '#606266';
export const gray700 = '#404145';
export const gray800 = '#2C2D30';
export const gray900 = '#141518';
export const teal = '#13C3A3';
export const blue = '#003B6F';
export const red = '#DC3B3C';
export const amber = '#F6BF26';
export const green = '#1FB275';
export const magenta = '#CC035C';
export const transparent = 'transparent';

export const primary = teal;
export const primaryBackground = blue;
export const success = green;
export const warning = amber;
export const error = red;

// Font
export const fontSizeNumber = 0.75;
export const fontSizeType = 'rem';
export const fontSize = `${fontSizeNumber}${fontSizeType}`;
export const fontColor = gray900;
export const fontColorActive = white;
export const fontFamily = 'Arial';

const getFontSize = (size = fontSizeNumber) => `${size}${fontSizeType}`;

// Icon
export const iconSize = fontSize;
export const iconColor = gray500;
export const iconColorActive = white;

// Background
export const backgroundColor = white;
export const backgroundColorSelected = gray100;
export const backgroundColorActive = primary;
export const backgroundColorHover = white;
export const backgroundColorFocused = white;

// Others
export const radius = '4px';
export const fontWeightBold = 700;
export const padding = '20px';
export const borderColor = gray100;
export const heightElements = '30px';
export const spacer = '1rem';

// Base
// ==========================================================================
const base = {
  border: `1px solid ${borderColor}`,
  borderRadius: radius,
  borderColor: borderColor,
  padding: padding,

  fontFamily: fontFamily,
  fontSize: fontSize,
  fontColor: fontColor,
  fontColorActive: fontColorActive,
  fontWeightBold: fontWeightBold,

  iconSize: iconSize,
  iconColor: iconColor,
  iconColorActive: iconColorActive,

  backgroundColor: backgroundColor,
  backgroundColorSelected: backgroundColorSelected,
  backgroundColorActive: backgroundColorActive,
  backgroundColorHover: backgroundColorHover,
  backgroundColorFocused: backgroundColorFocused,
  backgroundColorDisabled: gray200,

  gray100: gray100,
  gray200: gray200,
  gray300: gray300,
  gray400: gray400,
  gray500: gray500,
  gray600: gray600,
  gray700: gray700,
  gray800: gray800,
  gray900: gray900,
  white: white,
  primary: primary,
  success: success,
  warning: warning,
  error: error,
  magenta: magenta,

  heightElements: heightElements,
};

// Button
// ==========================================================================

const buttonPaddingY = 0.25;
const buttonPaddingX = 0.5;
const buttonFontSize = fontSizeNumber;

const button = {
  size: {
    small: {
      paddingY: getFontSize(buttonPaddingY),
      paddingX: getFontSize(buttonPaddingX),
      fontSize: getFontSize(buttonFontSize),
    },
    medium: {
      paddingY: getFontSize(buttonPaddingY + 0.125),
      paddingX: getFontSize(buttonPaddingX + 0.25),
      fontSize: getFontSize(buttonFontSize + 0.25),
    },
    large: {
      paddingY: getFontSize(buttonPaddingY + 0.125 * 3.5),
      paddingX: getFontSize(buttonPaddingX + 0.25 * 3.5),
      fontSize: getFontSize(buttonFontSize + 0.25 * 2),
    },
    xlarge: {
      paddingY: getFontSize(buttonPaddingY + 0.125 * 5),
      paddingX: getFontSize(buttonPaddingX + 0.25 * 5),
      fontSize: getFontSize(buttonFontSize + 0.25 * 3),
    },
  },
};

// Heading
// ==========================================================================

const heading = {
  fontSize: {
    h1: getFontSize(2.625),
    h2: getFontSize(2),
    h3: getFontSize(1.75),
    h4: getFontSize(1.5),
    h5: getFontSize(1.25),
    h6: getFontSize(fontSizeNumber),
  },
  lineHeight: {
    h1: getFontSize(3),
    h2: getFontSize(2.5),
    h3: getFontSize(2.25),
    h4: getFontSize(2),
    h5: getFontSize(1.75),
    h6: getFontSize(1.5),
  },
};

const theme = {
  ...base,
  button,
  heading,
};

export default theme;
