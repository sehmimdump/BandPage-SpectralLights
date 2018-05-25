import React, { Component } from 'react';
import './App.css';
import StartPage from "./components/StartPage";
import ScrollPageMusic from './components/ScrollPageMusic';
class App extends Component {
  render() {
    return (
      <div className="App">
        <StartPage />
        <ScrollPageMusic />
      </div>
    );
  }
}

export default App;
