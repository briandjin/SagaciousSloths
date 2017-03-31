import React from 'react';
import { Form, Button, Radio } from 'semantic-ui-react';

const DeckOptionsInput = function (props) {
  return (
    <div className='deckOptionsInput'> 
      <h3>Build a Deck</h3>
      <table>
      {props.list.map((entry) => {
        return (
          <tr>
            <td className="toggleButton">
              <Radio toggle/>
            </td>
            <td>
              {entry}
            </td>
          </tr>
        )
      })}
      </table>

      <Button basic color='orange' >Start</Button>

    </div>
  )
}

export default DeckOptionsInput;