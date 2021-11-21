import * as actions from '../actions'

const initialState = {
  genresFiltered: 'day',
  games: [],
  isLoading: false,
  hasErrors: false
};

function gamesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_GAMES:
      return {
        ...state,
        isLoading: true
      };
    case actions.GET_GAMES_SUCCESS:
      return {
        ...state,
        games: action.payload,
        isLoading: false

      };
    case actions.GET_GAMES_FAILURE:
      return {
        ...state,
        isLoading: false,
        hasErrors: action.error
      };

    case 'UPDATE_GENRES_FILTERED':
      return {
        ...state,
        genresFiltered: action.payload
      }
    default:
      return state;
  }
}
export default gamesReducer
