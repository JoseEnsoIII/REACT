import React, { useState } from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

const MovieTable = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Function to open the Edit modal
  const openEditModal = () => {
    setShowEditModal(true);
  };

  // Function to open the View modal
  const openViewModal = () => {
    setShowViewModal(true);
  };

  // Function to open the Delete modal
  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };
  return (
    <StyledTable style={{ borderCollapse: 'collapse', width: '100%',marginTop:"20%" }}>
      <thead>
        <tr>
          <th style={headerCellStyle}>Movie Name</th>
          <th style={headerCellStyle}>Release Date</th>
          <th style={headerCellStyle}>Genre</th>
          <th style={headerCellStyle}>Country</th>
          <th style={headerCellStyle}>Movie Details</th>
          <th style={headerCellStyle}>Duration</th>
          <th style={headerCellStyle}>Cast</th>
          <th style={headerCellStyle}>Movie Quality</th>
          <th style={headerCellStyle}>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* Map through your data and create StyledTable rows here */}
        <tr>
          <td style={cellStyle}>Movie 1</td>
          <td style={cellStyle}>2023-10-20</td>
          <td style={cellStyle}>Action</td>
          <td style={cellStyle}>USA</td>
          <td style={cellStyle}>Details</td>
          <td style={cellStyle}>120 minutes</td>
          <td style={cellStyle}>Cast Members</td>
          <td style={cellStyle}>HD</td>
          <td style={{ ...cellStyle, cursor: 'pointer' }} onClick={openEditModal}>
            <FaEdit />
          </td>
          <td style={{ ...cellStyle, cursor: 'pointer' }} onClick={openViewModal}>
            <FaEye />
          </td>
          <td style={{ ...cellStyle, cursor: 'pointer' }} onClick={openDeleteModal}>
            <FaTrash />
          </td>
        </tr>
        {/* Add more rows here as needed */}
      </tbody>
      {showEditModal && <EditModal onClose={() => setShowEditModal(false)} />}
      {showViewModal && <ViewModal onClose={() => setShowViewModal(false)} />}
      {showDeleteModal && <DeleteModal onClose={() => setShowDeleteModal(false)} />}
    </StyledTable>
    
  );
};

const headerCellStyle = {
  backgroundColor: '#f2f2f2',
  padding: '8px',
  textAlign: 'left',
  borderBottom: '1px solid #ddd',
};

const cellStyle = {
  padding: '8px',
  borderBottom: '1px solid #ddd',
};
const StyledTable = styled.table`
  position: absolute;
  margin-top: 200px;
  border-collapse: collapse;
  width: 100%;
`;
export default MovieTable;
