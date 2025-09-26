// src/components/WorkflowModal.jsx
import React from "react";

const WorkflowModal = ({ isOpen, onClose, feature }) => {
  if (!isOpen || !feature) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-indigo-700">
          {feature.title} Workflow
        </h2>

        {/* Frontend & Backend */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Frontend:</h3>
            <p className="text-gray-600">{feature.frontend}</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-800">Backend:</h3>
            <p className="text-gray-600">{feature.backend}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowModal;
