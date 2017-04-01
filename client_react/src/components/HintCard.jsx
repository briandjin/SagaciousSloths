import React from 'react';
import { Card, Icon, Image, Button, Form, Label, TextArea } from 'semantic-ui-react';
import HintEntry from './HintEntry.jsx';

var dummydata = ['Hint 1', 'Hint 2', 'Hint 3', 4, 5, 6, 7]

class HintCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedHint: '',
      viewHints: false,
    }
    this.inputHint = this.inputHint.bind(this);
    this.onViewHints = this.onViewHints.bind(this);
    this.onSubmitHint = this.onSubmitHint.bind(this);
  }

  inputHint (e) {
    this.setState({submittedHint: e.target.value});
    console.log(e.target.value);
  }

  onViewHints (e) {
    e.preventDefault();
    if (this.state.viewHints === false) {
      this.setState({viewHints: true});
    }
    else {
      this.setState({viewHints: false});
    }
  }


  onSubmitHint (e) {
    console.log('onSubmitHint')
    e.preventDefault();

    var info = {
      submittedHint: this.state.submittedHint
    }
    this.props.submitHint();
  };

  render () {
    if(this.state.viewHints === false) {
      return (
        <div style={{width: 400, marginBottom: 200}}>
          <Card style={{width: '100%', paddingBottom: 15}}>
            <Card.Content>
              <Card.Header>
                <p style={{"float": "left"}}>SCORE: {this.props.score}</p>
                <p style={{"float": "right", "display": this.state.pointDisplay}}>
                -25 POINTS
                </p>
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
                ANSWER
                </Button>
                <Button
                  basic color='yellow'
                  onClick={this.props.onHint}
                >
                HINT
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
                onClick={this.onSubmitHint}
                size='medium'
                icon>
                <Icon 
                  name='write'
                />
              </Button>
          </Form>
        </div>
      )
    } else {
      return (
        <div style={{width: 400, marginBottom: 200}}>
          <Card style={{width: '100%', paddingBottom: 15}}>
            <Card.Content>
              <Card.Header>
                SCORE: {this.props.score}
              </Card.Header>
            </Card.Content>
            <div style={{overflow: 'scroll'}}>
            {dummydata.map(function(data, index) {
              return <HintEntry key={index} data={data} />
            })}
            </div>
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
                ANSWER
                </Button>
                <Button
                  basic color='yellow'
                  onClick={this.props.onHint}
                >
                HINT
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
                onClick={this.submitHint}
                size='medium'
                icon>
                <Icon name='write' />
              </Button>
          </Form>
          
        </div>
      )
    }
  }
};

export default HintCard;