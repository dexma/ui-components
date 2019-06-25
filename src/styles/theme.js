// Table of Contents:
//
//  1. Global
//  2. Component

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

// Font
export const fontSizeNumber = 0.85;
export const fontSizeType = 'em';
export const fontSize = `${fontSizeNumber}${fontSizeType}`;
export const fontColor = gray600;
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
export const backgroundColorActive = brand;
export const backgroundColorHover = white;
export const backgroundColorFocused = white;

// Others
export const radius = '3px';
export const fontWeightBold = 700;
export const padding = '20px';
export const borderColor = gray100;
export const heightElements = '30px';

export const sizes = {
  small: getFontSize(fontSizeNumber),
  medium: getFontSize(fontSizeNumber * 1.5),
  large: getFontSize(fontSizeNumber * 2),
  xlarge: getFontSize(fontSizeNumber * 2.5),
};

// 1. Global
// ==========================================================================

const global = {
  border: `1px solid ${gray100}`,
  borderRadius: radius,
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
};

// 2. Component
// ==========================================================================

const component = {
  height: heightElements,
};

const theme = {
  ...global,
  component,
};

export default theme;
