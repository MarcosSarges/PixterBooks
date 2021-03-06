/* eslint-disable no-shadow */
import React from 'react';
import {View, FlatList, RefreshControl, StyleSheet} from 'react-native';
import BookImage from '@components/BookImage';
import {BOOK} from '@ts/types';
import colors from '@assets/styles/colors';
import metrics from '@assets/styles/metrics';
import ButtonNative from '@components/ButtonNative/index.android';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
//@ts-ignore
import debounce from 'lodash.debounce';
import {
  asyncGetBookAction,
  asyncGetBookActionNextPage,
  asyncGetBooksRefresh,
  selectBook,
  asyncSearchBook,
} from '@store/actions';
import {bindActionCreators} from 'redux';
import HelperGetBookImg from '@lib/HelperGetBookImg';
import Header from '@components/Header';

type HomeScreenProps = {
  refresh: boolean;
  books: BOOK[];
  asyncGetBooks(): void;
  asyncGetBookNextPage(): void;
  asyncGetBooksRefresh(): void;
  selectBook(book: BOOK): void;
  searchBook(query: string): void;
};

function HomeScreen({
  refresh,
  books,
  asyncGetBooks,
  asyncGetBookNextPage,
  asyncGetBooksRefresh,
  selectBook,
  searchBook,
}: HomeScreenProps) {
  const {navigate} = useNavigation();
  const [init, setInit] = React.useState(true);
  const renderItem = ({item}: {item: BOOK}) => {
    return (
      <ButtonNative
        propsButtons={{
          onPress: () => {
            selectBook(item);
            navigate('Details');
          },
        }}>
        <BookImage uri={HelperGetBookImg(item.volumeInfo)} />
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

  const handlerSearch = React.useCallback(
    debounce((t: string) => searchBook(t), 1000),
    [],
  );
  const onChangeText = (t: string) => (t ? handlerSearch(t) : asyncGetBooks());

  return (
    <View style={styles.rootView}>
      <Header searchButton onChangeText={onChangeText} />
      <FlatList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{height: metrics.margin}} />}
        contentContainerStyle={{marginHorizontal: metrics.margin}}
        style={styles.padding}
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
      selectBook: selectBook,
      searchBook: asyncSearchBook,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  rootView: {flex: 1},
  padding: {paddingBottom: 20},
});
