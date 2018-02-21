import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { WeatherCard } from '../../components/WeatherCard/WeatherCard';

export const WeatherContainer = ({ currentObservation, hourlyForecast }) => {
  const hourlyForecastCards = hourlyForecast
    ? hourlyForecast.map((hour, index) => (
      <WeatherCard hourlyForecast={hour} key={index} />
    ))
    : 'Loading';

  const currentObservationCard = (
    <WeatherCard currentObservation={currentObservation} />
  );

  return (
    <div>
      {currentObservationCard}
      {hourlyForecastCards}
    </div>
  );
};

WeatherContainer.propTypes = {
  currentObservation: PropTypes.object,
  hourlyForecast: PropTypes.arrayOf(PropTypes.object)
};

export const mapStateToProps = state => ({
  currentObservation: state.weather.currentObservation,
  hourlyForecast: state.weather.hourlyForecast
});

export default connect(mapStateToProps, null)(WeatherContainer);
