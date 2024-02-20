import {View, Text} from 'react-native';
import React from 'react';
import {TaskDetailStyle} from '../../../theme/appTheme';

interface Prop {
  text: string;
}

const TaskDetailProp = ({text}: Prop) => {
  return <Text style={TaskDetailStyle.taskDetailProp}>{text}</Text>;
};

export default TaskDetailProp;
