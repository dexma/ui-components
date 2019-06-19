import get from 'lodash/get';

const propFromTheme = (theme, prop) => get(theme, `theme.${prop}`);

const padding = props => propFromTheme(props, 'padding');
const margin = props => propFromTheme(props, 'padding');
const borderRadius = props => propFromTheme(props, 'borderRadius');

export { padding, margin, borderRadius };
