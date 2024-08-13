import React, { Component } from 'react';

interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Compte : {this.state.count}</p>
        <button onClick={this.increment}>Incrément</button>
      </div>
    );
  }
}

export default Counter;
