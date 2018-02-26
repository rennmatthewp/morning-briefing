import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { populateWeather } from '../../actions';
import { getWeatherData, cleanWeatherData } from '../../helper/apiCalls';
import { WeatherNav } from '../../components/WeatherNav/WeatherNav';
//eslint-disable-next-line
import { WeatherCategory } from '../../components/WeatherCategory/WeatherCategory';
import './WeatherContainer.css';

export class WeatherContainer extends Component {
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
    if (this.state.errorStatus) {
      return <div className="weather-container">Error Fetching Weather</div>;
    }

    return (
      <div className="weather-container">
        <WeatherNav selectCategory={this.selectCategory} />
        <Route
          path="/"
          render={() => <WeatherCategory weather={this.props.weather} />}
        />
      </div>
    );
  }
}

WeatherContainer.propTypes = {
  weather: object,
  populateWeather: func
};

export const mapStateToProps = state => ({
  weather: state.weather
});

export const mapDispatchToProps = dispatch => ({
  populateWeather: weather => dispatch(populateWeather(weather))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);
