import React from 'react';
import { Lock, Key, ShieldCheck, EyeOff, FileSearch, BookOpen, HeadphonesIcon } from 'lucide-react';
import AIAgentFeature from './AIAgentFeature';

const DataSecurity: React.FC = () => {
  const features = [
    { icon: Lock, title: 'Safeguard Your Data', description: 'Strict access control for sensitive information' },
    { icon: Key, title: 'Advanced Authentication', description: 'Multi-factor authentication to verify identities' },
    { icon: ShieldCheck, title: 'Secure Encryption', description: 'Top-tier encryption for data at rest and in transit' },
    { icon: EyeOff, title: 'Intelligent Masking', description: 'Data masking to protect sensitive information' },
    { icon: FileSearch, title: 'Extensive Auditing', description: 'Track and monitor all data access and modifications' },
    { icon: BookOpen, title: 'Regulation Ready', description: 'Compliance with SOC2, GDPR, HIPAA, and CCPA' },
    { icon: HeadphonesIcon, title: 'Always-On Support', description: '24/7 "white glove" support and monitoring' }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Data Security & Monitoring</h2>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <AIAgentFeature key={index} {...feature} />
        ))}
      </ul>
    </div>
  );
};

export default DataSecurity;