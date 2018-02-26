import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NewsContainer from '../../containers/NewsContainer/NewsContainer';
//eslint-disable-next-line
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      errorStatus: null
    };
  }


  render() {
    return (
      <div className="app">
        <header>
          <h1>Morning Briefing</h1>
          <Route path="/" component={WeatherContainer} />
        </header>
        <Route path="/" component={NewsContainer} />
      </div>
    );
  }
}
