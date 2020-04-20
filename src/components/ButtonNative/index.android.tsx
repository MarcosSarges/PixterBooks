import React from 'react';
import {TouchableNativeFeedback, View, StyleSheet} from 'react-native';
import {IFPROPSBUTTONNATIVE} from './types';

export default function ButtonNative(props: IFPROPSBUTTONNATIVE) {
  return (
    <TouchableNativeFeedback {...props.propsButtons}>
      <View
        {...props.propsView}
        style={[stylesButton.shadow, props.propsView?.style]}>
        {props.children}
      </View>
    </TouchableNativeFeedback>
  );
}

export const stylesButton = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
