import React from 'react';
import {View, ScrollView} from 'react-native';
import metrics from '@assets/styles/metrics';
import BookImage from '@components/BookImage';
import {BOOK} from '@ts/types';
//@ts-ignore
import BookNotFound from '@assets/img/missingbook.png';
import colors from '@assets/styles/colors';

export default function DetailsScreen() {
  const [book, setBook] = React.useState<BOOK>({});
  return (
    <ScrollView>
      <View style={{padding: metrics.padding, backgroundColor: colors.primary}}>
        <BookImage
          uri={
            book.volumeInfo.imageLinks
              ? Object.values(book.volumeInfo.imageLinks)[0]
              : BookNotFound
          }
        />
      </View>
    </ScrollView>
  );
}
