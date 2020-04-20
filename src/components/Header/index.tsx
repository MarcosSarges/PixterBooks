import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TextInput,
  StyleSheet,
} from 'react-native';
import metrics from '@assets/styles/metrics';
import {HeaderBackButton} from '@react-navigation/stack';
import ButtonNative from '@components/ButtonNative/index.android';
import Search from '@assets/svg/Search';

// import { Container } from './styles';

export default function Header(props: {
  backButton?: boolean;
  searchButton?: boolean;
  onChangeText?(txt: string): void;
}) {
  const [search, setSearch] = React.useState(false);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: metrics.padding,
        }}>
        <View style={{height: 40, width: 40}}>
          {props.backButton ? <HeaderBackButton /> : false}
        </View>

        <Text
          style={{
            textAlign: 'center',
            borderBottomColor: 'rgba(0,0,0,0.1)',
            borderBottomWidth: 2,
            paddingBottom: 8,
            fontSize: 26,
          }}>
          Pixter Books
        </Text>
        <ButtonNative
          propsView={{
            style: {
              height: 40,
              width: 40,
            },
          }}
          propsButtons={{
            onPress: () => {
              setSearch(!search);
            },
            background: TouchableNativeFeedback.SelectableBackgroundBorderless(),
          }}>
          {props.searchButton ? <Search /> : false}
        </ButtonNative>
      </View>
      {search ? (
        <TextInput
          placeholder="Digite o nome do livro"
          style={{
            margin: metrics.margin,
            marginTop: 0,
            textAlign: 'center',
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: 'rgba(0,0,0,0.4)',
          }}
          onChangeText={(txt) => {
            if (props.onChangeText) {
              props.onChangeText(txt);
            }
          }}
        />
      ) : (
        false
      )}
    </>
  );
}
