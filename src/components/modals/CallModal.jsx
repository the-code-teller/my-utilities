import React, { useState } from 'react'
import Modal from '../commons/Modal';

const CallModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-lg font-semibold">Modal Title</h2>
        <p className="mt-2 text-gray-600">This is the modal content.</p>
        <button
          className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
          onClick={() => setIsModalOpen(false)}
        >
          Close
        </button>
      </Modal>
    </div>
  )
}

export default CallModal