import styled from 'styled-components';
import { hsl, parseToHsl } from 'polished';

const StyledFieldGroup = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  .item {
    ${props => button(props.theme)};
    &.active {
      ${props => active(props.theme)};
    }
  }
  .vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .item:not(:last-child) {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .item:not(:first-child) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .item + .item {
      margin-top: -1px;
      margin-left: 0;
    }
  }
  .horizontal {
    display: flex;
    .item:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .item:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .item + .item {
      margin-left: -1px;
    }
    .item:not(:disabled) {
      cursor: pointer;
    }
  }
  input {
    opacity: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;

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

export { StyledFieldGroup };
