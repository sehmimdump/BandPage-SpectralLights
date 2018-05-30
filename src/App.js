import React, { Component } from 'react';
import './App.css';
import StartPage from "./components/StartPage";
import ScrollPageMusic from './components/ScrollPageMusic';
import ScrollPageVideos from './components/ScrollPageVideos';
import ScrollPageMerch from './components/ScrollPageMerch';


class App extends Component {
  render() {
    return (
      <div className="App">
        <StartPage />
        <ScrollPageMusic />
        <ScrollPageVideos />
        <ScrollPageMerch />
      </div>
    );
  }
}

export default App;
