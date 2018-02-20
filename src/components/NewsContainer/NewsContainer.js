import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsCard from '../NewsCard/NewsCard';
import { connect } from 'react-redux';

export class NewsContainer extends Component {
  render() {
    const articles = this.props.articles.map(article => (
      <NewsCard key={article.title} {...article} />
    ));
    return <div>{articles}</div>;
  }
}

NewsContainer.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
};

export const mapStateToProps = state => ({
  articles: state.newsReducer
});

export default connect(mapStateToProps, null)(NewsContainer);
