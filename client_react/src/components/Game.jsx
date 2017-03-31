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

    if (this.state.display === 'hint') {
      return (
        <HintCard 
          points={this.state.points}
          currentCard={this.props.cards[this.state.counter]}
          onShowAnswer={this.onShowAnswer}
          onHint={this.onHint}
        />
      )
    } else if (this.state.display === 'show answer') {
      return (
        <AnswerCard
          points={this.state.points}
          currentCard={this.props.cards[this.state.counter]}
          onCorrect={this.onCorrect}
          onAlmost={this.onAlmost}
          onMiss={this.onMiss}
        />
      )
    } else if (this.state.display === 'start') {
      return (
        <StartCard
          points={this.state.points}
          currentCard={this.props.cards[this.state.counter]}
          onShowAnswer={this.onShowAnswer}
          onHint={this.onHint}
        />
      )
    }
  }
}

export default Game;
