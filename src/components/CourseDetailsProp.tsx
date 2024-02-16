import {View, Text} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../theme/appTheme';

interface Props {
  text: string;
}

const CourseDetailsProp = ({text}: Props) => {
  return (
    <View>
      <Text style={GlobalStyles.globalText}>{text}</Text>
    </View>
  );
};

export default CourseDetailsProp;
