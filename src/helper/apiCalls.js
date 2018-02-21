/*eslint-disable camelcase, max-len*/
import { nytKey, wuKey } from './.apiKeys';

export const getNews = () => {
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${nytKey}`
  )
    .then(res => res.json())
    .then(res => cleanNewsData(res.results))
    .catch(error => {
      throw new Error(error);
    });
};

export const getWeather = () => {
  return fetch(
    `http://api.wunderground.com/api/${wuKey}/conditions/hourly/q/CO/Denver.json`
  )
    .then(res => res.json())
    .then(res => cleanWeatherData(res))
    .catch(error => {
      throw new Error(error);
    });
};

export const cleanNewsData = results => {
  return results.map((article, index) => {
    const thumbnail = article.multimedia[0]
      ? article.multimedia[3].url
      : 'https://avatars1.githubusercontent.com/u/221409?s=200&v=4';
    const articleObj = {
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      thumbnail: thumbnail,
      url: article.url
    };
    return articleObj;
  });
};

export const cleanWeatherData = ({ current_observation, hourly_forecast }) => {
  const {
    observation_location,
    observation_time,
    temp_f,
    weather,
    icon_url
  } = current_observation;
  const currentObservation = {
    location: observation_location.city,
    currentTime: observation_time,
    conditions: weather,
    icon: icon_url,
    temp: temp_f
  };
  const hourlyForecast = hourly_forecast.map(hour => ({
    temp: hour.temp.english,
    pop: hour.pop,
    icon: hour.icon_url,
    hour: hour.FCTTIME.civil
  }));

  return {currentObservation, hourlyForecast};
};
