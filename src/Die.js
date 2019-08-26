import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    return (
      <div className = 'Die'>
        <i className = {this.props.dieNum}></i>
      </div>
    )
  }
}

export default Die;