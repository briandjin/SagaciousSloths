import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'start'
    }
    this.onAnswer = this.onAnswer.bind(this);
    this.onHint = this.onHint.bind(this);
  }
  componentDidMount () {
    console.log('cards', this.props.cards);
  }

  onAnswer () {
    this.setState({display: 'answer'});
  }

  onHint () {
    if (this.state.display !== 'hint') {
      this.setState({display: 'hint'});
    } else {
      this.setState({display: 'start'})
    }
  }

  render () {
    if (this.state.display === 'hint') {
      return (
        <Card>
          <Image src={this.props.cards[0].pictureUrl} />
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
                onClick={this.onAnswer}
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
    } else if (this.state.display === 'answer') {
      return (
        <Card>
          <Image src={this.props.cards[0].pictureUrl} />
          <Card.Content>
              <Button 
                basic color='green'
              >
              Correct
              </Button>
              <Button 
                basic color='yellow'
              >
              Almost
              </Button>              
              <Button 
                basic color='red'
              >
              Miss
              </Button>

          </Card.Content>
        </Card>
      )
    } else {
      return (
        <Card>
          <Image src={this.props.cards[0].pictureUrl} />
          <Card.Content>
            <div className='ui two buttons'>
              <Button 
                basic color='green'
                onClick={this.onAnswer}
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
