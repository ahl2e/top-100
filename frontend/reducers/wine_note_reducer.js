import merge from 'lodash/merge';
import {RECEIVE_WINE_NOTE, REMOVE_WINE_NOTE} from '../actions/wine_actions';

const noteReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_WINE_NOTE:
      return action.wine;
    case REMOVE_WINE_NOTE:
    return{}
    default:
      return oldState;
  }
};

export default noteReducer;
