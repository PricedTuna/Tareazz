import {createContext, useState} from 'react';
import {Course} from '../../../models/CourseModel';
import {coursesList} from '../../../api/coursesList';

interface coursesContextProps {
  courses: Course[];
  loadCourses: () => void;
  addCourse: (newCourse: Course) => void;
}

export const CoursesContext = createContext({} as coursesContextProps);

export const CoursesProvider = ({children}: any) => {
  const [courses, setCourses] = useState<Course[]>([]);

  const loadCourses = () => {
    setCourses(coursesList);
  };

  const addCourse = (newCourse: Course) => {
    setCourses([...courses, newCourse]);
  };

  return (
    <CoursesContext.Provider value={{courses, loadCourses, addCourse}}>
      {children}
    </CoursesContext.Provider>
  );
};
