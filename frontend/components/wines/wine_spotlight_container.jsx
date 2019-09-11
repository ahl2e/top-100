import {connect} from 'react-redux';

import WineSpotlight from './wine_spotlight';



const mapStateToProps = (state) => {
  return {
    wine: state.entities.note,
  };
};


const WineSpotlightContainer = connect(mapStateToProps, null)(WineSpotlight);
export default WineSpotlightContainer;
