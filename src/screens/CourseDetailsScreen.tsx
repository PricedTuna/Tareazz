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
  const {id_course, image, name, teacher_email, teacher_name} = course;

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
        <View>
          <CourseDetailsProp name={teacher_name} email={teacher_email} />
        </View>
      </View>
    </View>
  );
};

export default CourseDetailsScreen;
