import { GlobalStyle, IsolatedGlobalStyle, UIComponentsStyle } from './utils/global';
import { color as colors, fontFamily, fontSize, fontWeightLight, fontWeightNormal, fontWeightSemiBold, fontWeightBold } from './utils/theme';

export * from './components';

/**
 * Typography tokens, exposed the same way `colors` is.
 *
 * Most UI inherits the family from `GlobalStyle` — reach for this only where inheritance cannot
 * apply (shadow-DOM `::part()` styles, canvas/SVG text, server-rendered images). Never redeclare
 * the stack as a literal in an app; this export is its single source of truth.
 */
export const typography = {
    fontFamily,
    fontSize,
    fontWeight: {
        light: fontWeightLight,
        normal: fontWeightNormal,
        semiBold: fontWeightSemiBold,
        bold: fontWeightBold,
    },
};

export { GlobalStyle, IsolatedGlobalStyle, UIComponentsStyle, colors };
