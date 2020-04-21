import React from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TextInput,
  StyleSheet,
} from 'react-native';
import metrics from '@assets/styles/metrics';
import ButtonNative from '@components/ButtonNative/index.android';
import Search from '@assets/svg/Search';
import {useNavigation} from '@react-navigation/native';
import ArrowLeft from '@assets/svg/ArrowLeft';
import colors from '@assets/styles/colors';
import Close from '@assets/svg/Close';

// import { Container } from './styles';

export default function Header(props: {
  backButton?: boolean;
  searchButton?: boolean;
  onChangeText?(txt: string): void;
}) {
  const [search, setSearch] = React.useState(false);
  const {goBack} = useNavigation();
  return (
    <>
      <View style={styles.rootView}>
        <ButtonNative
          propsView={{
            style: styles.buttonSize,
          }}
          propsButtons={{
            onPress: () => goBack(),
            background: TouchableNativeFeedback.SelectableBackgroundBorderless(),
          }}>
          {props.backButton ? <ArrowLeft /> : false}
        </ButtonNative>

        <Text style={styles.title}>Pixter Books</Text>
        <ButtonNative
          propsView={{
            style: styles.buttonSize,
          }}
          propsButtons={{
            onPress: () => {
              setSearch(!search);
            },
            background: TouchableNativeFeedback.SelectableBackgroundBorderless(),
          }}>
          {props.searchButton ? search ? <Close /> : <Search /> : false}
        </ButtonNative>
      </View>
      {search && (
        <View style={styles.viewInputText}>
          <TextInput
            placeholder="Digite o nome do livro"
            style={styles.inputText}
            onChangeText={(txt) => {
              if (props.onChangeText) {
                props.onChangeText(txt);
              }
            }}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  rootView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: metrics.padding,
    backgroundColor: colors.primary,
  },
  title: {
    textAlign: 'center',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 2,
    paddingBottom: 8,
    fontSize: 26,
  },
  viewInputText: {
    margin: metrics.margin,
    padding: 8,
    marginTop: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.4)',
  },
  inputText: {
    fontSize: 16,
    textAlign: 'center',
  },
  buttonSize: {
    height: 40,
    width: 40,
  },
});
