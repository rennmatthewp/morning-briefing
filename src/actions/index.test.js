import * as actions from './index';

describe('actions', () => {
  it('should create an action to add news stories', () => {
    const storiesArray = [{}, {}, {}];
    const expectedAction = {
      type: 'POPULATE_NEWS',
      storiesArray
    };

    expect(actions.populateNews(storiesArray)).toEqual(expectedAction);
  });

  it('should create an action to add weather data', () => {
    const weatherArray = [{}, {}, {}];
    const expectedAction = {
      type: 'POPULATE_WEATHER',
      weatherArray
    };

    expect(actions.populateWeather(weatherArray)).toEqual(expectedAction);
  });
});
