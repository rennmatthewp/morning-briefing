import React, { Component } from 'react';
import { arrayOf, object, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { NewsNav } from '../../components/NewsNav/NewsNav';
import { NewsSection } from '../../components/NewsSection/NewsSection';
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

  getNews = async (section = 'home') => {
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
    if (this.state.errorStatus) {
      return <div className="news-container">Error Fetching News</div>;
    }

    return (
      <div className="news-container">
        <NewsNav
          selectSection={this.selectSection}
          category={this.props.category}
        />
        <NewsSection newsStories={this.props.newsStories} />
      </div>
    );
  }
}

NewsContainer.propTypes = {
  newsStories: arrayOf(object),
  populateNews: func,
  category: string
};

export const mapStateToProps = ({ newsStories }) => ({ newsStories });

export const mapDispatchToProps = dispatch => ({
  populateNews: stories => dispatch(populateNews(stories))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);