import React from 'react';
import { Link } from 'react-router-dom';
import WineIndexItem from './wine_index_item';


class WinesIndex extends React.Component {
  constructor(props){
      super(props);
    }

  componentDidMount(){
    this.props.fetchAllWines();
  }

  render(){

    var wines = this.props.wines.map((wine, idx) => <WineIndexItem wine={wine} key={idx}/>);
    if (this.props.wines.length > 0){
      return (
      <div id='wines-index-container'>
        <div id='wines-index-key'>
          <p>score</p>
          <p>winery</p>
          <p>wine</p>
          <p>vintage</p>
          <p>color</p>
          <p>region</p>
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
