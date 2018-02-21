export const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case 'POPULATE_WEATHER':
      return {...state, ...action.weatherObj};
    default:
      return state;
  }
};
