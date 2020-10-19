"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.active = exports.button = void 0;

var _styledComponents = require("styled-components");

var _selectors = require("./selectors");

var button = function button() {
  return (0, _styledComponents.css)(["min-height:", ";align-items:center;align-content:center;display:flex;margin-bottom:0;font-size:", ";font-weight:600;color:", ";text-align:center;vertical-align:middle;cursor:pointer;background:", ";border:", ";border-radius:", ";outline:none;border:0px;line-height:1.5rem;"], _selectors.componentHeight, _selectors.fontSize, _selectors.fontColor, _selectors.backgroundColor, _selectors.border, _selectors.borderRadius);
};

exports.button = button;

var active = function active() {
  return (0, _styledComponents.css)(["background-color:", ";outline:0;color:", ";"], _selectors.backgroundColorActive, _selectors.backgroundColor);
};
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


exports.active = active;