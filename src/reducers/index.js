import { combineReducers } from 'redux';
import AllLeaguesReducer from './AllLeaguesReducer';

const rootReducer = combineReducers({
  allLeaguesReducer: AllLeaguesReducer
});

export default rootReducer;