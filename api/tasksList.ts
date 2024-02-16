import {HomeWork} from '../models/HomeWorkModel';

export const tasksList: HomeWork[] = [
  {
    id_homeWork: 1,
    title: 'tarea1 IS',
    description: 'descripcion de la tarea1 de IS',
    realized: false,
    id_course: 1,
  },
  {
    id_homeWork: 2,
    title: 'tarea2 IS',
    description: 'Esta es la descrip tarea2 de IS',
    realized: false,
    id_course: 1,
  },
  {
    id_homeWork: 1,
    title: 'tarea1 karla',
    description: 'descripcion de tarea1karla',
    realized: false,
    id_course: 2,
  },
  {
    id_homeWork: 2,
    title: 'tarea2 karla',
    description: 'descripcion karlatarea2 uwu',
    realized: false,
    id_course: 2,
  },
];
