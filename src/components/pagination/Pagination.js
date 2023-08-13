import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const CustomPagination = ({
  paginationNumber,
  setCurrentPage,
  currentPage,
}) => {
  console.log(currentPage);
  let pagination = [];
  for (let i = 1; i <= paginationNumber; i++) {
    pagination.push(i);
  }
  return (
    <div className="mt-3 d-flex justify-content-center">
      <Pagination>
        <Pagination.First onClick={() => setCurrentPage(1)} />
        <Pagination.Prev
          onClick={() => currentPage !== 1 && setCurrentPage(currentPage - 1)}
        />
        {pagination.map((page, i) => (
          <Pagination.Item key={i} onClick={() => setCurrentPage(page)}>
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() =>
            currentPage !== paginationNumber && setCurrentPage(currentPage + 1)
          }
        />
        <Pagination.Last onClick={() => setCurrentPage(paginationNumber)} />
      </Pagination>
    </div>
  );
};

export default CustomPagination;
