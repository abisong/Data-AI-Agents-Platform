import React from 'react';
import DataEngineering from '../components/DataEngineering';
import DataGovernance from '../components/DataGovernance';
import DataSecurity from '../components/DataSecurity';
import AIAgents from '../components/AIAgents';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">Data AI Agents Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <DataEngineering />
        <DataGovernance />
        <DataSecurity />
      </div>
      <AIAgents />
    </div>
  );
};

export default Home;