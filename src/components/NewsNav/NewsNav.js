import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { newsSections } from '../../helper/apiCalls';
import './NewsNav.css';

export const NewsNav = ({ selectSection }) => {
  const sectionButtons = Object.keys(newsSections).map(section => {
    return (
      <NavLink
        to={`/${section}`}
        name={section}
        key={section}
        onClick={selectSection}
        className="nav-link"
        activeClassName="nav-link selected">
        {newsSections[section]}
      </NavLink>
    );
  });

  return <div className="nav news-nav">{sectionButtons}</div>;
};

NewsNav.propTypes = {
  selectSection: PropTypes.func
};
