import {View, Text} from 'react-native';
import React from 'react';
import {CourseDetailsStyles} from '../../theme/appTheme';
import {Teacher} from '../../models/TeacherModel';

interface Props {
  name: string;
  email: string;
}

const CourseDetailsProp = ({name, email}: Props) => {
  return (
    <View style={CourseDetailsStyles.courseDetailsDataContainer}>
      <Text style={CourseDetailsStyles.courseDetailsDataText}>
        Profesor: {name}
      </Text>
      <Text style={CourseDetailsStyles.courseDetailsDataText}>
        Correo: {email}
      </Text>
    </View>
  );
};

export default CourseDetailsProp;
