import React, { useState, useEffect, useCallback } from 'react';

interface TaskSimulatorProps {
  task: string;
  onComplete: () => void;
}

const TaskSimulator: React.FC<TaskSimulatorProps> = ({ task, onComplete }) => {
  const [progress, setProgress] = useState(0);

  const handleComplete = useCallback(() => {
    onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (progress >= 100) {
      handleComplete();
      return;
    }

    const timer = setTimeout(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
    }, 500);

    return () => clearTimeout(timer);
  }, [progress, handleComplete]);

  return (
    <div>
      <p className="mb-2">Executing: {task}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TaskSimulator;