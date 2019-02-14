import { combineReducers } from 'redux';
import reposReducer from './reposReducer';
import topicsReducer from './topicsReducer';

const rootReducer = combineReducers({
  repos: reposReducer,
  topics: topicsReducer,
});

export default rootReducer;
