fetch(
  `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${nytKey}`
)
  .then(res => res.json())
  .then(res => this.props.populateNews(res.results));
fetch(
  `http://api.wunderground.com/api/${wuKey}/hourly/q/CO/Denver.json`
)
  .then(res => res.json())
  .then(res => this.props.populateWeather(res.hourly_forecast));