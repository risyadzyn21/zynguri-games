import gamesReducer from './gamesReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  gamesReducer,
});

export default rootReducer;
