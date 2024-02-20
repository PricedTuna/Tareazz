import {createContext, useState} from 'react';
import {tasksList} from '../../../api/tasksList';
import {Task} from '../../../models/TaskModel';

interface tasksContextProps {
  tasks: Task[];
}

export const TasksContext = createContext({} as tasksContextProps);

export const TasksProvider = ({children}: any) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = () => {
    setTasks(tasksList);
  };

  return (
    <TasksContext.Provider value={{tasks}}>{children}</TasksContext.Provider>
  );
};
