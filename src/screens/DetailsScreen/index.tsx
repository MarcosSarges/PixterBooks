import React from 'react';
import {View, ScrollView, Text, StyleSheet, Linking} from 'react-native';
import metrics from '@assets/styles/metrics';
import BookImage from '@components/BookImage';
import {BOOKS} from '@ts/types';
//@ts-ignore
import colors from '@assets/styles/colors';
import ButtonBuy from './components/ButtonBuy';
import ButtonFavorite from './components/ButtonFavorite';
import {useSelector} from 'react-redux';
import HelperGetBookImg from '@lib/HelperGetBookImg';
import Header from '@components/Header';

export default function DetailsScreen() {
  const book = useSelector((state: {books: BOOKS}) => state.books.book);
  if (!book!.volumeInfo) {
    return false;
  }
  const {volumeInfo, saleInfo} = book!;

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={styles.root}>
      <Header backButton />
      <View style={styles.header}>
        <View style={styles.containerImg}>
          <BookImage uri={HelperGetBookImg(volumeInfo)} />
          <Text style={[styles.subTitle, {paddingVertical: metrics.padding}]}>
            {volumeInfo.pageCount || 0} pages
          </Text>
        </View>
        <View style={{width: metrics.screenWidth / 2}}>
          <Text style={styles.title}>{volumeInfo.title}</Text>
          {volumeInfo.authors ? (
            <Text style={styles.subTitle}>
              by {volumeInfo.authors.join(', ')}
            </Text>
          ) : (
            false
          )}
          <View style={{marginVertical: metrics.margin}}>
            <Text style={styles.price}>
              R$
              {saleInfo.saleability === 'FOR_SALE'
                ? saleInfo.listPrice.amount
                : '--.--'}
            </Text>
          </View>
          <View style={styles.containerButtons}>
            {saleInfo.saleability === 'FOR_SALE' ? (
              <ButtonBuy
                onPress={() => {
                  Linking.openURL(saleInfo.buyLink)
                    .then(() => {})
                    .catch((err) => console.error('An error occurred', err));
                }}
              />
            ) : (
              false
            )}
            <ButtonFavorite onPress={() => {}} />
          </View>
        </View>
      </View>
      <View>
        <Text
          selectable
          selectionColor="rgba(255, 221, 13,0.6)"
          style={styles.text}>
          {volumeInfo.description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    padding: metrics.padding,
    backgroundColor: colors.primary,
    flexDirection: 'row',
  },
  containerImg: {
    alignItems: 'center',
    marginRight: metrics.margin,
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
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
