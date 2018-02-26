import React from 'react';
import { App, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let mockPopulateNews;
  let mockPopulateWeather;
  let renderedApp;

  beforeEach(() => {
    mockPopulateNews = jest.fn();
    mockPopulateWeather = jest.fn();
    return (renderedApp = shallow(
      <App
        populateNews={mockPopulateNews}
        populateWeather={mockPopulateWeather}
      />
    ));
  });

  it('should match the snapshot', () => {
    expect(renderedApp).toMatchSnapshot();
  });

  xit('should call getNews in CDM', () => {
    renderedApp.getNews = jest.fn();
    renderedApp.instance();
    expect(renderedApp.getNews).toHaveBeenCalled();
  });

  xit('should call getWeather in CDM', () => {});

  // it('should call the dispatch function when calling a fn from MDTP', () => {
  //   const mockDispatch = jest.fn();
  //   const mapped = mapDispatchToProps(mockDispatch);

  //   mapped.populateNews();
  //   expect(mockDispatch).toHaveBeenCalled();
  // });
});
