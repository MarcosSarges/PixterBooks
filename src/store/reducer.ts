import {combineReducers} from 'redux';
import constants, {ConstantsType} from './constants';
import {BOOKS} from '@ts/types';

type ActionType<T> = {
  type: ConstantsType;
  payload: T;
};
//---------------- BOOK ----------------
const INITIAL_STATE_BOOKS: BOOKS = {
  kind: '',
  totalItems: 0,
  items: [],
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
    default:
      return state;
  }
};
//--------------------------------------

//######################################
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
