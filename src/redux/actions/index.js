import API from "../../services";
const api_key = '0ab4bde5524344d9be7cd3fa11cd3b7d'

export const GET_GAMES = "GET_GAMES";
export const GET_GAMES_SUCCESS = "GET_GAMES_SUCCESS";
export const GET_GAMES_FAILURE = "GET_GAMES_FAILURE";

export const getGames = () => ({
  type: GET_GAMES
});

export const getGamesSuccess = (game) => {
  return {
    type: GET_GAMES_SUCCESS,
    payload: game
  };
};

export const getGamesFailure = (error) => {
  return {
    type: GET_GAMES_FAILURE,
    error
  };
};

// Async actions
export const getGameAsync = () => {
  return async (dispatch) => {
    dispatch(getGames());

    try {
      const res = await API.get(`/games?key=${api_key}&page=1`);

      dispatch(getGamesSuccess(res.data.results));
    } catch (error) {
      dispatch(getGamesFailure(error));
    }
  };
};
