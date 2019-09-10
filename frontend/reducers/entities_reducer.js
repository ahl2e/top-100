import {combineReducers} from 'redux';
import WinesReducer from './wines_reducer';
import WineNotesReducer from './wine_note_reducer';

export default combineReducers({
  wines: WinesReducer,
  note: WineNotesReducer
});
