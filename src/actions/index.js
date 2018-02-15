export const populateNews = storiesArray => ({
  type: 'POPULATE_NEWS',
  storiesArray
});

export const populateWeather = weatherArray => ({
  type: 'POPULATE_WEATHER',
  weatherArray
});