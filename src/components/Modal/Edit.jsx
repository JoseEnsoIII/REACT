import React from 'react';
import Modal from 'react-modal';

const modalStyles = {
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px', // Adjust the width as needed
    zIndex: 9999, // Increase the z-index value
  },
};

const EditModal = ({ isOpen, onRequestClose, onEdit, movieToEdit, onMovieChange }) => {
  const handleSaveEdit = () => {
    // Implement your logic to save the edited movie data
    onEdit();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedMovie = { ...movieToEdit, [name]: value };
    onMovieChange(updatedMovie);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Edit Movie Modal"
      style={modalStyles}
    >
      <h2>Edit Movie</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={movieToEdit.name}
            onChange={handleInputChange}
          />
        </div>
        {/* Add more input fields for other movie properties */}
        <div>
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={onRequestClose}>Cancel</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditModal;
