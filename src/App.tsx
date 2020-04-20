import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import HomeRouter from '@router/HomeRouter';
import {StatusBar} from 'react-native';
import colors from '@assets/styles/colors';

const App = () => (
  <>
    <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
    <NavigationContainer>
      <HomeRouter />
    </NavigationContainer>
  </>
);

export default App;
