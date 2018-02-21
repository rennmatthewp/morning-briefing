import React from 'react';

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
      <div>
        <h3>{location}</h3>
        <p>{currentTime}</p>
        <h4>{temp}</h4>
        <h4>{conditions}</h4>
        <img src={icon} alt="weather icon" />
      </div>
    );
  }

  if (hourlyForecast) {
    const { temp, pop, icon, hour } = hourlyForecast;
    return (
      <div>
        <h3>{temp}</h3>
        <h5>{pop}%</h5>
        <img src={icon} alt="weather icon" />
        <h3>{hour}</h3>
      </div>
    );
  }

  return <div>'Loading'</div>
};
