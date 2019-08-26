import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css'

class RollDice extends Component {
  static defaultProps = {
    dieNum : [
      "fas fa-dice-one",
      "fas fa-dice-two",
      "fas fa-dice-three",
      "fas fa-dice-four",
      "fas fa-dice-five",
      "fas fa-dice-six"
    ]
  }
  constructor(props) {
    super(props);
    this.state = {
    }
    this.roll = this.roll.bind(this);
  }
    roll(e) {
      console.log('clicked');
    }
  render() {
    return (
      <div>
        <Die dieNum = {this.props.dieNum} />
        <Die dieNum = {this.props.dieNum} />
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    )
  }
}

export default RollDice;