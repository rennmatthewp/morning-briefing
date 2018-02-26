import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './WeatherNav.css';

export const WeatherNav = ({ selectCategory }) => {
  return (
    <div className="weather-nav nav">
      <NavLink
        to="/hourly"
        name="hourly"
        onClick={selectCategory}
        className="nav-link"
        activeClassName="nav-link selected">
        Hourly
      </NavLink>
      <NavLink
        to="/daily"
        name="daily"
        onClick={selectCategory}
        className="nav-link"
        activeClassName="nav-link selected">
        Daily
      </NavLink>
    </div>
  );
};

WeatherNav.propTypes = {
  selectCategory: PropTypes.func
};
