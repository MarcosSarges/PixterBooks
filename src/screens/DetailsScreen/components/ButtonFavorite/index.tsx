import React from 'react';
import {View, TouchableNativeFeedback, StyleSheet} from 'react-native';
import ButtonNative from '@components/ButtonNative/index.android';
import Heart from '@assets/svg/Heart';
import colors from '@assets/styles/colors';

export default function ButtonFavorite(props: {onPress(): void}) {
  return (
    <ButtonNative
      propsButtons={{
        onPress: props.onPress,
        background: TouchableNativeFeedback.SelectableBackgroundBorderless(),
      }}>
      <View style={styles.button}>
        <Heart size={20} />
      </View>
    </ButtonNative>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.red,
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});
