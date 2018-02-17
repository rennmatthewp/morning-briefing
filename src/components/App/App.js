import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { populateNews, populateWeather } from '../../actions';
import { nytKey, wuKey } from '../../helper/.apiKeys';

class App extends Component {
  componentDidMount() {
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${nytKey}`
    )
      .then(res => res.json())
      .then(res => this.props.populateNews(res.results));
    fetch(
      `http://api.wunderground.com/api/${wuKey}/hourly/q/CO/Denver.json`
    )
      .then(res => res.json())
      .then(res => this.props.populateWeather(res.hourly_forecast));
  }

  render() {
    return <div className="App">Hello, World</div>;
  }
}

export const mapDispatchToProps = dispatch => ({
  populateNews: storiesArray => dispatch(populateNews(storiesArray)),
  populateWeather: weatherArray => dispatch(populateWeather(weatherArray))
});

export default connect(null, mapDispatchToProps)(App);
