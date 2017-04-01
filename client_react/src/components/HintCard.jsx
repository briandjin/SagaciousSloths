import React from 'react';
import { Card, Icon, Image, Button, Form, Label, TextArea } from 'semantic-ui-react';

var HintCard = function (props) {
  return (
    <div style={{width: 400, marginBottom: 200}}>
      <Card style={{width: '100%', paddingBottom: 15}}>
        <Card.Content>
          <Card.Header>
            SCORE: {props.score}
          </Card.Header>
        </Card.Content>

        <Image src={props.currentCard.pictureUrl} />
        <Card.Header>
          HINTS:
        </Card.Header>
        <Card.Meta>
          <span className='hint'>
            Randomly selected liked hint
          </span>
        </Card.Meta>
        <Card.Content extra>
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
      <Form>
        <Form.Field>
          <TextArea
            placeholder='Your Hint'
            autoHeight/>
        </Form.Field>
          <Button>Submited Hints</Button>
          <Button
            size='medium'
            // style={{float: 'right'}}
            icon>
            <Icon name='comment' />
          </Button>
      </Form>
    </div>
  )
};

export default HintCard;