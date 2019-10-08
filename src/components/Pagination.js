import React, { memo } from 'react';
import ReactPaginate from 'react-paginate';
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

const Pagination = ({ theme, dataCy, ...props }) => {
  return (
    <StyledPagination theme={theme}>
      <ReactPaginate
        previousLabel={<Icon name="left_arrow" />}
        nextLabel={<Icon name="right_arrow" />}
        pageClassName="page"
        pageLinkClassName="link"
        previousClassName="previous"
        nextClassName="next"
        breakClassName="break"
        containerClassName="container"
        subContainerClassName="pages pagination"
        activeClassName="active"
        {...props}
      />
    </StyledPagination>
  );
};

StyledPagination.displayName = 'StyledPagination';

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default memo(withTheme(Pagination));
