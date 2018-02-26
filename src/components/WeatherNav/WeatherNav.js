import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './WeatherNav.css';

export const WeatherNav = ({ selectCategory }) => {
  return (
    <div>
      <NavLink
        to="/hourly"
        name="hourly"
        onClick={selectCategory}
        activeClassName="selected">
        Hourly
      </NavLink>
      <NavLink
        to="/daily"
        name="daily"
        onClick={selectCategory}
        activeClassName="selected">
        Daily
      </NavLink>
    </div>
  );
};

WeatherNav.propTypes = {
  selectCategory: PropTypes.func
};
