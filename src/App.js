import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Loading from './components/Loading_Screen/Loading';
import {
  BrowserRouter,
  Route,
  Link
  } from 'react-router-dom'



class App extends Component {

  handleClickLogin = () => {
    console.log('this is login:', this);
  }

  handleClickCreate = () => {
    console.log('this is create:', this);
  }

  render() {
    return (
      <div className="App">
        <Loading clicked_login={this.handleClickLogin}
          clicked_create={this.handleClickCreate} />
      </div>
    );
  }
}



export default App;
