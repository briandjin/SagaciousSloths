import React from 'react';
import { Form, Button, Radio } from 'semantic-ui-react';
import DeckOptionsEntry from './DeckOptionsEntry.jsx'

const DeckOptionsInput = function (props) {
  return (
    <div className='deckOptionsInput'>
      <h3>BUILD A DECK!</h3>
      <table>
        <tbody>
        {props.list.map((entry, index) => {
          return (
            <DeckOptionsEntry data={entry} index={index} addToSearch={props.addToSearch}/>
          )
        })}
        </tbody>
      </table>
      <Button
        onClick={props.getLegacyCards}
        basic color='orange'>
        START
      </Button>

    </div>
  )
}

export default DeckOptionsInput;