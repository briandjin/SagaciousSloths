import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'start',
      counter: 0,
      points: 0
    }
    this.onCorrect = this.onCorrect.bind(this);
    this.onAlmost = this.onAlmost.bind(this);
    this.onMiss = this.onMiss.bind(this);
    this.onAnswer = this.onAnswer.bind(this);
    this.onShowAnswer = this.onShowAnswer.bind(this);
    this.onHint = this.onHint.bind(this);
  }

  componentDidMount () {
    console.log('cards', this.props.cards);
  }

  onAnswer() {
    this.setState({
      counter: this.state.counter + 1,
      display: 'start'
    });
  }

  onShowAnswer() {
    this.setState({display: 'show answer'});
  }

  onHint() {
    if (this.state.display !== 'hint') {
      this.setState({display: 'hint'});
    } else {
      this.setState({display: 'start'})
    }
  }

  onCorrect() {
    this.setState({points: this.state.points + 2});
    this.onAnswer();
  }

  onAlmost() {
    this.setState({points: this.state.points + 1});
    this.onAnswer();
  }

  onMiss() {
    this.setState({points: this.state.points + 0});
    this.onAnswer();
  }

  render() {
    var currentCard = this.props.cards[this.state.counter];
    if (this.state.display === 'hint') {
      return (
        <Card>
          <Image src={currentCard.pictureUrl} />
          <Card.Header>
            Hint:
          </Card.Header>
          <Card.Meta>
            <span className='hint'>
              Helpful Hint
            </span>
          </Card.Meta>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button
                basic color='green'
                onClick={this.onShowAnswer}
              >
              Answer
              </Button>
              <Button
                basic color='yellow'
                onClick={this.onHint}
              >
              Hint
              </Button>
            </div>
          </Card.Content>
        </Card>
      )
    } else if (this.state.display === 'show answer') {
      return (
        <Card>
          <Image src={currentCard.pictureUrl} />
          <div>
            {currentCard.firstname + ' ' + currentCard.lastname}
          </div>
          <Card.Content>
              <Button
                basic color='green'
                onClick={this.onCorrect}
              >
              Correct
              </Button>
              <Button
                basic color='yellow'
                onClick={this.onAlmost}
              >
              Almost
              </Button>
              <Button
                basic color='red'
                onClick={this.onMiss}
              >
              Miss
              </Button>
          </Card.Content>
        </Card>
      )
    } else if (this.state.display === 'start') {
      return (
        <Card>
          <Image src={this.props.cards[this.state.counter].pictureUrl} />
          <Card.Content>
            <div className='ui two buttons'>
              <Button
                basic color='green'
                onClick={this.onShowAnswer}
              >
              Answer
              </Button>
              <Button
                basic color='yellow'
                onClick={this.onHint}
              >
              Hint
              </Button>
            </div>
          </Card.Content>
        </Card>
      )
    }
  }
}

export default Game;
