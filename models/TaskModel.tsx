export interface Task {
  id_task: number;
  id_course?: number;
  title: string;
  description: string;
  deadline?: string;
  realized: boolean;
}

export const TaskInitialState = {
  id_task: 0,
  id_course: undefined,
  title: 'titulo de tarea aqui',
  description: 'descripcion de tarea aqui',
  deadline: undefined,
  realized: false,
};
