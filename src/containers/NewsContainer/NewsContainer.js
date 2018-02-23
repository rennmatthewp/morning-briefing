import React, { Component } from 'react';
import {arrayOf, object} from 'prop-types';
import { connect } from 'react-redux';
import NewsCard from '../../components/NewsCard/NewsCard';

export class NewsContainer extends Component {
  render() {
    const articles = this.props.articles.map(article => (
      <NewsCard key={article.title} {...article} />
    ));
    return <div>{articles}</div>;
  }
}

NewsContainer.propTypes = {
  articles: arrayOf(object)
};

export const mapStateToProps = state => ({
  articles: state.newsStories
});

export default connect(mapStateToProps, null)(NewsContainer);
