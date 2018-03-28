import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading_Screen/Loading';



class App extends Component {
  handleClick = () => {
    console.log('this is:', this);
  }
  render() {
    return (
      <div className="App">
        <Loading />
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}



export default App;
