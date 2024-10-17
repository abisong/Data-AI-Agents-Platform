import React from 'react';
import { Bot } from 'lucide-react';

interface AIAgentProps {
  name: string;
  description: string;
  capabilities: string[];
  onClick: () => void;
}

const AIAgent: React.FC<AIAgentProps> = ({ name, description, capabilities, onClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={onClick}>
      <div className="flex items-center mb-4">
        <Bot className="w-8 h-8 text-blue-500 mr-3" />
        <h3 className="text-xl font-bold">{name}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <h4 className="font-semibold mb-2">Capabilities:</h4>
      <ul className="list-disc list-inside text-sm text-gray-700">
        {capabilities.slice(0, 2).map((capability, index) => (
          <li key={index}>{capability}</li>
        ))}
      </ul>
      {capabilities.length > 2 && (
        <p className="text-sm text-blue-500 mt-2">Click to see more...</p>
      )}
    </div>
  );
};

export default AIAgent;