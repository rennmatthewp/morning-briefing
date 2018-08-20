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
    </div>
  );
};

WeatherNav.propTypes = {
  selectCategory: PropTypes.func,
  section: PropTypes.string
};
