import merge from 'lodash/merge';
import {RECEIVE_WINE_NOTE, REMOVE_WINE_NOTE} from '../actions/wine_actions';

const noteReducer = (oldState = {}, action) => {
  switch (action.type) {
    case RECEIVE_WINE_NOTE:
      return merge({}, oldState, {[action.note.id]: action.note});
    case REMOVE_WINE_NOTE:
    const newState = merge({}, state);
    delete newState[action.note.id];
    return newState;
    default:
      return oldState;
  }
};

export default noteReducer;
