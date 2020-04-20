import React from 'react';
import {View, TouchableNativeFeedback, Text, StyleSheet} from 'react-native';
import ButtonNative from '@components/ButtonNative/index.android';
import colors from '@assets/styles/colors';
import metrics from '@assets/styles/metrics';

// import { Container } from './styles';

export default function ButtonBuy(props: {onPress(): void}) {
  return (
    <ButtonNative
      propsView={{style: {marginRight: metrics.padding}}}
      propsButtons={{
        onPress: props.onPress,
      }}>
      <View style={styles.button}>
        <Text style={styles.text}>Buy</Text>
      </View>
    </ButtonNative>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    backgroundColor: colors.blue,
    height: 40,
    justifyContent: 'center',
    width: 120,
  },
  text: {
    color: colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
