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
      changeDie: "fas fa-dice-one",
      changeDie2: "fas fa-dice-two"
    }
    this.roll = this.roll.bind(this);
  }
    roll(e) {
      let rand = Math.floor(Math.random() * this.props.dieNum.length);
      let rand2 = Math.floor(Math.random() * this.props.dieNum.length);
      this.setState({changeDie: this.props.dieNum[rand]});
      this.setState({changeDie2: this.props.dieNum[rand2]});
    }
  render() {
    return (
      <div>
        <Die dieNum = {this.state.changeDie} />
        <Die dieNum = {this.state.changeDie2} />
        <button onClick={this.roll}>Roll Dice!</button>
      </div>
    )
  }
}

export default RollDice;