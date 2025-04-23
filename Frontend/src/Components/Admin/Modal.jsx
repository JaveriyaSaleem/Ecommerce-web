import React from 'react';

/**
 * A simple Tailwind CSS modal component for React.
 * Props:
 *  - isOpen: Boolean to control visibility
 *  - onClose: Function to call when closing modal
 *  - title: String for modal header
 *  - children: React nodes for modal body
 */
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg w-full">
        {/* Header */}
        <div className="flex justify-between items-center border-b px-4 py-2 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

/*
Usage example in a parent component:

import React, { useState } from 'react';
import Modal from './Modal';

function ParentComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Open Modal
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Welcome!"
      >
        <p className="text-gray-800 dark:text-gray-200">
          This is a simple Tailwind + React modal.
        </p>
      </Modal>
    </>
  );
}
*/
