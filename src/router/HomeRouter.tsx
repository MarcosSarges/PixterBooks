import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';
import colors from '@assets/styles/colors';
import {SafeAreaView} from 'react-native';
import DetailsScreen from '@screens/DetailsScreen';
import SplashScreen from '@screens/SplashScreen';
const Stack = createStackNavigator();
export default function HomeRouter() {
  return (
    <SafeAreaView style={{backgroundColor: colors.primary, flex: 1}}>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {backgroundColor: colors.primary},
        }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
