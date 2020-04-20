import constants from './constants';

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

export function toggleRefresh() {
  return {
    type: constants.TOGGLE_REFRESH_ACTION,
  };
}
