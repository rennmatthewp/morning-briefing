import React from 'react';
import PropTypes from 'prop-types';
import './WeatherCard.css';

export const WeatherCard = ({ currentObservation, hourlyForecast }) => {
  if (currentObservation) {
    const {
      location,
      currentTime,
      temp,
      conditions,
      icon
    } = currentObservation;
    return (
      <div className="weather-card current">
        <h3>{location}</h3>
        <p>{currentTime}</p>
        <h4>{temp}°F</h4>
        <h4>{conditions}</h4>
        <img src={icon} alt="weather icon" />
      </div>
    );
  }

  if (hourlyForecast) {
    const { temp, pop, icon, hour } = hourlyForecast;
    return (
      <div className="weather-card hourly">
        <h3>{temp}°F</h3>
        <h5>
          <img
            src={require('../../assets/drop.svg')}
            alt="raindrop"
            className="drop"
          />
          {pop}%
        </h5>
        <img src={icon} alt="weather icon" />
        <h3>{hour}</h3>
      </div>
    );
  }

  return <div className="weather-card">Loading Weather Data...</div>;
};

WeatherCard.propTypes = {
  currentObservation: PropTypes.shape({
    location: PropTypes.string,
    currentTime: PropTypes.string,
    temp: PropTypes.number,
    conditions: PropTypes.string,
    icon: PropTypes.string
  }),
  hourlyForecast: PropTypes.shape({
    temp: PropTypes.string,
    pop: PropTypes.string,
    icon: PropTypes.string,
    hour: PropTypes.string
  })
};
