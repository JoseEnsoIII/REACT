import React from 'react';
import Modal from 'react-modal';

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    zIndex: 9999, // Ensure it's on top
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '300px', // Adjust the width as needed
    zIndex: 10000, // Increase the z-index value
  },
};

const DeleteModal = ({ isOpen, onRequestClose, onDelete }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Delete Confirmation Modal"
      style={modalStyles}
    >
      <h2>Confirm Deletion</h2>
      <p>Are you sure you want to delete this row?</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default DeleteModal;
