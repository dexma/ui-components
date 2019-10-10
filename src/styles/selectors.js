import get from 'lodash/get';

const propFromTheme = (theme, prop) => get(theme, `theme.${prop}`);

const padding = props => propFromTheme(props, 'padding');
const margin = props => propFromTheme(props, 'padding');
const border = props => propFromTheme(props, 'border');
const borderRadius = props => propFromTheme(props, 'borderRadius');
const borderColor = props => propFromTheme(props, 'borderColor');

const fontSize = props => propFromTheme(props, 'fontSize');
const fontColor = props => propFromTheme(props, 'fontColor');
const fontColorActive = props => propFromTheme(props, 'fontColorActive');
const fontWeightBold = props => propFromTheme(props, 'fontWeightBold');

const iconSize = props => propFromTheme(props, 'iconSize');
const iconColor = props => propFromTheme(props, 'iconColor');
const iconColorActive = props => propFromTheme(props, 'iconColorActive');

const backgroundColor = props => propFromTheme(props, 'backgroundColor');
const backgroundColorSelected = props =>
  propFromTheme(props, 'backgroundColorSelected');
const backgroundColorActive = props =>
  propFromTheme(props, 'backgroundColorActive');
const backgroundColorHover = props =>
  propFromTheme(props, 'backgroundColorHover');
const backgroundColorFocused = props =>
  propFromTheme(props, 'backgroundColorFocused');

const gray300Color = props => propFromTheme(props, 'gray300');
const successColor = props => propFromTheme(props, 'success');
const warningColor = props => propFromTheme(props, 'warning');
const errorColor = props => propFromTheme(props, 'error');

const componentHeight = props => propFromTheme(props, 'heightElements');

const buttonFontSizeSmall = props =>
  propFromTheme(props, 'button.fontSize.small');
const buttonFontSizeMedium = props =>
  propFromTheme(props, 'button.fontSize.medium');
const buttonFontSizeLarge = props =>
  propFromTheme(props, 'button.fontSize.large');
const buttonFontSizeXLarge = props =>
  propFromTheme(props, 'button.fontSize.xlarge');

export {
  padding,
  margin,
  border,
  borderRadius,
  borderColor,
  fontSize,
  fontColor,
  fontColorActive,
  fontWeightBold,
  iconSize,
  iconColor,
  iconColorActive,
  backgroundColor,
  backgroundColorSelected,
  backgroundColorActive,
  backgroundColorHover,
  backgroundColorFocused,
  componentHeight,
  gray300Color,
  successColor,
  warningColor,
  errorColor,
  buttonFontSizeSmall,
  buttonFontSizeMedium,
  buttonFontSizeLarge,
  buttonFontSizeXLarge,
};
