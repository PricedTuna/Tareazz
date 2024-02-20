import {View, Text} from 'react-native';
import React from 'react';
import {CourseDetailsStyles} from '../../theme/appTheme';
import {Teacher} from '../../models/TeacherModel';

interface Props {
  teacher: Teacher;
}

const CourseDetailsProp = ({teacher}: Props) => {
  return (
    <View style={CourseDetailsStyles.courseDetailsDataContainer}>
      <Text style={CourseDetailsStyles.courseDetailsDataText}>
        Profesor: {teacher.name}
      </Text>
      <Text style={CourseDetailsStyles.courseDetailsDataText}>
        Correo: {teacher.mail}
      </Text>
    </View>
  );
};

export default CourseDetailsProp;
