import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import HomeRouter from '@router/HomeRouter';
import {StatusBar} from 'react-native';
import colors from '@assets/styles/colors';
import {Provider} from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
    <NavigationContainer>
      <HomeRouter />
    </NavigationContainer>
  </Provider>
);

export default App;
