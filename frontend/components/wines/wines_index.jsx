import React from 'react';
import { Link } from 'react-router-dom';
import WineIndexItem from './wine_index_item';


class VoterIndex extends React.Component {
  constructor(props){
      super(props);
    }

  componentDidMount(){
    debugger
    this.props.fetchAllWines();
  }

  render(){

    var wines = this.props.wines.map((wine, idx) => <WineIndexItem wine={wine} key={idx}/>);
    if (this.props.wines.length > 0){
      return (
    <div>
      <ul>
        {wines}
      </ul>
    </div>
  )
    }else{
      return null;
    }
  }
}

export default WineIndex;
