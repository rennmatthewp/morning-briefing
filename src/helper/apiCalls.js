/*eslint-disable camelcase, max-len*/
import { nytKey, wuKey } from './.apiKeys';

export const getNewsData = async () => {
  try {
    const response = await fetch(
      `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${nytKey}`
    );
    if (response.status < 300) {
      return await response.json();
    } else {
      throw new Error('error in getNews');
    }
  } catch (error) {
    throw error;
  }
};

export const getWeatherData = async () => {
  try {
    const response = await fetch(
      `http://api.wunderground.com/api/${wuKey}/conditions/hourly/q/CO/Denver.json`
    );
    if (response.status < 300) {
      return await response.json();
    } else {
      throw new Error('error in getWeather');
    }
  } catch (error) {
    throw error;
  }
};

export const cleanNewsData = results => {
  return results.map(article => {
    let thumbnail;
    if (article.multimedia.length) {
      thumbnail = {
        url: article.multimedia[3].url,
        caption: article.multimedia[3].caption
      };
    } else {
      thumbnail = {
        url: 'https://avatars1.githubusercontent.com/u/221409?s=200&v=4',
        caption: 'New York Times'
      };
    }

    const articleObj = {
      title: article.title,
      abstract: article.abstract,
      byline: article.byline,
      thumbnail: thumbnail.url,
      caption: thumbnail.caption,
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

  return { currentObservation, hourlyForecast };
};
