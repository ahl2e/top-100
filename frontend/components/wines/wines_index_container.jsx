import {connect} from 'react-redux';
import {fetchAllWines} from '../../actions/wine_actions';
import WinesIndex from './wines_index';

const mapStateToProps = (state) => {
  return({
      wines: Object.values(state.entities.wines),
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchAllWines: () => dispatch(fetchAllWines()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(WinesIndex);
