import React from 'react';
import PropTypes from 'prop-types';
import { Pagination as PaginationAntDesign } from 'antd';
import { withTheme } from 'styled-components';

import Icon from './Icon';
import { StyledPagination } from '../styles/components/StyledPagination';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
  /**
   * Total number of items
   */
  total: PropTypes.number,
  /**
   * Items per age
   */
  pageSize: PropTypes.number,
  /**
   * Default initial page
   */
  defaultCurrent: PropTypes.number,
};

const defaultProps = {
  theme: theme,
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

export const Pagination = ({ theme, ...props }) => {
  return (
    <StyledPagination data-testid="pagination" theme={theme}>
      <PaginationAntDesign itemRender={itemRender} {...props} />
    </StyledPagination>
  );
};

StyledPagination.displayName = 'StyledPagination';

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default withTheme(Pagination);
