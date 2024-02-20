import {Task} from '../models/TaskModel';

export const tasksList: Task[] = [
  {
    id_task: 1,
    title: 'tarea1 IS',
    description: 'descripcion de la tarea1 de IS',
    deadline: 'mañana',
    realized: false,
  },
  {
    id_task: 2,
    title: 'tarea2 IS',
    description: 'Esta es la descrip tarea2 de IS',
    deadline: undefined,
    realized: false,
  },
  {
    id_task: 3,
    title: 'tarea1 karla',
    description: 'descripcion de tarea1karla',
    deadline: undefined,
    realized: false,
  },
  {
    id_task: 4,
    title: 'tarea2 karla',
    description: 'descripcion karlatarea2 uwu',
    deadline: undefined,
    realized: false,
  },
];
