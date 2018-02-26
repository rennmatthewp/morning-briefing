import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { populateWeather } from '../../actions';
import { getWeatherData, cleanWeatherData } from '../../helper/apiCalls';
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

  componentDidMount() {
    this.getWeather();
  }

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

App.propTypes = {
  populateWeather: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  populateWeather: weather => dispatch(populateWeather(weather))
});

export default withRouter(connect(null, mapDispatchToProps)(App));
