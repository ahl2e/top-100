import {merge} from 'lodash';
import {RECEIVE_ALL_WINES} from '../actions/wine_actions';

const WinesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_VOTERS:
      return action.voters;
    default:
      return oldState;
  }
};

export default VotersReducer;
