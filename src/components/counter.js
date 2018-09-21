import React, { Component } from 'react';

class Counter extends Component {
  render() {
    const { state, onIncrement, onDecrement } = this.props;
    
    const onClickIncrement = () => {
      onIncrement(state)
    }
    
    const onClickDecrement = () => {
      onDecrement(state)
    }

    return (
      <div className="counter">
        <h1>{state}</h1>
        <button onClick={onClickIncrement}>+</button>
        <button onClick={onClickDecrement}>-</button>
      </div>
    )
  }
}

export default Counter
