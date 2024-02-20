import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TaskDetailStyle} from '../../theme/appTheme';

type Color = 'blue' | 'green';
interface Props {
  color?: Color;
  action: () => void;
  text: string;
}

const CustomButton = ({color = 'blue', text, action}: Props) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.5} onPress={action}>
        <View
          style={{
            ...TaskDetailStyle.taskDetailButton,
            backgroundColor: color === 'blue' ? '#296d98' : '#487748',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>{text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
