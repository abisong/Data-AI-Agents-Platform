import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import Modal from './Modal';
import TaskSimulator from './TaskSimulator';

interface AIAgentFeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const AIAgentFeature: React.FC<AIAgentFeatureProps> = ({ icon: Icon, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTaskRunning, setIsTaskRunning] = useState(false);
  const [taskCompleted, setTaskCompleted] = useState(false);

  const handleTaskComplete = () => {
    setIsTaskRunning(false);
    setTaskCompleted(true);
  };

  return (
    <>
      <li className="flex items-start cursor-pointer" onClick={() => setIsModalOpen(true)}>
        <Icon className="w-6 h-6 mr-2 text-blue-500 flex-shrink-0" />
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </li>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={title}>
        <p className="mb-4">{description}</p>
        {!isTaskRunning && !taskCompleted && (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setIsTaskRunning(true)}
          >
            Execute Task
          </button>
        )}
        {isTaskRunning && <TaskSimulator task={title} onComplete={handleTaskComplete} />}
        {taskCompleted && (
          <p className="text-green-600 font-semibold">Task completed successfully!</p>
        )}
      </Modal>
    </>
  );
};

export default AIAgentFeature;