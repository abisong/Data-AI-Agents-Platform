import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import TaskSimulator from './TaskSimulator';

interface AIAgentDetailsProps {
  agent: {
    name: string;
    description: string;
    capabilities: string[];
  };
  onClose: () => void;
}

interface BackendConfig {
  url: string;
  apiKey: string;
}

const AIAgentDetails: React.FC<AIAgentDetailsProps> = ({ agent, onClose }) => {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);
  const [isTaskRunning, setIsTaskRunning] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);
  const [taskResult, setTaskResult] = useState<string | null>(null);
  const [backendConfig, setBackendConfig] = useState<BackendConfig>({ url: '', apiKey: '' });

  useEffect(() => {
    // In a real app, you would fetch this from your backend or local storage
    const fetchBackendConfig = () => {
      const config = {
        "Data Engineering Agent": { url: "https://data-engineering-api.example.com", apiKey: "de-api-key" },
        "Data Governance Agent": { url: "https://data-governance-api.example.com", apiKey: "dg-api-key" },
        "Data Security Agent": { url: "https://data-security-api.example.com", apiKey: "ds-api-key" },
      };
      setBackendConfig(config[agent.name as keyof typeof config]);
    };

    fetchBackendConfig();
  }, [agent.name]);

  const handleTaskComplete = async () => {
    setIsTaskRunning(false);
    setTaskCompleted(true);
    
    // Here, you would typically make an API call to your backend
    // For demonstration, we're using a timeout to simulate an API call
    setTimeout(() => {
      setTaskResult(generateSyntheticResult(agent.name, selectedCapability));
    }, 1000);
  };

  const generateSyntheticResult = (agentName: string, capability: string | null) => {
    // ... (keep the existing generateSyntheticResult function)
  };

  return (
    <Modal isOpen={true} onClose={onClose} title={agent.name}>
      {/* ... (keep the existing JSX) */}
      {selectedCapability && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h5 className="font-semibold mb-2">{selectedCapability}</h5>
          <p className="text-sm mb-2">Using backend: {backendConfig.url}</p>
          {!isTaskRunning && !taskCompleted && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setIsTaskRunning(true)}
            >
              Execute Task
            </button>
          )}
          {/* ... (keep the rest of the existing JSX) */}
        </div>
      )}
    </Modal>
  );
};

export default AIAgentDetails;