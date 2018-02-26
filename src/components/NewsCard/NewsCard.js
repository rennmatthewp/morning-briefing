import React from 'react';
import PropTypes from 'prop-types';
import './NewsCard.css';

export const NewsCard = ({
  title,
  abstract,
  byline,
  url,
  thumbnail,
  caption
}) => {
  return (
    <div className="news-card">
      <div className="news-card-image">
        <a href={url} className="thumbnail">
          <img src={thumbnail} alt={caption} />
        </a>
      </div>
      <div className="news-card-text">
        <a href={url}>
          <h3>{title}</h3>
        </a>
        <h5>{byline}</h5>
        <p>{abstract}</p>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  title: PropTypes.string,
  abstract: PropTypes.string,
  byline: PropTypes.string,
  url: PropTypes.string,
  thumbnail: PropTypes.string,
  caption: PropTypes.string
};

export default NewsCard;
