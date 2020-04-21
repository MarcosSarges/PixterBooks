/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import HelperInitBackgroundService from './HelperInitBackgroundService';
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const loadingValue = new Animated.Value(0);
  const {navigate} = useNavigation();
  React.useEffect(() => {
    HelperInitBackgroundService();

    Animated.loop(
      Animated.sequence([
        Animated.timing(loadingValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(loadingValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
    ).start();

    setTimeout(() => {
      navigate('Home');
    }, 2000);
  }, [loadingValue, navigate]);

  return (
    <View>
      <Animated.View
        style={{
          transform: [
            {
              scale: loadingValue.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.2],
              }),
            },
          ],
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}>
        <Text
          style={{
            textAlign: 'center',
            borderBottomColor: 'rgba(0,0,0,0.1)',
            borderBottomWidth: 2,
            paddingBottom: 8,
            fontSize: 26,
          }}>
          Pixter Book
        </Text>
      </Animated.View>
    </View>
  );
}
