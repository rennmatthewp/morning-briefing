import React from 'react';
import { arrayOf, object } from 'prop-types';
import { connect } from 'react-redux';
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';
import './WeatherContainer.css';

export const WeatherContainer = ({ currentObservation, hourlyForecast }) => {
  const hourlyForecastCards = hourlyForecast
    ? hourlyForecast.map((hour, index) => (
        <WeatherCard hourlyForecast={hour} key={index} />
      ))
    : 'Loading...';

  const currentObservationCard = (
    <WeatherCard currentObservation={currentObservation} />
  );

  return (
    <div className="weather-container">
      {currentObservationCard}
      {hourlyForecastCards}
    </div>
  );
};

WeatherContainer.propTypes = {
  currentObservation: object,
  hourlyForecast: arrayOf(object)
};

export const mapStateToProps = state => ({
  currentObservation: state.weather.currentObservation,
  hourlyForecast: state.weather.hourlyForecast
});

export default connect(mapStateToProps, null)(WeatherContainer);
