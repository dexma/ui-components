import React from 'react';
import classNames from 'classnames';
import ReactPaginate from 'react-paginate';
import { GeneralPropTypes } from 'utils/propTypes';

import Icon from 'components/Icon';

const propTypes = {
  ...GeneralPropTypes,
};

const defaultProps = {
  classNamePrefix: 'pagination',
};

const Pagination = ({ className, classNamePrefix, dataCy, ...props }) => {
  const classes = classNames(className, classNamePrefix);
  return (
    <div data-cy={dataCy} className={classes}>
      <ReactPaginate
        previousLabel={<Icon name="left_arrow" />}
        nextLabel={<Icon name="right_arrow" />}
        pageLinkClassName="page"
        previousClassName="previous"
        nextClassName="next"
        breakClassName="break"
        containerClassName="container"
        subContainerClassName="pages pagination"
        activeClassName="active"
        {...props}
      />
    </div>
  );
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;
