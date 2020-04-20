import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IFPROPSBUTTONNATIVE} from './types';
import {stylesButton} from './index.android';

export default (props: IFPROPSBUTTONNATIVE) => (
  <TouchableOpacity
    {...props.propsButtons}
    style={[stylesButton.shadow, props.propsView?.style]}>
    >{props.children}
  </TouchableOpacity>
);
