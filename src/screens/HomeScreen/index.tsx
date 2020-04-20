import React from 'react';
import {View, FlatList, RefreshControl, StyleSheet} from 'react-native';
import BookImage from '@components/BookImage';
import {getBooks} from '@services/API';
import {BOOK} from '@ts/types';
import dicionario from '@assets/palavras';
//@ts-ignore
import BookNotFound from '@assets/img/missingbook.png';
import colors from '@assets/styles/colors';
import metrics from '@assets/styles/metrics';
import ButtonNative from '@components/ButtonNative/index.android';
import {useNavigation} from '@react-navigation/native';
export default function HomeScreen() {
  const {navigate} = useNavigation();
  
  const [data, setData] = React.useState<BOOK[]>([]);
  const [pg, setPg] = React.useState(0);
  const [offset, setOffset] = React.useState(1);
  const [refresh, setRefresh] = React.useState(false);

  const handleRefresh = React.useCallback(() => {}, []);

  const renderItem = ({item}: {item: BOOK}) => {
    return (
      <ButtonNative
        propsButtons={{
          onPress: () => {
            navigate('Details');
          },
        }}>
        <BookImage
          uri={
            item.volumeInfo.imageLinks
              ? Object.values(item.volumeInfo.imageLinks)[0]
              : BookNotFound
          }
        />
      </ButtonNative>
    );
  };

  const getNextPage = React.useCallback(() => {
    getBooks(dicionario[pg + 1]).then((res) => {
      setData(data.concat(res.items));
      setPg(pg + 1);
    });
  }, [pg, data]);

  React.useEffect(() => {
    const pgRandom = Math.floor(Math.random() * 100);
    getBooks(dicionario[pgRandom]).then((res) => {
      setData(res.items);
    });
  }, []);

  return (
    <View style={styles.rootView}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height: metrics.margin}} />}
        contentContainerStyle={{marginHorizontal: metrics.margin}}
        refreshControl={
          <RefreshControl
            onRefresh={handleRefresh}
            colors={[colors.white]}
            refreshing={refresh}
          />
        }
        onEndReached={getNextPage}
        onEndReachedThreshold={1}
        numColumns={3}
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  rootView: {flex: 1},
});
