import React, { Component } from 'react';

class App extends Component {
  render() {
    return ( //jsx = js + XML
      <ul className="items">
        <li>Vue</li>
        <li>React</li>
        <li>{false ? 'react' : 'REACT'}</li>
      </ul>
    )
  }
}

export default App