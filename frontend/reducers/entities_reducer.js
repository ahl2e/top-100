import {combineReducers} from 'redux';
import WinesReducer from './wines_reducer';
import WineNoteREducer from './wine_note_reducer';

export default combineReducers({
  wines: WinesReducer,
  note: NotesReducer
});
