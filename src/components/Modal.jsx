import React, { useEffect } from 'react';

export default function Modal({ onClose }) {
  // Close modal on ESC key
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        className="fixed top-1/2 left-1/2 z-50 max-w-md w-full bg-white rounded-xl p-6 shadow-lg transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ease-out"
      >
        <h2
          id="modal-title"
          className="text-2xl font-bold mb-4 text-purple-700"
        >
          Create New Avatar
        </h2>
        <p className="mb-6 text-gray-700">This is just a dummy modal (UI only).</p>

        <button
          onClick={onClose}
          className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition focus:outline-none focus:ring-4 focus:ring-pink-300"
          aria-label="Close modal"
        >
          Close
        </button>
      </div>
    </>
  );
}
