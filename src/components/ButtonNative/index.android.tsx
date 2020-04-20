import React from 'react';
import {TouchableNativeFeedback, View} from 'react-native';
import {IFPROPSBUTTONNATIVE} from './types';

export default function ButtonNative(props: IFPROPSBUTTONNATIVE) {
  return (
    <TouchableNativeFeedback {...props.propsButtons}>
      <View {...props.propsView}>{props.children}</View>
    </TouchableNativeFeedback>
  );
}
