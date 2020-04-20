import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IFPROPSBUTTONNATIVE} from './types';

export default (props: IFPROPSBUTTONNATIVE) => (
  <TouchableOpacity {...props.propsButtons}>{props.children}</TouchableOpacity>
);
