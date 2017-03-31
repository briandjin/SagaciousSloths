import React from 'react';
import {Radio} from 'semantic-ui-react';

class DeckOptionsEntry extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
      <tr>
        <td className="toggleButton">
          <Radio toggle/>
        </td>
        <td onClick={console.log(`${this.props.data}'s index is: ${this.props.index}`)}>
          {this.props.data}
        </td>
      </tr>
    )
  }
}

export default DeckOptionsEntry