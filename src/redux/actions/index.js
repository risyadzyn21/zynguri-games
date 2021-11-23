import API from "../../services";
const api_key = '0ab4bde5524344d9be7cd3fa11cd3b7d'

export const GET_GAMES = "GET_GAMES";
export const GET_GAMES_SUCCESS = "GET_GAMES_SUCCESS";
export const GET_GAMES_FAILURE = "GET_GAMES_FAILURE";
export const GET_GENRES = "GET_GENRES";
export const GET_GENRES_SUCCESS = "GET_GENRES_SUCCESS";
export const GET_GENRES_FAILURE = "GET_GENRES_FAILURE";

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

// ==================================================================================

export const getGenres = () => ({
  type: GET_GENRES
});

export const getGenresSuccess = (genre) => {
  return {
    type: GET_GENRES_SUCCESS,
    payload: genre
  };
};

export const getGenresFailure = (error) => {
  return {
    type: GET_GENRES_SUCCESS,
    error
  };
};

// Async actions
export const getGenresAsync = () => {
  return async (dispatch) => {
    dispatch(getGenres());

    try {
      const res = await API.get(`/genres?key=${api_key}`);

      dispatch(getGenresSuccess(res.data.results));
    } catch (error) {
      dispatch(getGenresFailure(error));
    }
  };
};
