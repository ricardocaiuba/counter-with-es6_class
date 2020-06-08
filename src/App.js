import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    contador: 0
  };

  Incriment = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  }

  Decrement = () => {
    this.setState({
      contador: this.state.contador - 1
    });
  }

  Clear = () => {
    this.setState({
      contador: 0
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.Incriment}>+</button>
        -
        <button onClick={this.Decrement}>-</button>
        -
        <button onClick={this.Clear}>Clear</button>
      </div>
    )
  }
}

export default App;
