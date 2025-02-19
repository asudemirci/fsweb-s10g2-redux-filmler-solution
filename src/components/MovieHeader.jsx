import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorites } from '../store/actions/favoritesActions';

const MovieHeader = (props) => {
  const dispatch = useDispatch();
  const appTitle = useSelector((state) => state.movies.appTitle);
const displayFavorites = useSelector((state) => state.favorites.displayFavorites);
 
  return (
    <div className="flex justify-between items-center shadow rounded-md bg-white p-2 pl-3 my-3">
      <h2 className="text-zinc-600">{appTitle}</h2>
      <div className="flex items-center gap-2">
        <button
          className="myButton bg-blue-600 hover:bg-blue-500"
          onClick={() => dispatch(toggleFavorites())}
        >
          Favorileri {displayFavorites ? 'gizle' : 'göster'}
        </button>
        <Link to="/movies" className="myButton bg-blue-600 hover:bg-blue-500">
          Tüm filmler
        </Link>
        <Link
          to="/movies/add"
          className="myButton bg-green-700 hover:bg-green-600"
        >
          <i className="material-icons text-sm">&#xE147;</i>
          <span>Yeni film ekle</span>
        </Link>
      </div>
    </div>
  );
};

export default MovieHeader;
