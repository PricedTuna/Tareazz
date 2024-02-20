export interface Course {
  id_course: number;
  name: string;
  teacher_name: string;
  teacher_email: string;
  image: string;
}

export const CourseInitialState = {
  id_course: 0,
  name: '',
  teacher_name: '',
  teacher_email: '',
  image: '',
};
