import React from 'react';
import PropTypes from 'prop-types';

export const NewsCard = ({
  title,
  abstract,
  byline,
  url,
  thumbnail,
  caption
}) => {
  return (
    <div>
      <a href={url}>
        <img src={thumbnail} alt={caption} />
        <h3>{title}</h3>
      </a>
      <button>O</button>
      <h5>{byline}</h5>
      <p>{abstract}</p>
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
