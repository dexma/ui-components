import React, { memo } from 'react';
import { Pagination as PaginationAntDesign } from 'antd';

import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import Icon from 'components/Icon';

import { StyledPagination } from 'styles/components/StyledPagination';

const propTypes = {
  ...GeneralPropTypes,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
};

export const itemRender = (current, type, originalElement) => {
  if (type === 'prev') {
    return <Icon name="chevron_left_l" color="gray900" size={12} />;
  }
  if (type === 'next') {
    return <Icon name="chevron_right_l" color="gray900" size={12} />;
  }
  return originalElement;
};

export const Pagination = ({ theme, dataCy, ...props }) => {
  return (
    <StyledPagination theme={theme}>
      <PaginationAntDesign itemRender={itemRender} {...props} />
    </StyledPagination>
  );
};

StyledPagination.displayName = 'StyledPagination';

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default memo(withTheme(Pagination));
