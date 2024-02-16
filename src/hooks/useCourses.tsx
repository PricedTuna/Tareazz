import {useEffect, useState} from 'react';
import {coursesList} from '../../api/coursesList';
import {Course} from '../../models/SubjectModel';

const useCourses = () => {
  const [courses, setCourses] = useState<Course[]>();

  const getCoursesList = () => {
    setCourses(coursesList);
  };

  useEffect(() => {
    getCoursesList();
  }, []);

  return {courses};
};

export default useCourses;
