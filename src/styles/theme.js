// Table of Contents:
//
//  1. Base
//  2. Button
//  3. Heading

// todo we put export on the vars because we want to split on each fields

// 1.1 Colors
export const brand = '#618916';
export const white = '#ffffff';
export const black = '#000000';
export const red = '#cc4b37';
export const orange = '#FFAA15';
export const green = '#618916';
export const grayChateau = '#97a2ac';
export const gray100 = '#e2e2e2';
export const gray200 = '#cccccc';
export const gray300 = '#a0a0a0';
export const gray400 = '#888888';
export const gray500 = '#666666';
export const gray600 = '#333333';
export const success = '#00C7B4';
export const warning = '#EDA500';
export const error = '#C23564';

// 1.2 Font
export const fontSizeNumber = 0.875;
export const fontSizeType = 'rem';
export const fontSize = `${fontSizeNumber}${fontSizeType}`;
export const fontColor = gray600;
export const fontColorActive = white;
export const fontFamily = 'Arial';

const getFontSize = (size = fontSizeNumber) => `${size}${fontSizeType}`;

// 1.3 Icon
export const iconSize = fontSize;
export const iconColor = gray500;
export const iconColorActive = white;

// 1.4 Background
export const backgroundColor = white;
export const backgroundColorSelected = gray100;
export const backgroundColorActive = brand;
export const backgroundColorHover = white;
export const backgroundColorFocused = white;

// 1.5 Others
export const radius = '3px';
export const fontWeightBold = 700;
export const padding = '20px';
export const borderColor = gray100;
export const heightElements = '30px';
export const spacer = '1rem';

export const buttonSizes = ['small', 'medium', 'large', 'xlarge'];

// 1. Base
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

  gray300: gray300,
  success: success,
  warning: warning,
  error: error,

  heightElements: heightElements,
};

// 2. Button
// ==========================================================================

const button = {
  sizes: buttonSizes,
  fontSize: {
    small: getFontSize(0.875),
    medium: getFontSize(1),
    large: getFontSize(1.25),
    xlarge: getFontSize(1.5),
  },
};

// 3. Heading
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
