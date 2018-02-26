import React from 'react';
import PropTypes from 'prop-types';
import { NewsCard } from '../NewsCard/NewsCard';

export const NewsSection = ({ newsStories }) => {
  const articles = newsStories
    ? newsStories.map(article => <NewsCard key={article.title} {...article} />)
    : 'Loading...';

  return <div>{articles}</div>;
};

NewsSection.propTypes = {
  newsStories: PropTypes.arrayOf(PropTypes.object)
};
