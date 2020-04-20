import React from 'react';
import {View, Image, StyleSheet, ImageSourcePropType} from 'react-native';
import metrics from '@assets/styles/metrics';

interface IFPROPS {
  uri: ImageSourcePropType;
}
export default function BookImage(props: IFPROPS) {
  return (
    <View style={styles.CardView}>
      <Image
        style={styles.Image}
        resizeMode="cover"
        source={typeof props.uri === 'string' ? {uri: props.uri} : props.uri}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  CardView: {
    height: metrics.screenHeight / 5,
    width: (metrics.screenWidth - 32) / 3,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  Image: {height: '100%', width: '100%'},
});
