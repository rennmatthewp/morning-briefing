import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { populateNews, populateWeather } from '../../actions';
import { getNews, getWeather } from '../../helper/apiCalls';
import NewsContainer from '../../containers/NewsContainer/NewsContainer';
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      errorStatus: null
    };
  }

  componentDidMount() {
    getWeather()
      .then(this.props.populateWeather)
      .catch(error => {
        this.setState({ errorStatus: error });
      });
    getNews()
      .then(this.props.populateNews)
      .catch(error => {
        this.setState({ errorStatus: error });
      });
  }

  render() {
    return (
      <div className="App">
        <WeatherContainer />
        <NewsContainer />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  populateNews: stories => dispatch(populateNews(stories)),
  populateWeather: weather => dispatch(populateWeather(weather))
});

export default connect(null, mapDispatchToProps)(App);
