import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './WeatherNav.css';

export const WeatherNav = ({ selectCategory, section }) => {
  return (
    <div className="weather-nav nav">
      <NavLink
        to={`/${section}/hourly`}
        name="hourly"
        onClick={selectCategory}
        className="nav-link">
        Hourly
      </NavLink>
      <NavLink
        to={`/${section}/daily`}
        name="forecast10day"
        onClick={selectCategory}
        className="nav-link">
        Daily
      </NavLink>
    </div>
  );
};

WeatherNav.propTypes = {
  selectCategory: PropTypes.func,
  section: PropTypes.string
};
