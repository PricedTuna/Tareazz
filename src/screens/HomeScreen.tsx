import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import CourseCard from '../components/CourseCard';
import {Course} from '../../models/CourseModel';
import {HomeScreenStyles} from '../../theme/appTheme';
import TasksTable from '../components/TasksTable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';
import {CoursesContext} from '../contexts/CoursesContext/CoursesContext';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;

const HomeScreen = () => {
  const {courses, loadCourses} = useContext(CoursesContext);

  useEffect(() => {
    loadCourses();
  }, []);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View>
      <View
        style={{
          ...HomeScreenStyles.HomeScreenTitleContanier,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{flex: 1}}>
          <Text style={{...HomeScreenStyles.HomeScreenTitle}}>
            Lista de cursos
          </Text>
        </View>
        <View style={{marginRight: 15}}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('CourseCreate', () => {})}>
            <Icon name="add-outline" size={35} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
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

      <View>
        <View
          style={{
            ...HomeScreenStyles.HomeScreenTitleContanier,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1}}>
            <Text style={{...HomeScreenStyles.HomeScreenTitle}}>
              Lista de tareas
            </Text>
          </View>
          <View style={{marginRight: 15}}>
            <TouchableOpacity activeOpacity={0.5}>
              <Icon name="add-outline" size={35} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TasksTable />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
