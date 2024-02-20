import {coursesList} from '../../../api/coursesList';
import {Course} from '../../../models/CourseModel';

type CoursesAction =
  | {type: 'load_courses'}
  | {type: 'add_course'; payload: Course};

export const coursesReducer = (
  state: Course[],
  action: CoursesAction,
): Course[] => {
  switch (action.type) {
    case 'load_courses':
      return coursesList;
      break;

    case 'add_course':
      return [...state, action.payload];
      break;

    default:
      return state;
      break;
  }
};
