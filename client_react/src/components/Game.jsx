import React from 'react';
import HintCard from './HintCard.jsx';
import AnswerCard from './AnswerCard.jsx';
import StartCard from './StartCard.jsx';
import GameOver from './GameOver.jsx';
import $ from 'jquery';


class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'start',
      counter: 0,
      score: 0
    }
    this.onCorrect = this.onCorrect.bind(this);
    this.onAlmost = this.onAlmost.bind(this);
    this.onMiss = this.onMiss.bind(this);
    this.onAnswer = this.onAnswer.bind(this);
    this.onShowAnswer = this.onShowAnswer.bind(this);
    this.onHint = this.onHint.bind(this);
    this.submitScore = this.submitScore.bind(this);
    this.submitHint = this.submitHint.bind(this);
  }

  componentDidMount () {
    console.log('cards', this.props.cards);
  }

  submitHint (info) {
    // $.ajax({
    //   url: '',
    //   type: 'POST',
    //   data: info,
    //   success: () => {
        console.log('Hint Posted');
    //   },
    //   error: (error) => {
    //     console.error(error);
    //   }
    // })
  }

  submitScore (info) {
    console.log('SCORE INFO', info);
    $.ajax({
      url: '/leaders/create',
      type: 'POST',
      data: info,
      success: () => {
        this.props.loadDashboard();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  onAnswer() {
    this.setState({
      counter: this.state.counter + 1,
      display: 'start'
    });

    if (this.state.counter === this.props.cards.length - 1) {
      this.setState({ display: 'game over' })
    }
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
    this.onAnswer();
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
          submitHint={this.submitHint}
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
    } else if (this.state.display === 'game over') {
      return (
        <GameOver
          score={this.state.score}
          submitScore={this.submitScore}
        />
      )
    }
  }
}

export default Game;
