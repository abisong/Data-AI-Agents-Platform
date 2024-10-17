import React from 'react';
import { Cog, Zap, Wrench, DollarSign, BarChart, Clock, Workflow, Layers } from 'lucide-react';
import AIAgentFeature from './AIAgentFeature';

const DataEngineering: React.FC = () => {
  const features = [
    { icon: Cog, title: 'Quick Data Integration', description: 'ELT and ETL frameworks for quick data integration' },
    { icon: Zap, title: 'Enhanced Logic', description: 'Enhance data with business logic for reliability' },
    { icon: Wrench, title: 'Right Tools', description: 'Choose the right data integration tools for your needs' },
    { icon: DollarSign, title: 'Cost Effective', description: 'Prioritize cost-effective data integration and storage' },
    { icon: BarChart, title: 'Maximize Data Value', description: 'Rapid ingestion and scalable resources' },
    { icon: Clock, title: 'Real-Time Processing', description: 'Support for real-time data processing' },
    { icon: Workflow, title: 'Removes Bottlenecks', description: 'Automate workflows and standardize transformation' },
    { icon: Layers, title: 'Speedy Batching', description: 'Efficient batch processing for large data volumes' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Data Engineering</h2>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <AIAgentFeature key={index} {...feature} />
        ))}
      </ul>
    </div>
  );
};

export default DataEngineering;