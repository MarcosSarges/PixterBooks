import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/HomeScreen';
import colors from '@assets/colors';
import {SafeAreaView} from 'react-native';
const Stack = createStackNavigator();
export default function HomeRouter() {
  return (
    <SafeAreaView style={{backgroundColor: colors.primary, flex: 1}}>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {backgroundColor: colors.primary},
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
}
