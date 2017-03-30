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
        <div>{this.props.cards[0].firstname + " " + this.props.cards[0].lastname}</div>
          <div>
            <GridTileList cards={this.props.cards}/>
          </div>
      </div>

    )
  }
}

export default Wild;