import {View, Text, FlatList} from 'react-native';
import React, {useCallback} from 'react';
import CourseCard from '../components/CourseCard';
import useCourses from '../hooks/useCourses';
import {Course} from '../../models/SubjectModel';
import {GlobalStyles, HomeScreenStyles} from '../../theme/appTheme';

const HomeScreen = () => {
  const {courses} = useCourses();

  return (
    <View>
      <View>
        <Text
          style={{
            ...HomeScreenStyles.HomeScreenCoursesListTitle,
            ...HomeScreenStyles.HomeScreenCoursesListTitleContanier,
          }}>
          Lista de cursos
        </Text>
      </View>
      <FlatList
        data={courses}
        renderItem={(course: {item: Course}) => (
          <CourseCard course={course.item} />
        )}
        keyExtractor={(item: Course) => item.id_course.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
