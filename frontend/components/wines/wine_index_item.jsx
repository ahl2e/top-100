import React from 'react';
import { Link } from 'react-router-dom';

const WineIndexItem = (props) => {
  const wine = props.wine;
  return(
    <div className='wine-index-item'>
      <div id='wine-index-item-name'>
        <p>{`${wine.wine_full}`}</p>
      </div>
    </div>
  )
}

export default WineIndexItem;
