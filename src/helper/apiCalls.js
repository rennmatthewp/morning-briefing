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
  return results.map(article => ({
    title: article.title,
    byline: article.byline,
    abstract: article.abstract,
    thumbnail: article.multimedia[0].url,
    url: article.url
  }));
};

export const cleanWeatherData = response => {
  const {
    current_observation: {
      display_location,
      observation_time,
      temp_f,
      weather,
      icon_url
    },
    hourly_forecast
  } = response;
  const currentObservation = {
    location: display_location.city,
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

  return [currentObservation, ...hourlyForecast];
};
