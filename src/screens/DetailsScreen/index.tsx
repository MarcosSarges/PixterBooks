import React from 'react';
import {View, ScrollView, Text, StyleSheet} from 'react-native';
import metrics from '@assets/styles/metrics';
import BookImage from '@components/BookImage';
import {BOOK} from '@ts/types';
//@ts-ignore
import BookNotFound from '@assets/img/missingbook.png';
import colors from '@assets/styles/colors';
import ButtonBuy from './components/ButtonBuy';
import ButtonFavorite from './components/ButtonFavorite';

export default function DetailsScreen() {
  return (
    <ScrollView>
      <View
        style={{
          padding: metrics.padding,
          backgroundColor: colors.primary,
          flexDirection: 'row',
        }}>
        <View style={{alignItems: 'center', marginRight: metrics.margin}}>
          <BookImage uri={BookNotFound} />
          <Text style={[styles.subTitle, {paddingVertical: metrics.padding}]}>
            216 paginas
          </Text>
        </View>
        <View style={{width: metrics.screenWidth / 2}}>
          <Text style={styles.title}>
            teste teste teste testetesteasasasa\ntesteteste testeteste teste
            teste testeteste testeteste teste teste testeteste teste
          </Text>
          <Text style={styles.subTitle}>by Marcos</Text>
          <View style={{marginVertical: metrics.margin}}>
            <Text style={styles.price}>$9191.999</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
            <ButtonBuy />
            <ButtonFavorite />
          </View>
        </View>
      </View>

      <View style={{backgroundColor: colors.white}}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce turpis
          massa, faucibus nec efficitur sit amet, suscipit sit amet quam. Sed
          efficitur ut tortor sed faucibus. Nulla purus elit, commodo eu mauris
          et, rutrum ultrices purus. Suspendisse eget maximus purus. Sed
          pellentesque tellus sem. Nulla facilisi. Proin sodales ultrices justo,
          et vestibulum elit cursus ut. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Praesent
          condimentum in leo sit amet malesuada. Phasellus consequat nisi
          placerat porta elementum. Phasellus semper ex ut gravida imperdiet.
          Fusce ut orci elit. Curabitur vitae condimentum nisl, et tincidunt ex.
          Vivamus gravida nulla ante, interdum posuere nibh ultricies eget. Nunc
          ut egestas elit, ac vulputate nulla. Sed et turpis a mauris bibendum
          dapibus id commodo libero. Quisque varius arcu in sem tempus
          sollicitudin. Pellentesque dictum quam tincidunt metus congue, eget
          porttitor felis tristique. Ut fringilla felis ac libero sagittis
          imperdiet. Ut efficitur metus eget ornare ornare. Etiam et aliquet
          diam. Vivamus in pulvinar nunc. Nulla facilisi. Nulla facilisi. Aenean
          eget tortor vitae tellus tempus pellentesque eget eget purus. Donec
          consequat sollicitudin placerat. Donec libero mi, scelerisque ac nisl
          accumsan, commodo ultricies velit. Maecenas luctus ac nisl nec
          ultrices. Nulla velit diam, tincidunt eget ligula sed, maximus
          venenatis nisi. Vivamus dictum dignissim mauris a sollicitudin. Ut
          ullamcorper pharetra tortor, at posuere nisi rhoncus et. Aenean at
          vestibulum justo.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    color: colors.black,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
  subTitle: {
    fontSize: 14,
    color: colors.black,
    opacity: 0.5,
  },
  price: {
    fontSize: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: colors.black,
    opacity: 0.87,
    padding: metrics.padding,
    letterSpacing: 0.1,
    lineHeight: 24,
  },
});
