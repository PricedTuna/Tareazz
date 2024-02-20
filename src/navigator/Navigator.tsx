import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
import {Course} from '../../models/CourseModel';
import {Task} from '../../models/TaskModel';
import TaskDetailsScreen from '../screens/TaskDetailsScreen';
import CourseCreateScreen from '../screens/CourseCreateScreen';

export type RootStackParams = {
  Home: undefined;
  CourseDetails: Course;
  TaskDetails: Task;
  CourseCreate: React.Dispatch<React.SetStateAction<Course[] | undefined>>;
};

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#202020'},
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
      <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
      <Stack.Screen name="CourseCreate" component={CourseCreateScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
