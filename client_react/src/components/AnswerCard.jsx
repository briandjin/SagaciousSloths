import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const AnswerCard = function(props) {

  var left = {
    float:'left',
    width:100,
    height: 'auto'
  }

  var center = {
    display: 'inline-block',
    marginLeft: '8.5%',
    width:100,
    height: 'auto'
  }

  var right = {
    float:'right',
    width:100,
    height: 'auto'
  }

  return (
    <div style={{width: 400, marginBottom: 200}}>
      <Card style={{width: '100%', paddingBottom: 15}}>
        <Card.Content>
          <Card.Header>
            SCORE: {props.score}
          </Card.Header>
        </Card.Content>
        <Image src={props.currentCard.pictureUrl} />
        <div>
          {props.currentCard.firstname + ' ' + props.currentCard.lastname}
        </div>
          <Card.Content >
            <Button
              basic color='green'
              onClick={props.onCorrect}
              style={left}
            >
            CORRECT
            </Button>
            <Button
              basic color='yellow'
              onClick={props.onAlmost}
              style={center}
            >
            ALMOST
            </Button>
            <Button
              basic color='red'
              onClick={props.onMiss}
              style={right}
            >
            MISS
            </Button>
        </Card.Content>
      </Card>
    </div>
  )
};

export default AnswerCard;