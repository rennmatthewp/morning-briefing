import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';

export const WeatherContainer = props => {
  console.log('wc:', props)
  
  return <WeatherCard />
}

WeatherContainer.propTypes = {
  weather: PropTypes.shape({
    currentObservation: PropTypes.object,
    hourlyForecast: PropTypes.arrayOf(PropTypes.object)
  })
};

export const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps, null)(WeatherContainer);
