import gamesReducer from './gamesReducer'
import genresReducer from './genresReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  gamesReducer,
  // genresReducer
});

export default rootReducer;
