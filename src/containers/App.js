import React, { Component } from 'react';
import './style.css'
import TodoApp from '../components/todo'

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <TodoApp/>
      </div>
    );
  }
}

export default App;
