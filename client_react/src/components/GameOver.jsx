import React from 'react';

class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: ''
    };
  }

  onNameChange(e) {
    this.setState({
      nickname: e.target.value
    });
  }

  onSubmit() {
    var info = {
      nickname: this.state.nickname,
      score: this.props.score
    };
    this.props.submitScore(info);
  }

  render() {
    return (
      <div>
        <div>
          SCORE: {this.props.score}
        </div>
        <input
          type="text"
          onChange={this.onNameChange}
        />
      <button onClick={this.onSubmit}>
        SUBMIT SCORE
      </button>
      </div>
    )
  }
};

export default GameOver;
