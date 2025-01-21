import React from "react";
import IconCross from "./icons/IconCross";

const Modal = ({ isOpen, onClose, children, title, className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-2 sm:p-0">
      <div className="relative w-full max-w-md px-4 sm:px-6 py-4 bg-white rounded-lg shadow-lg">
        {/* <button
          className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <IconCross />
        </button> */}

        <h2 className={className}>{title}</h2>

        <div className="pt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
