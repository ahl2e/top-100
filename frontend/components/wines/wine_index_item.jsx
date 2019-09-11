import React from 'react';
import { Link } from 'react-router-dom';

class WineIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.state = props.wine;
  }

  sendWineSpotlight(e){
    this.props.spotlightWine(this.props.wine);
  }

  render(){

    const wine = this.state;
    return(
      <div className='wine-index-item-border'>
        <div id='wine-index-item'
          onMouseOver={this.sendWineSpotlight.bind(this)}>
          <p id='score'>{wine.score}</p>
          <p id='winery'>{wine.winery_full}</p>
          <p id='wine-name'>{wine.wine_full}</p>
          <p id='vintage'>{wine.vintage}</p>
          <p id='color'>{wine.color}</p>
          <p id ='region'>{wine.region}</p>
        </div>
      </div>
    )
  }
}


export default WineIndexItem;
