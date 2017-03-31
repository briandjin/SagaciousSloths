import React from 'react';

class GameOver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: ''
    }
  }

  onNameChange(e) {
    this.setState({
      nickname: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.onNameChange}
        />
      </div>
      <button onClick={this.submit}>
        SUBMIT SCORE
      </button>
    )
  }
};

export default GameOver;