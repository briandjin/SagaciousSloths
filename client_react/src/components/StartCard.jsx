import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

class StartCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointDisplay: 'none',
    }
    this.hoverHint = this.hoverHint.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  hoverHint() {
    this.setState({
      pointDisplay: 'inline',
    })
  }

  mouseLeave() {
    this.setState({
      pointDisplay: 'none',
    })
  }

  render() {
    return (
      <div style={{width: 400, marginBottom: 200}}>
        <Card style={{width: '100%', paddingBottm: 15}}>
          <Card.Content>
            <Card.Header>
              <p style={{"float": "left"}}>SCORE: {this.props.score}</p>
              <p style={{"float": "right", "display": this.state.pointDisplay}}>
              -25 POINTS
              </p>
            </Card.Header>
          </Card.Content>
          <Image src={this.props.currentCard.pictureUrl} />
          <Card.Content>
            <div className='ui two buttons'>
              <Button
                basic color='green'
                onClick={this.props.onShowAnswer}
              >
              ANSWER
              </Button>
              <Button
                basic color='yellow'
                onClick={this.props.onHint}
                onMouseEnter={this.hoverHint}
                onMouseLeave={this.mouseLeave}
              >
              HINT
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    )
  }
}

export default StartCard;