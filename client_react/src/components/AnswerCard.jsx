import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

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

class AnswerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pointsToAdd: this.props.roundPoints,
      pointColor: 'black',
      pointDisplay: 'none',
    }
    this.hoverCorrect = this.hoverCorrect.bind(this);
    this.hoverAlmost = this.hoverAlmost.bind(this);
    this.hoverMiss = this.hoverMiss.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  hoverCorrect() {
    this.setState({
      pointColor: 'green',
      pointsToAdd: '+150',
      pointDisplay: 'inline',

    })
  }

  hoverAlmost() {
    this.setState({
      pointColor: 'orange',
      pointsToAdd: '+100',
      pointDisplay: 'inline',
    })
  }

  hoverMiss() {
    this.setState({
      pointColor: 'red',
      pointsToAdd: 0,
      pointDisplay: 'inline',
    })
  }

  mouseLeave() {
    this.setState({
      pointColor: 'black',
      pointsToAdd: this.props.roundPoints,
      pointDisplay: 'none',
    })
  }

  render() {
    return (
      <div style={{width: 400, marginBottom: 200}}>
        <Card style={{width: '100%', paddingBottm: 15}}>
          <Card.Content>
            <Card.Header className="header">
              <p style={{"float": "left"}}>SCORE: {this.props.score}</p>
              <p style={{"float": "right", "color": this.state.pointColor, "display": this.state.pointDisplay}}>
              {this.state.pointsToAdd} POINTS
              </p>
            </Card.Header>
          </Card.Content>
          <Image src={this.props.currentCard.pictureUrl} />
          <div>
            <p style={{"float": "left", "fontWeight": "bold", "fontSize": "large", "marginLeft": "10px", "marginTop": "15px"}}>
              {this.props.currentCard.firstname + ' ' + this.props.currentCard.lastname}
            </p>
            <p style={{"float": "right", "fontWeight": "bold", "fontSize": "large", "marginRight": "10px", "marginTop": "15px"}}>
              {this.props.currentCard.deck}
            </p>
          </div>
            <Card.Content >
              <Button
                basic color='green'
                onClick={this.props.onCorrect}
                style={left}
                onMouseEnter={this.hoverCorrect}
                onMouseLeave={this.mouseLeave}
              >
              CORRECT
              </Button>
              <Button
                basic color='yellow'
                onClick={this.props.onAlmost}
                style={center}
                onMouseEnter={this.hoverAlmost}
                onMouseLeave={this.mouseLeave}
              >
              ALMOST
              </Button>
              <Button
                basic color='red'
                onClick={this.props.onMiss}
                style={right}
                onMouseEnter={this.hoverMiss}
                onMouseLeave={this.mouseLeave}
              >
              MISS
              </Button>
          </Card.Content>
        </Card>
      </div>
    )
  }
};

export default AnswerCard;