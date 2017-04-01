import React from 'react';
import { Card, Icon, Image, Button, Form, Label, TextArea } from 'semantic-ui-react';

class HintCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedHint: ''
    }
    this.inputHint = this.inputHint.bind(this);
    this.onViewHints = this.onViewHints.bind(this);
    this.onWriteHint = this.onWriteHint.bind(this);
  }

  inputHint (e) {
    this.setState({submittedHint: e.target.value});
    console.log(e.target.value);
  }

  onViewHints (e) {
    e.preventDefault();
    console.log('ViewHints');
  }

  onWriteHint (e) {
    e.preventDefault();
    console.log('WriteHints');
  }

  render () {    
    return (
      <div style={{width: 400, marginBottom: 200}}>
        <Card style={{width: '100%', paddingBottom: 15}}>
          <Card.Content>
            <Card.Header>
              Points: {this.props.points}
            </Card.Header>
          </Card.Content>
          
          <Image src={this.props.currentCard.pictureUrl} />
          <Card.Header>
            Liked Hints:
          </Card.Header>
          <Card.Meta>
            <span className='hint'>
              Randomly selected liked hint
            </span>
          </Card.Meta>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button
                basic 
                color='green'
                onClick={this.props.onShowAnswer}
              >
              Answer
              </Button>
              <Button
                basic color='yellow'
                onClick={this.props.onHint}
              >
              Hint
              </Button>
            </div>
          </Card.Content>
        </Card>
        <Form>
          <Form.Field>
            <TextArea 
              onChange={this.inputHint}
              placeholder='Your Hint' 
              autoHeight/>
          </Form.Field>
            <Button
              onClick={this.onViewHints}
            >View Hints</Button>
            <Button 
              onClick={this.onWriteHint}
              size='medium'
              icon>
              <Icon name='write' />
            </Button>
        </Form>
      </div>
    )
  }
};

export default HintCard;