export const populateNews = storiesArray => ({
  type: 'POPULATE_NEWS',
  storiesArray
});

export const populateWeather = weatherObj => ({
  type: 'POPULATE_WEATHER',
  weatherObj
});