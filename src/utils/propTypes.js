import PropTypes from 'prop-types';
import theme from 'styles/theme';

export const GeneralPropTypes = {
  className: PropTypes.string,
  dataCy: PropTypes.string,
  theme: PropTypes.shape({}),
};

export const DefaultGeneralPropTypes = {
  theme: theme,
};
