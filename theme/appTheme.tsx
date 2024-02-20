import {StyleSheet} from 'react-native';

export const GlobalStyles = StyleSheet.create({
  globalText: {
    color: 'white',
    fontSize: 25,
  },
  globalMargin: {
    margin: 20,
  },
  globalTextShadow: {
    fontSize: 35,
    color: '#FFFFFF',
    paddingLeft: 30,
    paddingRight: 30,
    textShadowColor: '#000000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
  },
});

export const AppViewStyles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: '#202020',
  },
});

export const HomeScreenStyles = StyleSheet.create({
  HomeScreenTitleContanier: {
    marginTop: 20,
    marginLeft: 20,
  },
  HomeScreenTitle: {
    fontSize: 35,
    color: '#FFFFFF',
  },
});

export const CourseCardStyles = StyleSheet.create({
  courseCardContainer: {
    width: 200,
    height: 160,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderWidth: 3,
    borderColor: '#393939',
    backgroundColor: '#252525',
    borderRadius: 20,
  },
  courseCardShadow: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.21,
    shadowRadius: 7.68,
    elevation: 7,
  },
  courseCardTextContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  courseCardText: {
    color: 'white',
    opacity: 0.9,
    fontSize: 25,
  },
  courseCardTextShadow: {
    color: '#FFFFFF',
    paddingLeft: 30,
    paddingRight: 30,
    textShadowColor: '#000000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
  },
  courseCardImageContainer: {
    position: 'absolute',
    height: 100,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    opacity: 0.8,
  },
  courseCardImage: {flex: 1},
});

export const CourseDetailsStyles = StyleSheet.create({
  courseDetailsName: {
    fontSize: 46,
    fontWeight: 'bold',
    color: 'white',
  },
  courseDetailsDataContainer: {
    padding: 30,
    backgroundColor: '#404040',
    borderRadius: 10,
  },
  courseDetailsDataText: {
    color: 'white',
    fontSize: 23,
    marginVertical: 5,
  },
});

export const TasksTableStyle = StyleSheet.create({
  taskTableTextRow: {
    fontSize: 18,
    color: 'white',
  },
});

export const TaskDetailStyle = StyleSheet.create({
  taskDetailProp: {
    ...GlobalStyles.globalText,
    marginVertical: 10,
  },
  taskDetailButton: {
    height: 70,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,

    color: '#FFFFFF',
    paddingLeft: 30,
    paddingRight: 30,
    textShadowColor: '#000000',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 3,
  },
});

export const CourseCreateStyle = StyleSheet.create({
  CourseCreateTextInput: {
    height: 50,
    borderWidth: 3,
    borderColor: 'gray',
    marginTop: 5,
    color: 'white',
    backgroundColor: '#404040',
    fontSize: 20,
    padding: 10,
  },
});
