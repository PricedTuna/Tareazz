import {View, Text, Touchable} from 'react-native';
import React from 'react';
import {
  CourseDetailsStyles,
  GlobalStyles,
  TaskDetailStyle,
} from '../../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';
import TaskDetailProp from '../components/taskDetailsComponents/TaskDetailProp';
import TaskDetailButton from '../components/taskDetailsComponents/TaskDetailButton';

interface NavigationProps
  extends StackScreenProps<RootStackParams, 'TaskDetails'> {}

const TaskDetailsScreen = ({route}: NavigationProps) => {
  const task = route.params;
  const {id_task, id_course, title, description, deadline, realized} = task;

  const taskDeadline: string = deadline ? deadline : 'undefined';

  return (
    <View>
      <View>
        <Text
          style={{
            ...CourseDetailsStyles.courseDetailsName,
            ...GlobalStyles.globalMargin,
          }}>
          {title}
        </Text>
        <View style={GlobalStyles.globalMargin}>
          <View style={CourseDetailsStyles.courseDetailsDataContainer}>
            <TaskDetailProp text={`Descripción: ${description}`} />
            <TaskDetailProp text={`Fecha limite: ${taskDeadline}`} />
            <TaskDetailProp text={`Curso: ${courseName}`} />
            <TaskDetailProp text={`Finalizada: ${realized ? 'si' : 'no'}`} />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TaskDetailButton
            iconName="create-outline"
            action={() => {
              console.log('hola');
            }}
          />
          <TaskDetailButton
            iconName="trash-outline"
            action={() => {
              console.log('hola');
            }}
            color="red"
          />
        </View>
      </View>
    </View>
  );
};

export default TaskDetailsScreen;
