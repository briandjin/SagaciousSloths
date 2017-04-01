import React from 'react';
import HintCard from './HintCard.jsx';
import AnswerCard from './AnswerCard.jsx';
import StartCard from './StartCard.jsx';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'start',
      counter: 0,
      score: 0,
      // roundPoints: 150,
    }
    this.onCorrect = this.onCorrect.bind(this);
    this.onAlmost = this.onAlmost.bind(this);
    this.onMiss = this.onMiss.bind(this);
    this.onAnswer = this.onAnswer.bind(this);
    this.onShowAnswer = this.onShowAnswer.bind(this);
    this.onHint = this.onHint.bind(this);
    // this.resetRoundPoints = this.resetRoundPoints.bind(this);
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
      this.setState({
        display: 'hint',
        score: this.state.score - 25
      });
    } else {
      this.setState({display: 'start'})
    }
  }

  onCorrect() {
    this.setState({score: this.state.score + 150});
    // this.resetRoundPoints();
    this.onAnswer();
  }

  onAlmost() {
    this.setState({score: this.state.score + 100});
    // this.resetRoundPoints();
    this.onAnswer();
  }

  onMiss() {
    this.setState({score: this.state.score + 0});
    // this.resetRoundPoints();
    this.onAnswer();
  }

  resetRoundPoints() {
    this.setState({roundPoints: 150})
  }

  render() {

    if (this.state.display === 'hint') {
      return (
        <HintCard
          score={this.state.score}
          currentCard={this.props.cards[this.state.counter]}
          onShowAnswer={this.onShowAnswer}
          onHint={this.onHint}
          roundPoints={this.state.roundPoints}
        />
      )
    } else if (this.state.display === 'show answer') {
      return (
        <AnswerCard
          score={this.state.score}
          currentCard={this.props.cards[this.state.counter]}
          onCorrect={this.onCorrect}
          onAlmost={this.onAlmost}
          onMiss={this.onMiss}
          roundPoints={this.state.roundPoints}
        />
      )
    } else if (this.state.display === 'start') {
      return (
        <StartCard
          score={this.state.score}
          currentCard={this.props.cards[this.state.counter]}
          onShowAnswer={this.onShowAnswer}
          onHint={this.onHint}
          roundPoints={this.state.roundPoints}
        />
      )
    }
  }
}

export default Game;
