import React from 'react';
import { CheckCircle, Shield, Award, UserCheck, FileCheck, Book } from 'lucide-react';
import AIAgentFeature from './AIAgentFeature';

const DataGovernance: React.FC = () => {
  const features = [
    { icon: CheckCircle, title: 'Accurate Data', description: 'Ensure clean, accurate, and secure data' },
    { icon: Shield, title: 'Robust Management', description: 'Gain robust data management without overhead' },
    { icon: Award, title: 'Top-Tier Governance', description: 'Powered by AWS and Azure for top-tier solutions' },
    { icon: UserCheck, title: 'User Confidence', description: 'Implement checks and balances for data accuracy' },
    { icon: FileCheck, title: 'Comply with Regulations', description: 'Help comply with GDPR, HIPAA, and CCPA' },
    { icon: Book, title: 'Transparency & Consistency', description: 'Data catalog as a single source of reference' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Data Governance</h2>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <AIAgentFeature key={index} {...feature} />
        ))}
      </ul>
    </div>
  );
};

export default DataGovernance;