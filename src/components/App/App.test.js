import React from 'react';
import { App } from './App';
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
});
