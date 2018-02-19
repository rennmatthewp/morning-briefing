import { nytKey, wuKey } from './.apiKeys';

export const getNews = () => {
  return fetch(
    `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${nytKey}`
  )
    .then(res => res.json())
    .then(res => res.results)
    .catch(error => {
      throw new Error(error);
    });
};

export const getWeather = () => {
  return fetch(
    `http://api.wunderground.com/api/${wuKey}/conditions/hourly/q/CO/Denver.json`
  )
    .then(res => res.json())
    .then(res => console.log(res)
    )
    .catch(error => {
      throw new Error(error);
    });
};

export const cleanWeatherData = (response) => {
  return {
    
  }
}
