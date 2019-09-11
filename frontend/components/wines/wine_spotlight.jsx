import React from 'react';

class WineSpotlight extends React.Component{
  constructor(props){
    super(props);
    this.state= props;
  }

// componenrWillUpdate(nextProps, nextState){
//   debugger
//   if (this.state !== prevState) {
//     this.setState({wine: props});
//   }
// }
  render(){
    return(
      <div id='wine-spotlight-container'>
        <div id='wine-spotlight-note'>
          <p>{this.props.wine.note}</p>
        </div>
      </div>
    )
  }
}

// const WineSpotlight = (props) => {
//   debugger
//   return(
//         <div id='wine-spotlight-container'>
//           <div>
//             <p>A wine goes here</p>
//             <p>{props.wine}</p>
//           </div>
//         </div>
//       )
// };

export default WineSpotlight;
