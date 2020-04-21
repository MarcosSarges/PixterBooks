import {combineReducers} from 'redux';
import constants from './constants';
import {BOOKS} from '@ts/types';

type ActionType<T> = {
  type: constants;
  payload: T;
};

//---------------- BOOK`s ----------------
const INITIAL_STATE_BOOKS: BOOKS = {
  kind: '',
  totalItems: 0,
  items: [],
  book: null,
};

export const bookReducer = (
  state = INITIAL_STATE_BOOKS,
  action: ActionType<BOOKS>,
): any => {
  switch (action.type) {
    case constants.GET_BOOK_ACTION:
      return {
        ...action.payload,
      };
    case constants.GET_BOOK_ACTION_NEXT_PAGE:
      return {
        ...action.payload,
        items: state.items.concat(action.payload.items),
      };
    case constants.SELECT_BOOK:
      return {
        ...state,
        book: action.payload,
      };
    case constants.SEARCH_BOOK_ACTION:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

//---------------- LOAD ----------------
type TYPE_STATE_LOADERS = {
  home_screen_refresh: boolean;
};

const INITIAL_STATE_LOADERS = {
  home_screen_refresh: false,
};
export const loadersReducer = (
  state = INITIAL_STATE_LOADERS,
  action: ActionType<TYPE_STATE_LOADERS>,
) => {
  switch (action.type) {
    case constants.TOGGLE_REFRESH_ACTION:
      return {
        ...state,
        home_screen_refresh: !state.home_screen_refresh,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers<{
  books: BOOKS;
  loaders: TYPE_STATE_LOADERS;
}>({
  books: bookReducer,
  loaders: loadersReducer,
});
