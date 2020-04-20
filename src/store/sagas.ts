import {all, put, call, takeLatest} from 'redux-saga/effects';
import {getBooks} from '@lib/API';
import dicionario from '@assets/palavras';
import constants from './constants';
import PgGeneration from '@lib/PgGeneration';

function* asyncGetBook() {
  const result = yield call(getBooks, dicionario[PgGeneration()]);
  yield put({type: constants.GET_BOOK_ACTION, payload: result});
}

function* asyncGetBookNextPage() {
  const result = yield call(getBooks, dicionario[PgGeneration()]);
  yield put({type: constants.GET_BOOK_ACTION_NEXT_PAGE, payload: result});
}
function* asyncGetBookRefresh() {
  yield put({type: constants.TOGGLE_REFRESH_ACTION});
  const result = yield call(getBooks, dicionario[PgGeneration()]);
  yield put({type: constants.TOGGLE_REFRESH_ACTION});
  yield put({type: constants.ASYNC_GET_BOOK_ACTION, payload: result});
}

// function* asyncDebounceSearchBook(action: {payload: string}) {
//   yield put({type: constants.TOGGLE_REFRESH_ACTION});

//   const result = yield call(getBooks, action.payload);
// }

export default function* rootSaga() {
  yield all([
    takeLatest(constants.ASYNC_GET_BOOK_ACTION, asyncGetBook),
    takeLatest(constants.ASYNC_GET_BOOK_ACTION_NEXT_PAGE, asyncGetBookNextPage),
    takeLatest(constants.ASYNC_GET_BOOK_ACTION_REFRESH, asyncGetBookRefresh),
    // takeLatest(constants.ASYNC_SEARCH_BOOK_ACTION, asyncDebounceSearchBook),
  ]);
}
