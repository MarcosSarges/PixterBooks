import {
  TouchableNativeFeedbackProps,
  ViewProps,
  TouchableOpacityProps,
} from 'react-native';

export type IFPROPSBUTTONNATIVE = {
  children: React.ReactNode;
  propsButtons?: TouchableNativeFeedbackProps & TouchableOpacityProps;
  propsView?: ViewProps;
};
