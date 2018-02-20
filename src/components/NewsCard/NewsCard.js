import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({ title, abstract, byline, url, thumbnail }) => {
  return (
    <div>
      <a href={url}>
        <img src={thumbnail}/>
        <h3>{title}</h3>
      </a>
      <h5>{byline}</h5>
      <p>{abstract}</p>

    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string,
  abstract: PropTypes.string,
  byline: PropTypes.string,
  url: PropTypes.string
  // thumbnail: PropTypes.string
};

export default NewsCard;
