import React from "react";
import _ from "lodash";
import PropTypes from 'prop-types'

const Pagination = props => {
    const {totalLength, pageSize: propPageSize, currentPage, onPaginationClick} = props;
  const rowCount = totalLength;
  const pageSize = propPageSize;
  const paginationLength = Math.ceil(rowCount / pageSize);
  if (paginationLength === 1) return null;
  const paginationList = _.range(1, paginationLength + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" onClick={() => onPaginationClick(1)}>
            Start
          </a>
        </li>
        {paginationList.map(page => (
          <li key={page} className={page === currentPage ? 'page-item active': 'page-item'}>
            <a className="page-link" onClick={() => onPaginationClick(page)}>
            {page}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="page-link"
            onClick={() => onPaginationClick(paginationLength)}
          >
            End
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
    totalLength: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPaginationClick: PropTypes.func.isRequired
}

export default Pagination;
