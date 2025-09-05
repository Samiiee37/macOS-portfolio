import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewDataSourceModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50 ">
      <div className="bg-white rounded-lg shadow-lg w-[500px] p-6">
        <h2 className="text-xl font-semibold mb-6">Data Source</h2>

        {/* Apps Dropdown */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Apps</label>
          <select className="w-full border rounded px-3 py-2">
            <option>Select App Here</option>
            <option>Slack</option>
            <option>Google Drive</option>
            <option>Github</option>
          </select>
        </div>

        {/* Integration Info Dropdown */}
        <div className="mb-6">
          <label className="block font-medium mb-1">Integration Info</label>
          <select className="w-full border rounded px-3 py-2">
            <option>We will connect to read messages and user metadata</option>
            <option>Full Access Integration</option>
            <option>Custom Integration</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 border rounded text-orange-600 border-orange-600 hover:bg-orange-50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Add Data Source
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewDataSourceModal;
