import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const StartCard = function (props) {

  return (
    <div style={{width: 400, marginBottom: 200}}>
      <Card style={{width: '100%', paddingBottom: 15}}>
        <Card.Content>
          <Card.Header>
            SCORE: {props.score}
          </Card.Header>
        </Card.Content>
        <Image src={props.currentCard.pictureUrl} />
        <Card.Content>
          <div className='ui two buttons'>
            <Button
              basic color='green'
              onClick={props.onShowAnswer}
            >
            ANSWER
            </Button>
            <Button
              basic color='yellow'
              onClick={props.onHint}
            >
            HINT
            </Button>
          </div>
        </Card.Content>
      </Card>
    </div>
  )
}

export default StartCard;