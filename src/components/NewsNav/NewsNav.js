import React from 'react';
import PropTypes from 'prop-types';

export const NewsNav = ({ selectSection }) => {
  const newsSections = {
    home: 'Home',
    world: 'World',
    national: 'National',
    nyregion: 'NY Region',
    politics: 'Politics',
    technology: 'Technology',
    science: 'Science',
    business: 'Business',
    opinion: 'Opinion',
    tmagazine: 'NYT Magazine'
  };

  const sectionButtons = Object.keys(newsSections).map(key => (
    <button name={key} onClick={selectSection}>
      {newsSections[key]}
    </button>
  ));
  
  return <div>{sectionButtons}</div>
};

NewsNav.propTypes = {
  selectSection: PropTypes.func
};
