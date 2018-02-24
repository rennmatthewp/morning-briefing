import React, { Component } from 'react';
import { arrayOf, object, func } from 'prop-types';
import { connect } from 'react-redux';
import { NewsNav } from '../../components/NewsNav/NewsNav';
import NewsCard from '../../components/NewsCard/NewsCard';
import { getNewsData, cleanNewsData } from '../../helper/apiCalls';
import { populateNews } from '../../actions';
import './NewsContainer.css';

export class NewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      errorStatus: null
    };
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = async (section) => {
    try {
      const newsResponse = await getNewsData(section);
      const cleanedNewsData = await cleanNewsData(newsResponse.results);
      this.props.populateNews(cleanedNewsData);
    } catch (error) {
      this.setState({ errorStatus: error });
    }
  };

  selectSection = event => {
    const { name } = event.target;
    this.getNews(name);
  };

  render() {
    const articles = this.props.articles.map(article => (
      <NewsCard key={article.title} {...article} />
    ));

    if (this.state.errorStatus) {
      return <div>Error Fetching News</div>;
    }

    return (
      <div className="news-container">
        <NewsNav selectSection={this.selectSection} />
        {articles}
      </div>
    );
  }
}

NewsContainer.propTypes = {
  articles: arrayOf(object),
  populateNews: func
};

export const mapStateToProps = state => ({
  articles: state.newsStories
});

export const mapDispatchToProps = dispatch => ({
  populateNews: stories => dispatch(populateNews(stories))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
