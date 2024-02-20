import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TaskDetailStyle} from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

type Color = 'blue' | 'red';
interface Props {
  color?: Color;
  action: () => void;
  iconName: string;
}

const TaskDetailButton = ({color = 'blue', iconName, action}: Props) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} onPress={action}>
        <View
          style={{
            ...TaskDetailStyle.taskDetailButton,
            backgroundColor: color === 'blue' ? '#296d98' : '#b30000',
          }}>
          <Icon name={iconName} size={27} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TaskDetailButton;
