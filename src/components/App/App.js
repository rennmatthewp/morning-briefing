import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NewsContainer from '../../containers/NewsContainer/NewsContainer';
//eslint-disable-next-line
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';
import { newsSections } from '../../helper/apiCalls';
import './App.css';

export class App extends Component {
  validateRoute = ({ section, category }) => {
    if (category !== 'hourly' && category !== 'daily') return false;
    if (!newsSections[section]) return false;
    return true;
  };

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            path="/:section/:category"
            render={({ match }) => {
              return this.validateRoute(match.params) ? (
                <div>
                  <header>
                    <h1>Morning Briefing</h1>
                    <WeatherContainer section={match.params.section} />
                  </header>
                  <NewsContainer category={match.params.category} />
                </div>
              ) : (
                <Redirect to="/home/hourly" />
              );
            }}
          />
          <Redirect from="*" to="/home/hourly" />
        </Switch>
      </div>
    );
  }
}
