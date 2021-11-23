// import * as actions from '../actions'

// const initialState = {
//   genresFiltered: 'day',
//   genres: [],
//   isLoading: false,
//   hasErrors: false
// };

// function genresReducer(state = initialState, action) {
//   switch (action.type) {
//     case actions.GET_GENRES:
//       return {
//         ...state,
//         isLoading: true
//       };
//     case actions.GET_GENRES_SUCCESS:
//       return {
//         ...state,
//         genres: action.payload,
//         isLoading: false

//       };
//     case actions.GET_GENRES_FAILURE:
//       return {
//         ...state,
//         isLoading: false,
//         hasErrors: action.error
//       };

//     case 'UPDATE_GENRES_FILTERED':
//       return {
//         ...state,
//         genresFiltered: action.payload
//       }
//     default:
//       return state;
//   }
// }
// export default genresReducer
