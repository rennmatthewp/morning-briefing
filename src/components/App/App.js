import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { populateNews, populateWeather } from '../../actions';
import { getNews, getWeather } from '../../helper/apiCalls';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      errorStatus: null
    };
  }

  componentDidMount() {
    getNews()
      .then(this.props.populateNews)
      .catch(error => {
        this.setState({ errorStatus: error });
      });
    getWeather()
      .then(this.props.populateWeather)
      .catch(error => {
        this.setState({ errorStatus: error });
      });
  }

  render() {
    return <div className="App">Hello, World</div>;
  }
}

export const mapDispatchToProps = dispatch => ({
  populateNews: storiesArray => dispatch(populateNews(storiesArray)),
  populateWeather: weatherArray => dispatch(populateWeather(weatherArray))
});

export default connect(null, mapDispatchToProps)(App);
