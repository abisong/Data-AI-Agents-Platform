import React, { useState } from 'react';

interface BackendConfig {
  url: string;
  apiKey: string;
}

const Settings: React.FC = () => {
  const [dataEngineeringConfig, setDataEngineeringConfig] = useState<BackendConfig>({ url: '', apiKey: '' });
  const [dataGovernanceConfig, setDataGovernanceConfig] = useState<BackendConfig>({ url: '', apiKey: '' });
  const [dataSecurityConfig, setDataSecurityConfig] = useState<BackendConfig>({ url: '', apiKey: '' });

  const handleSave = () => {
    // Here you would typically save these configurations to a backend or local storage
    console.log('Saving configurations:', {
      dataEngineering: dataEngineeringConfig,
      dataGovernance: dataGovernanceConfig,
      dataSecurity: dataSecurityConfig
    });
    alert('Settings saved successfully!');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Backend Settings</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Engineering Backend</h2>
        <input
          type="text"
          placeholder="Backend URL"
          className="w-full p-2 mb-2 border rounded"
          value={dataEngineeringConfig.url}
          onChange={(e) => setDataEngineeringConfig({...dataEngineeringConfig, url: e.target.value})}
        />
        <input
          type="text"
          placeholder="API Key"
          className="w-full p-2 mb-2 border rounded"
          value={dataEngineeringConfig.apiKey}
          onChange={(e) => setDataEngineeringConfig({...dataEngineeringConfig, apiKey: e.target.value})}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Governance Backend</h2>
        <input
          type="text"
          placeholder="Backend URL"
          className="w-full p-2 mb-2 border rounded"
          value={dataGovernanceConfig.url}
          onChange={(e) => setDataGovernanceConfig({...dataGovernanceConfig, url: e.target.value})}
        />
        <input
          type="text"
          placeholder="API Key"
          className="w-full p-2 mb-2 border rounded"
          value={dataGovernanceConfig.apiKey}
          onChange={(e) => setDataGovernanceConfig({...dataGovernanceConfig, apiKey: e.target.value})}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Data Security Backend</h2>
        <input
          type="text"
          placeholder="Backend URL"
          className="w-full p-2 mb-2 border rounded"
          value={dataSecurityConfig.url}
          onChange={(e) => setDataSecurityConfig({...dataSecurityConfig, url: e.target.value})}
        />
        <input
          type="text"
          placeholder="API Key"
          className="w-full p-2 mb-2 border rounded"
          value={dataSecurityConfig.apiKey}
          onChange={(e) => setDataSecurityConfig({...dataSecurityConfig, apiKey: e.target.value})}
        />
      </div>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSave}
      >
        Save Settings
      </button>
    </div>
  );
};

export default Settings;