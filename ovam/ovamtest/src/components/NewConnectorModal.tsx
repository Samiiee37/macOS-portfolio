import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Connector {
  name: string;
  description: string;
  logo: string;
}

const connectors: Connector[] = [
  {
    name: "Jira",
    description: "Plan, track, and release great software. Using Jira Data Center (Self-Hosted)?",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968875.png",
  },
  {
    name: "Linear",
    description: "Streamline software projects, sprints, and bug tracking.",
    logo: "https://seeklogo.com/images/L/linear-icon-logo-6E5B422A34-seeklogo.com.png",
  },
  {
    name: "CircleCI",
    description:
      "Continuous Integration and Delivery Platform. Connect your CircleCI builds for enhanced PR analysis.",
    logo: "https://cdn.worldvectorlogo.com/logos/circleci-1.svg",
  },
  {
    name: "Slack",
    description: "Start in minutes. Scale when you're ready.",
    logo: "https://cdn-icons-png.flaticon.com/512/2111/2111615.png",
  },
];

const NewConnectorModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [selected, setSelected] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSelect = (name: string) => {
    setSelected((prev) => (prev === name ? null : name));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg shadow-lg w-[800px] p-6">
        <h2 className="text-xl font-semibold mb-4">Groups</h2>

        {/* Grid of connectors */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {connectors.map((c) => (
            <div
              key={c.name}
              className={`border rounded-lg p-4 flex gap-4 items-start cursor-pointer ${
                selected === c.name ? "border-orange-500 bg-orange-50" : "border-gray-200"
              }`}
              onClick={() => handleSelect(c.name)}
            >
              <img src={c.logo} alt={c.name} className="w-10 h-10 object-contain" />
              <div>
                <h3 className="font-medium">{c.name}</h3>
                <p className="text-sm text-gray-600">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 border rounded text-orange-600 border-orange-600 hover:bg-orange-50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            disabled={!selected}
            className={`px-4 py-2 rounded text-white ${
              selected ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Add Connections
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewConnectorModal;
