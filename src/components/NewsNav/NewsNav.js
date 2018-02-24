import React from 'react';
import PropTypes from 'prop-types';

export const NewsNav = ({ selectSection }) => {
  return (
    <div>
      <button name="home" onClick={selectSection}>
        Top Stories
      </button>
      <button name="technology" onClick={selectSection}>
        Technology
      </button>
      <button name="fashion" onClick={selectSection}>
        Fashion
      </button>
      <button name="business" onClick={selectSection}>
        Business
      </button>
    </div>
  );
};

NewsNav.propTypes = {
  selectSection: PropTypes.func
};
