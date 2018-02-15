import { combineReducers } from 'redux';
import { newsReducer } from './newsReducer';
import { weatherReducer } from './weatherReducer';

export const rootReducer = combineReducers({
  newsReducer,
  weatherReducer
});