export interface HomeWork {
  id_homeWork: number;
  title: string;
  description: string;
  realized: boolean;
  id_course?: number;
}

export const HomeWorkInitialState = {
  id_homeWork: 0,
  title: 'titulo de tarea aqui',
  description: 'descripcion de tarea aqui',
  realized: false,
  id_course: undefined,
};
