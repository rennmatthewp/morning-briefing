import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WeatherCard } from '../WeatherCard/WeatherCard';

class WeatherContainer extends Component {
  render() {
    const weatherCards = this.props.weatherData.map((weatherObj, index) => (
      <WeatherCard {...weatherObj} key={index} />
    ));
    return <div>{weatherCards}</div>;
  }
}

WeatherContainer.propTypes = {
  weatherData: PropTypes.arrayOf(PropTypes.object)
};

export const mapStateToProps = state => ({
  weatherData: state.weatherReducer
});

export default connect(mapStateToProps, null)(WeatherContainer);
