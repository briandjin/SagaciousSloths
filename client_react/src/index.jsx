import React from 'react';
import ReactDOM from 'react-dom';
import Answer from './components/Answer.jsx';
import Menubar from './components/Menubar.jsx';
import Game from './components/Game.jsx';
import DeckOptionsInput from './components/DeckOptionsInput.jsx';
import LeaderBoard from './components/leaderBoard.jsx';
import $ from 'jquery';
import axios from 'axios';
import {Jumbotron, Col} from 'react-bootstrap';

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      counter: 0,
      ready: false,
      page: 'dashboard',
      cohortList: [],
      cohortStats: {},
      highScores: [{nickname: 'bryan', score: 99999999}, {nickname: 'allen', score: 1}],
      gameDecks: [],
    };
    this.isReady = this.isReady.bind(this);
    this.loadQuiz = this.loadQuiz.bind(this);
    this.loadDashboard = this.loadDashboard.bind(this);
    this.moveBackToReady = this.moveBackToReady.bind(this);
    this.renderNextStudent = this.renderNextStudent.bind(this);
    this.saveUserAnswer = this.saveUserAnswer.bind(this);
    this.startGame = this.startGame.bind(this);
    this.getLegacyCards = this.getLegacyCards.bind(this);
    this.logOut = this.logOut.bind(this);
    this.addToSearch = this.addToSearch.bind(this);
  }

  componentDidMount () {
    this.loadDashboard();
  }

// ------------- GAME -------------
  getLegacyCards () {
    var selectedDecks = {
      gameModeDecks: this.state.gameModeDecks
    };

    $.ajax({
      url: '/getLegacyCards',
      type: 'GET',
      data: selectedDecks,
      success: (selectedCards) => {
        this.setState({
          cards: selectedCards
        })
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  startGame () {
    this.setState({ page: 'game' });
    // this.getLegacyCards();
  }

  logOut() {
    $.ajax({
      url: '/logout',
      method: 'GET',
      success: function(data) {
        document.write(data);
      }.bind(this),
      error: function(err) {
        console.error('error logging out', err);
      }
    });
  }

  loadDashboard () {
    var _this = this;
    axios.get('/dashboard')
    .then(function (response) {
      var cohortList = Object.keys(response.data).sort();
      _this.setState({
        cohortList: cohortList,
        cohortStats: response.data
      });
      _this.setState({
        page: 'dashboard'
      });
    });
  }

  saveUserAnswer(event, answer) {
    event.preventDefault();
    let cardId = this.state.cards[this.state.counter].id;
    var counter = this.state.counter + 1;
    if (counter < this.state.cards.length) {
      this.setState({
        counter: counter,
        ready: false,
      });
    }
    var _this = this;
    $.ajax({
      url: '/api/card',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ cardId: cardId, answer: answer}),
      success: function() {
        if (counter >= _this.state.cards.length ) {
          _this.loadDashboard();
        }
      },
      error: function(err) {
        console.error('error in saveUserAnswer:', err);
      }
    });
  }

  loadQuiz(event) {
    $.ajax({
      url: '/quiz',
      method: 'GET',
      data: {deck: event.target.innerHTML},
      success: function(cards) {
        this.setState({cards: cards});
        this.setState({counter: 0});
        this.setState({
          page: 'quiz'
        });
      }.bind(this),
      error: function(err) {
        console.error('error loading quiz', err);
      }
    });
  }

  renderNextStudent() {
    $.ajax({
      url: '/quiz',
      method: 'GET',
      success: function(data) {
        this.setState({
          firstname: data[this.state.counter].firstname,
          lastname: data[this.state.counter].lastname,
          deck: data[this.state.counter].deck,
          pictureUrl: data[this.state.counter].pictureUrl
        });
      }.bind(this),
      error: function(err) {
        console.error('error', err);
      }
    });
  }

  isReady() {
    this.setState({
      ready: true
    });
  }

  moveBackToReady() {
    this.setState({
      ready: false
    });
  }

  addToSearch(e) {
    // var newArray = this.state.gameDecks.slice();
    // newArray.push(e.target.value);
    if (this.state.gameDecks.indexOf(e.target.value) < 0) {
      this.setState({
        gameDecks: this.state.gameDecks.concat(e.target.value),
      })
    } else {
      var clone = this.state.gameDecks.slice();
      var indexToSplice = clone.indexOf(e.target.value);
      clone.splice(indexToSplice, 1);
      this.setState({
        gameDecks: clone,
      })
    }
  }

  render() {
    if (this.state.page === 'game') {
      return (
        <div>
          <Jumbotron><img src='../logo.png' style={{width:'100%'}}/></Jumbotron>
          <Menubar loadDashboard={this.loadDashboard} logOut={this.logOut}/>
          <div style={{margin: 'auto', width: '32%'}}>
            <Game cards={this.state.cards}/>
          </div>
        </div>
      )
    };

    return (
      <div>
        <Jumbotron><img src='../logo.png' style={{width:'100%'}}/></Jumbotron>
        <Menubar loadDashboard={this.loadDashboard} logOut={this.logOut}/>

        {this.state.page === 'dashboard' ? (
        <div>
          <table className="cohortButtonContainer">
            <tbody>
            <tr>
              {this.state.cohortList.map((cohort, index) => {
                var _cohort = cohort;
                return (
                  <td>
                    <div className="statBox">
                      <span className="redStat">{this.state.cohortStats[cohort].red}</span>
                      <span className="orangeStat">{this.state.cohortStats[cohort].orange}</span>
                      <span className="greenStat">{this.state.cohortStats[cohort].green}</span>
                    </div>
                    <div>
                      <div key={index} onClick={(cohort) => { this.loadQuiz(cohort); }} className="cohortButton">
                        {cohort}
                      </div>
                    </div>
                  </td>
                );
              })}
            </tr>
            </tbody>
          </table>
        <div>

        <DeckOptionsInput
          list={this.state.cohortList}
          startGame={this.startGame}
          addToSearch={this.addToSearch}/>
        </div>
        <div>
          <LeaderBoard scores={this.state.highScores}/>
        </div>
      </div>
    ) : (
        <div id="quiz">
          <div>
            <img className="profilePic" src={this.state.cards[this.state.counter].pictureUrl}/>
          </div>
          <br />
          <div>
            {!this.state.ready ? (
                <button onClick={this.isReady} className="readyButton">
                  Show me the answer
                </button>
              ) : (
                <Answer
                  firstname={this.state.cards[this.state.counter].firstname}
                  lastname={this.state.cards[this.state.counter].lastname}
                  saveUserAnswer={this.saveUserAnswer}
                />
              )
            }
          </div>
        </div>
      )}
      </div>
    );
  }
}

ReactDOM.render(
  <Quiz />, document.getElementById('root')
);