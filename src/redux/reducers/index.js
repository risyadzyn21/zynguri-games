import gameReducer from './gamesReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  gameReducer
});

export default rootReducer;
