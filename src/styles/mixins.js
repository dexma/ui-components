import { css } from 'styled-components';
import { hsl, parseToHsl } from 'polished';

import {
  border,
  borderRadius,
  backgroundColor,
  backgroundColorActive,
  fontSize,
  fontColor,
  fontWeightBold,
  componentHeight,
} from 'styles/selectors';

const button = () => css`
  min-height: ${componentHeight};
  align-items: center;
  align-content: center;
  display: flex;
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  font-size: ${fontSize};
  font-weight: ${fontWeightBold};
  color: ${fontColor};
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background: ${backgroundColor};
  border: ${border};
  border-radius: ${borderRadius};
  outline: none;
`;

const active = () => css`
  background-color: ${backgroundColorActive};
  border: 1px solid
    ${props => {
      const colorActive = backgroundColorActive(props);
      return colorBorderActive(colorActive);
    }};
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
}; */

const colorBorderActive = primaryBrandColor => {
  const { hue, saturation, lightness } = parseToHsl(primaryBrandColor);
  return hsl({ hue, saturation, lightness: lightness - 0.05 });
};

export { button, active };
