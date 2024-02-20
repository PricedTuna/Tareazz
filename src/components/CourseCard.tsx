import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {CourseCardStyles, GlobalStyles} from '../../theme/appTheme';
import {Course} from '../../models/CourseModel';
import {getStyleText} from '../helpers/getStyledText';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';
import getImageUri from '../helpers/getImageUri';

interface Props {
  course: Course;
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParams, 'Home'>;

const CourseCard = ({course}: Props) => {
  const imageUri = getImageUri(course.image);

  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View
      style={{
        ...CourseCardStyles.courseCardContainer,
        ...GlobalStyles.globalMargin,
        ...CourseCardStyles.courseCardShadow,
      }}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={() => navigation.navigate('CourseDetails', course)}
        activeOpacity={0.5}>
        <View style={CourseCardStyles.courseCardImageContainer}>
          <Image
            style={CourseCardStyles.courseCardImageContainer}
            source={{uri: imageUri}}
          />
        </View>
        <View style={CourseCardStyles.courseCardTextContainer}>
          <Text
            style={{
              ...CourseCardStyles.courseCardText,
              ...CourseCardStyles.courseCardTextShadow,
            }}>
            {getStyleText(course.name, 13)}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CourseCard;
