import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Home from './components/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            我的React(create-react-app)
          </p>
          <Home />
          <Button type="danger" ghost>danger</Button>
        </header>
      </div>
    );
  }
}

export default App;
