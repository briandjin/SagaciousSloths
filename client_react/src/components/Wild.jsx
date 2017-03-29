import React from 'react';
import ReactDOM from 'react-dom';
import GridTileList from './GridTileList.jsx';


class Wild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ifWild: true,
    }
  }
  
  render() {
    return (

        <div>
          <GridTileList/>
        </div>

    )
  }
}

export default Wild;