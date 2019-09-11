import React from 'react';
import { Link } from 'react-router-dom';
import WineIndexItemContainer from './wine_index_item_container';


class WinesIndex extends React.Component {
  constructor(props){
      super(props);
    }

  componentDidMount(){
    this.props.fetchAllWines();
  }

  render(){

    var wines = this.props.wines.map((wine, idx) => <WineIndexItemContainer wine={wine} key={idx}/>);
    if (this.props.wines.length > 0){
      return (
      <div id='wines-index-container'>
        <div id='wines-index-key'>
          <p id='score'>Score</p>
          <p id='winery'>Winery</p>
          <p id='wine-name'>Wine</p>
          <p id='vintage'>Vintage</p>
          <p id='color'>Color</p>
          <p id='region'>Region</p>
        </div>

        <div id='wines-index-list'>
          <ul>
            {wines}
          </ul>
        </div>
      </div>
  )
    }else{
      return (
        <div>
        <p>No wine here</p>
        </div>
      );
    }
  }
}

export default WinesIndex;
