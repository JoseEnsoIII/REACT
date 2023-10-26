import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;

const PageNumber = styled.button`
  background: ${(props) => (props.isActive ? '#007BFF' : 'white')};
  color: ${(props) => (props.isActive ? 'white' : '#007BFF')};
  border: 1px solid #007BFF;
  border-radius: 4px;
  margin: 5px;
  margin-top:80px;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
`;

function SimplePagination({ currentPage, totalItems, itemsPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Create an array of page numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <PaginationContainer>
      {pageNumbers.map((page) => (
        <PageNumber
          key={page}
          isActive={page === currentPage}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageNumber>
      ))}
    </PaginationContainer>
  );
}

export default SimplePagination;
