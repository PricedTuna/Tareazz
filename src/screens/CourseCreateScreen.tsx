import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useContext} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../navigator/Navigator';
import {CourseDetailsStyles, GlobalStyles} from '../../theme/appTheme';
import CustomButton from '../components/CustomButton';
import useForm from '../hooks/useForm';
import {CourseInitialState} from '../../models/CourseModel';
import CourseTextInput from '../components/CreateCourse/CourseTextInput';
import {ScrollView} from 'react-native-gesture-handler';
import {CoursesContext} from '../contexts/CoursesContext/CoursesContext';

interface NavigationProps
  extends StackScreenProps<RootStackParams, 'CourseCreate'> {}

const CourseCreateScreen = ({route}: NavigationProps) => {
  const {image, name, onChange, teacher_name, teacher_email, form} = useForm({
    ...CourseInitialState,
  });

  const {addCourse} = useContext(CoursesContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View>
          <Text
            style={{
              ...CourseDetailsStyles.courseDetailsName,
              ...GlobalStyles.globalMargin,
            }}>
            Crear nuevo curso
          </Text>
          <View style={styles.textInputContainer}>
            <CourseTextInput
              title="Nombre del curso"
              defaultValue={name}
              handleChange={onChange}
              field="name"
            />
          </View>
          <View style={styles.textInputContainer}>
            <CourseTextInput
              title="Nombre del profesor"
              defaultValue={teacher_name}
              handleChange={onChange}
              field="teacher_name"
            />
          </View>
          <View style={styles.textInputContainer}>
            <CourseTextInput
              title="Correo del profesor"
              defaultValue={teacher_email}
              handleChange={onChange}
              field="teacher_email"
            />
          </View>
          <View style={styles.textInputContainer}>
            <CourseTextInput
              title="Imagen del curso (URL)"
              defaultValue={image}
              handleChange={onChange}
              field="image"
            />
          </View>

          <View style={{...GlobalStyles.globalMargin, marginTop: 10}}>
            <CustomButton
              text="Guardar"
              action={() => {
                addCourse({...form});
              }}
              color="green"
            />
          </View>

          <View>
            <Text>{JSON.stringify(form, null, 3)}</Text>
          </View>

          <View style={{height: 100}} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    marginVertical: 15,
    marginHorizontal: 10,
  },
});

export default CourseCreateScreen;
