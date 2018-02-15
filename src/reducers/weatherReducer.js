export const weatherReducer = (state = [], action) => {
  switch (action.type) {
    case 'POPULATE_WEATHER':
      return action.weatherArray;
    default:
      return state;
  }
};
