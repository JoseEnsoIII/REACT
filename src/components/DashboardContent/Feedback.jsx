import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Table = styled.table`
  margin: auto;
  border: 1px solid #000;
  width: 80%;
  border-collapse: collapse;
`;

const ActionButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FeedbackTable = () => {
  const [feedbackData, setFeedbackData] = useState([
    { id: 1, userName: 'User1', movieTitle: 'Movie 1', feedback: 'Great website!' },
    { id: 2, userName: 'User2', movieTitle: 'Movie 2', feedback: 'Awesome content!' },
  ]);

  const [newFeedback, setNewFeedback] = useState({
    id: '',
    userName: '',
    movieTitle: '',
    feedback: '',
  });

  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (event, fieldName) => {
    const updatedFeedback = { ...newFeedback };
    updatedFeedback[fieldName] = event.target.value;
    setNewFeedback(updatedFeedback);
  };

  const handleAddFeedback = () => {
    if (newFeedback.id === '') {
      // Create a new feedback entry
      setFeedbackData([...feedbackData, newFeedback]);
    } else {
      // Update an existing feedback entry
      const updatedData = [...feedbackData];
      updatedData[editingIndex] = newFeedback;
      setFeedbackData(updatedData);
      setEditingIndex(null);
    }

    // Reset the form
    setNewFeedback({ id: '', userName: '', movieTitle: '', feedback: '' });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewFeedback(feedbackData[index]);
  };

  const handleDelete = (index) => {
    // Delete a feedback entry
    const updatedData = [...feedbackData];
    updatedData.splice(index, 1);
    setFeedbackData(updatedData);

    // Reset the form
    setNewFeedback({ id: '', userName: '', movieTitle: '', feedback: '' });
    setEditingIndex(null);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
       <div>
        <h2>Add or Edit Feedback</h2>
        <input
          type="text"
          placeholder="User Name"
          value={newFeedback.userName}
          onChange={(e) => handleInputChange(e, 'userName')}
        />
        <input
          type="text"
          placeholder="Movie Title"
          value={newFeedback.movieTitle}
          onChange={(e) => handleInputChange(e, 'movieTitle')}
        />
        <input
          type="text"
          placeholder="Feedback"
          value={newFeedback.feedback}
          onChange={(e) => handleInputChange(e, 'feedback')}
        />
        <ActionButton onClick={handleAddFeedback}>
          <FontAwesomeIcon icon={faPlus} /> {/* Create/Update */}
        </ActionButton>
      </div>
      <Table>
        <thead>
          <tr>
            <th style={{ width: '10%' }}>ID</th>
            <th style={{ width: '20%' }}>User Name</th>
            <th style={{ width: '20%' }}>Movie Title</th>
            <th style={{ width: '30%' }}>Feedback</th>
            <th style={{ width: '20%' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbackData.map((feedback, index) => (
            <tr key={feedback.id}>
              <td>{feedback.id}</td>
              <td>{feedback.userName}</td>
              <td>{feedback.movieTitle}</td>
              <td>{feedback.feedback}</td>
              <td>
                <ActionButton onClick={() => handleEdit(index)}>
                  <FontAwesomeIcon icon={faEdit} /> {/* Update */}
                </ActionButton>
                <ActionButton onClick={() => handleDelete(index)}>
                  <FontAwesomeIcon icon={faTrash} /> {/* Delete */}
                </ActionButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
     
    </div>
  );
};

export default FeedbackTable;
