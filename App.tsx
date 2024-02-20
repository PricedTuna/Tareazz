import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import React from 'react';
import {AppViewStyles} from './theme/appTheme';
import Navigator from './src/navigator/Navigator';
import {CoursesProvider} from './src/contexts/CoursesContext/CoursesContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <View style={AppViewStyles.AppContainer}>
          <Navigator />
        </View>
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <CoursesProvider>{children}</CoursesProvider>;
};

export default App;
