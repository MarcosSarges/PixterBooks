import constants from './constants';
import {BOOK} from '@ts/types';

export function asyncGetBookAction() {
  return {
    type: constants.ASYNC_GET_BOOK_ACTION,
  };
}

export function asyncGetBookActionNextPage() {
  return {
    type: constants.ASYNC_GET_BOOK_ACTION_NEXT_PAGE,
  };
}

export function asyncGetBooksRefresh() {
  return {
    type: constants.ASYNC_GET_BOOK_ACTION_REFRESH,
  };
}

export function selectBook(book: BOOK) {
  return {
    type: constants.SELECT_BOOK,
    payload: book,
  };
}

// export function asyncSearchBook(query: string) {
//   return {
//     type: constants.ASYNC_SEARCH_BOOK_ACTION,
//     payload: query,
//   };
// }

export function toggleRefresh() {
  return {
    type: constants.TOGGLE_REFRESH_ACTION,
  };
}
