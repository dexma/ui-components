import { css } from 'styled-components';

import {
  border,
  borderRadius,
  backgroundColor,
  backgroundColorActive,
  fontSize,
  fontColor,
  componentHeight,
} from 'styles/selectors';

const button = () => css`
  min-height: ${componentHeight};
  align-items: center;
  align-content: center;
  display: flex;
  margin-bottom: 0;
  font-size: ${fontSize};
  font-weight: 600;
  color: ${fontColor};
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background: ${backgroundColor};
  border: ${border};
  border-radius: ${borderRadius};
  outline: none;
  border: 0px;
  line-height: 1.5rem;
`;

const active = () => css`
  background-color: ${backgroundColorActive};
  outline: 0;
  color: ${backgroundColor};
`;

/* const getBackgroundColorActive = primaryBrandColor => {
  const { hue, saturation, lightness } = parseToHsl(primaryBrandColor);
  return hsl({ hue, saturation, lightness });
};

const borderColorActive = primaryBrandColor => {
  const { hue, saturation, lightness } = parseToHsl(primaryBrandColor);
  return hsl({ hue, saturation, lightness: lightness - 0.1 });
};

const boxShadowColorActiveHsl1 = primaryBrandColor => {
  const { hue, saturation, lightness } = parseToHsl(primaryBrandColor);
  return hsl({ hue, saturation, lightness: lightness + 0.25 });
};

const colorBorderActive = primaryBrandColor => {
  const { hue, saturation, lightness } = parseToHsl(primaryBrandColor);
  return hsl({ hue, saturation, lightness: lightness - 0.05 });
}; */

export { button, active };
