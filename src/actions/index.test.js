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
    const weatherObj = { currentObservation: {}, hourlyForecast: [{}, {}, {}] };
    const expectedAction = {
      type: 'POPULATE_WEATHER',
      weatherObj
    };

    expect(actions.populateWeather(weatherObj)).toEqual(expectedAction);
  });
});
