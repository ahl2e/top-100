import React from 'react';
import { Link } from 'react-router-dom';

const WineIndexItem = (props) => {
  const wine = props.wine;
  return(
    <div className='wine-index-item-border'>
      <div id='wine-index-item'>
        <p>{wine.score}</p>
        <p>{wine.winery_full}</p>
        <p>{wine.wine_full}</p>
        <p>{wine.vintage}</p>
        <p>{wine.color}</p>
        <p>{wine.region}</p>
      </div>
    </div>
  )
}

export default WineIndexItem;
