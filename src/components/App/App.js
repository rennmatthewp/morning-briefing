import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import { populateNews, populateWeather } from '../../actions';
import {
  getNewsData,
  getWeatherData,
  cleanNewsData,
  cleanWeatherData
} from '../../helper/apiCalls';
import NewsContainer from '../../containers/NewsContainer/NewsContainer';
//eslint-disable-next-line
import WeatherContainer from '../../containers/WeatherContainer/WeatherContainer';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      errorStatus: null
    };
  }

  componentDidMount() {
    this.getWeather();
    this.getNews();
  }

  getNews = async () => {
    try {
      const newsResponse = await getNewsData();
      const cleanedNewsData = await cleanNewsData(newsResponse.results);
      this.props.populateNews(cleanedNewsData);
    } catch (error) {
      this.setState({ errorStatus: error });
    }
  };

  getWeather = async () => {
    try {
      const weatherResponse = await getWeatherData();
      const cleanedWeatherData = await cleanWeatherData(weatherResponse);
      this.props.populateWeather(cleanedWeatherData);
    } catch (error) {
      this.setState({ errorStatus: error });
    }
  };

  render() {
    return (
      <div className="App">
        <WeatherContainer />
        <NewsContainer />
      </div>
    );
  }
}

App.propTypes = {
  populateNews: PropTypes.func,
  populateWeather: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  populateNews: stories => dispatch(populateNews(stories)),
  populateWeather: weather => dispatch(populateWeather(weather))
});

export default connect(null, mapDispatchToProps)(App);
