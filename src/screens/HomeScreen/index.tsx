import React from 'react';
import {View, FlatList, RefreshControl, StyleSheet} from 'react-native';
import BookImage from '@components/BookImage';
import {BOOK} from '@ts/types';
//@ts-ignore
import BookNotFound from '@assets/img/missingbook.png';
import colors from '@assets/styles/colors';
import metrics from '@assets/styles/metrics';
import ButtonNative from '@components/ButtonNative/index.android';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {
  asyncGetBookAction,
  asyncGetBookActionNextPage,
  asyncGetBooksRefresh,
} from '@store/actions';

import {bindActionCreators} from 'redux';
type HomeScreenProps = {
  refresh: boolean;
  books: BOOK[];
  asyncGetBooks(): void;
  asyncGetBookNextPage(): void;
  asyncGetBooksRefresh(): void;
};

function HomeScreen({
  refresh,
  books,
  asyncGetBooks,
  asyncGetBookNextPage,
  asyncGetBooksRefresh,
}: HomeScreenProps) {
  const {navigate} = useNavigation();
  const [init, setInit] = React.useState(true);
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
  const handleRefresh = React.useCallback(() => {
    asyncGetBooksRefresh();
  }, [asyncGetBooksRefresh]);

  const getNextPage = React.useCallback(() => {
    asyncGetBookNextPage();
  }, [asyncGetBookNextPage]);

  React.useEffect(() => {
    if (init) {
      asyncGetBooks();
      setInit(false);
    }
  }, [asyncGetBooks, init]);

  return (
    <View style={styles.rootView}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: metrics.margin}} />}
        contentContainerStyle={{marginHorizontal: metrics.margin}}
        refreshControl={
          <RefreshControl
            onRefresh={handleRefresh}
            colors={[colors.black]}
            refreshing={refresh}
          />
        }
        onEndReached={getNextPage}
        onEndReachedThreshold={1}
        numColumns={3}
        keyExtractor={(item) => item.id}
        data={books}
        renderItem={renderItem}
      />
    </View>
  );
}

const mapStateToProps = (state: any) => ({
  books: state.books.items,
  refresh: state.loaders.home_screen_refresh,
});
const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      asyncGetBooks: asyncGetBookAction,
      asyncGetBookNextPage: asyncGetBookActionNextPage,
      asyncGetBooksRefresh: asyncGetBooksRefresh,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  rootView: {flex: 1},
});
