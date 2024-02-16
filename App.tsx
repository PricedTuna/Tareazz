import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import React from 'react';
import {AppViewStyles} from './theme/appTheme';
import Navigator from './src/navigator/Navigator';

const App = () => {
  return (
    <NavigationContainer>
      <View style={AppViewStyles.AppContainer}>
        <Navigator />
      </View>
    </NavigationContainer>
  );
};

export default App;
