import {View, Text} from 'react-native';
import React from 'react';
import {CourseCreateStyle, GlobalStyles} from '../../../theme/appTheme';
import {TextInput} from 'react-native-gesture-handler';

interface Props {
  field: 'name' | 'image' | 'id_course' | 'teacher_name' | 'teacher_email';
  handleChange: (
    value: string,
    field: 'name' | 'image' | 'id_course' | 'teacher_name' | 'teacher_email',
  ) => void;
  title: string;
  defaultValue: string;
}

const CourseTextInput = ({field, title, defaultValue, handleChange}: Props) => {
  return (
    <View>
      <Text style={GlobalStyles.globalText}>{title}</Text>
      <TextInput
        style={CourseCreateStyle.CourseCreateTextInput}
        onChangeText={newContent => handleChange(newContent, field)}
        defaultValue={defaultValue}
      />
    </View>
  );
};

export default CourseTextInput;
