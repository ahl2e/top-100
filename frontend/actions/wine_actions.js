import * as WineApiUtil from '../util/wines/wine_api_util';

export const RECEIVE_ALL_WINES = 'RECEIVE_ALL_WINES';
export const RECEIVE_WINE_NOTE = 'RECEIVE_WINE_NOTE';
export const REMOVE_WINE_NOTE = 'REMOVE_WINE_NOTE';

export const fetchAllWines = () => dispatch => {
  return WineApiUtil.fetchAllWines().then(wines => dispatch(receiveAllWines(wines)));
};

export const fetchWineNote = (id) => dispatch => {
  return WineApiUtil.fetchWineNote(id).then(note => dispatch(receiveWineNote(note)));
};

export const spotlightWine = (wine) => dispatch =>dispatch(receiveWineNote(wine));



export const receiveAllWines = (wines) => {
  return{
    type: RECEIVE_ALL_WINES,
    wines:wines
  };
};

export const receiveWineNote = (wine) => {
  return{
    type: RECEIVE_WINE_NOTE,
    wine
  };
};

export const removeWineNote = (note) => {
  return{
    type: REMOVE_WINE_NOTE,
    note
  };
};
