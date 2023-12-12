import React from 'react';

const Modal = ({ children, onClose }) => {
  const handleDialogClick = (event) => {
    // Stop the event propagation to prevent it from reaching the outer div
    event.stopPropagation();
  };

  return (
    <>
      <div
        className="fixed inset-0 flex items-center justify-center bg-black inset bg-opacity-30 backdrop-blur-sm "
        onClick={onClose}
      >
        <dialog
          open
          className="px-16 py-4 text-white bg-blue-800 rounded-lg shadow-md"
          onClick={handleDialogClick}
        >
          {children}
        </dialog>
      </div>
    </>
  );
};

export default Modal;
