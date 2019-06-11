import { hsl, parseToHsl } from 'polished';

const button = ({
  globalHeightElements,
  buttonFontFamily,
  buttonFontWeight,
  primaryColor,
  borderElements,
  buttonRadius,
}) => `
  min-height: ${globalHeightElements};
  align-items: center;
  align-content: center;
  display: flex;
  padding: 0 10px;
  margin-bottom: 0;
  font-size: ${buttonFontFamily};
  font-weight: ${buttonFontWeight};
  color: ${primaryColor};
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  background: #fff;
  border: 1px solid ${borderElements};
  border-radius: ${buttonRadius};
  outline: none;
`;

const active = ({ primaryBrandColor, white }) => `
  background-color: ${backgroundColorActive(primaryBrandColor)};
  border: 1px solid ${boxShadowColorActiveHsl2(primaryBrandColor)};
  outline: 0;
  color: ${white};
`;

const boxShadowActive = primaryBrandColor => {
  return `inset 0 1px 0 ${boxShadowColorActiveHsl1(primaryBrandColor)},
  inset 0 1px 0 ${boxShadowColorActiveHsl2(primaryBrandColor)}`;
};

const backgroundColorActive = primaryBrandColor => {
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

const boxShadowColorActiveHsl2 = primaryBrandColor => {
  const { hue, saturation, lightness } = parseToHsl(primaryBrandColor);
  return hsl({ hue, saturation, lightness: lightness - 0.05 });
};

export {
  button,
  active,
  boxShadowActive,
  borderColorActive,
  backgroundColorActive,
};
