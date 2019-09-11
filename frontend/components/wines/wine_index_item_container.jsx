import {connect} from 'react-redux';
import WineIndexItem from './wine_index_item';
import {spotlightWine} from '../../actions/wine_actions';
import {withRouter} from 'react-router';


const mapDispatchToProps = dispatch => {
  return{
    spotlightWine: wine => dispatch(spotlightWine(wine))
  };
};

export default connect(null,mapDispatchToProps)(WineIndexItem);
