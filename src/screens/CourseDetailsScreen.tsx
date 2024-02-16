import {View, Text} from 'react-native';
import React from 'react';
import {CourseDetailsStyles, GlobalStyles} from '../../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';
import CourseDetailsProp from '../components/CourseDetailsProp';

interface NavigationProps
  extends StackScreenProps<RootStackParams, 'CourseDetails'> {}

const CourseDetailsScreen = ({route}: NavigationProps) => {
  const course = route.params;
  const {id_course, image, name, teacher, teacher_mail} = course;

  return (
    <View>
      <Text
        style={{
          ...CourseDetailsStyles.courseDetailsName,
          ...GlobalStyles.globalMargin,
        }}>
        {name}
      </Text>
      <View style={GlobalStyles.globalMargin}>
        <CourseDetailsProp text={teacher} />
        <CourseDetailsProp text={teacher_mail} />
      </View>
    </View>
  );
};

export default CourseDetailsScreen;
