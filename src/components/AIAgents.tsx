import React, { useState } from 'react';
import AIAgent from './AIAgent';
import AIAgentDetails from './AIAgentDetails';

const AIAgents: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const agents = [
    {
      name: "Data Engineering Agent",
      description: "Specializes in data integration, transformation, and optimization.",
      capabilities: [
        "Implement ELT and ETL processes",
        "Enhance data with business logic",
        "Optimize data integration and storage",
        "Support real-time and batch processing"
      ]
    },
    {
      name: "Data Governance Agent",
      description: "Ensures data quality, compliance, and proper management.",
      capabilities: [
        "Maintain data accuracy and consistency",
        "Implement robust data management practices",
        "Ensure compliance with regulations (GDPR, HIPAA, CCPA)",
        "Provide data catalog and metadata management"
      ]
    },
    {
      name: "Data Security Agent",
      description: "Protects data integrity, confidentiality, and availability.",
      capabilities: [
        "Implement access control and authentication",
        "Provide data encryption and masking",
        "Conduct security audits and monitoring",
        "Offer 24/7 security support and incident response"
      ]
    }
  ];

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our AI Agents</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {agents.map((agent, index) => (
          <AIAgent
            key={index}
            {...agent}
            onClick={() => setSelectedAgent(agent.name)}
          />
        ))}
      </div>
      {selectedAgent && (
        <AIAgentDetails
          agent={agents.find(a => a.name === selectedAgent)!}
          onClose={() => setSelectedAgent(null)}
        />
      )}
    </div>
  );
};

export default AIAgents;