import React from 'react';
import PropTypes from 'prop-types';
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';
import './WeatherCategory.css';

export const WeatherCategory = ({ weather }) => {
  const { hourlyForecast, currentObservation } = weather;
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

WeatherCategory.propTypes = {
  weather: PropTypes.object
};
