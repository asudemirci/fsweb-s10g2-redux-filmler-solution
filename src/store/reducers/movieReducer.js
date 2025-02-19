import { DELETE_MOVIE } from '../actions/movieActions.js';
import { ADD_MOVIE } from '../actions/movieActions.js';
import movies from '../../data.js';

const initialState = {
  movies: [...movies],
  appTitle: 'IMDB Movie Database',
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MOVIE:
      console.log("Silinecek film ID:", action.payload);
      return {
        ...state,
        movies: state.movies.filter((item) => action.payload !== item.id),
      };
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    default:
      return state;
  }
};

export default movieReducer;
