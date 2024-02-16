import {HomeWork} from './HomeWorkModel';

/*
  "Subject" en su propiedad "id_subject" hace referencia a su id en la basede datos, si esta es `0`
  significa que la materia es "default", esto significa que existe solamente para contener a las tareas
  sin materia asignada.

  * (MATERIA POR DEFECTO)
  * id_subject: 0
  
*/

export interface Course {
  id_course: number;
  name: string;
  teacher: string;
  teacher_mail: string;
  image: string;
}

export const CourseInitialState = {
  id_course: 0,
  name: 'Nombre de materia aqui',
  teacher: 'Nombre de profesor aqui',
  teacher_mail: 'correo@profesor.com',
  image: '',
};
