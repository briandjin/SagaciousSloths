import { Card, Icon, Input, Image, Button, Form, Label, TextArea } from 'semantic-ui-react';
import React from 'react';
import $ from 'jquery';


class HintSubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submittedHint: '',
      viewHints: false
    }
    this.inputHint = this.inputHint.bind(this);
    this.onViewHints = this.onViewHints.bind(this);
    this.onSubmitHint = this.onSubmitHint.bind(this);
    this.submitHint = this.submitHint.bind(this);
  }

  submitHint (hintInfo) {
    $.ajax({
      url: '/hints/new',
      type: 'POST',
      data: hintInfo,
      success: () => {
        this.getHints();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  onSubmitHint (e) {
    console.log('onSubmitHint')
    e.preventDefault();

    var hintInfo = {
      cardID: this.props.currentCard.id,
      hint: this.state.submittedHint
    }
    this.props.submitHint(hintInfo);
    // this.setState({
    //   submittedHint: ''
    // });
  }

  inputHint (e) {
    this.setState({submittedHint: e.target.value});
  }

  onViewHints (e) {
    e.preventDefault();
    if (this.state.viewHints === false && this.props.hints.length > 0) {
      this.setState({viewHints: true});
    } else {
      this.setState({viewHints: false});
    }
  }

  onSubmitHint (e) {
    console.log('onSubmitHint')
    e.preventDefault();

    var hintInfo = {
      cardID: this.props.currentCard.id,
      hint: this.state.submittedHint
    }
    this.props.submitHint(hintInfo);
    // this.setState({
    //   submittedHint: ''
    // });
  }

  render() {

    if (this.state.viewHints === false) {
      return (
        <Form>
          <Form.Field>
            <Input
              onChange={this.inputHint}
              focus placeholder='Your Hint'/>
          </Form.Field>
            <Button
              onClick={this.onViewHints}
            >View Hints</Button>
            <Button
              onClick={this.onSubmitHint}
              size='medium'
              icon>
              <Icon name='write' />
            </Button>
        </Form>
    )
  }
      // NO HINTS
    return (  
      <Form>
        <Form.Field>
          <Input
            onChange={this.inputHint}
            focus placeholder='Your Hint'
            autoHeight/>
        </Form.Field>
          <Button
            onClick={(e)=>{e.preventDefault()}}
          >NO HINTS AVAILABLE</Button>
          <Button
            onClick={this.props.onSubmitHint}
            size='medium'
            icon>
            <Icon name='write' />
          </Button>
      </Form>
    )
  }
}

// VIEW HINTS
