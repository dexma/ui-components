import PropTypes from 'prop-types';
import theme from '../styles/theme';

export const GeneralPropTypes = {
  className: PropTypes.string,
  dataCy: PropTypes.string,
  theme: PropTypes.shape({}),
};

export const DefaultGeneralPropTypes = {
  theme: theme,
};

export const ColumnSizePropTypes = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.bool,
]);

export const BreakpointsPropTypes = PropTypes.oneOf(['xs', 'sm', 'md', 'lg']);
