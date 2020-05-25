import React, { useState, useEffect, useContext } from 'react';

import Movie from '../Movie/Movie';
import apiCall from '../../utils/apicall';
import { StoreContext } from '../../provider/Provider';

export default function MovieApi(props) {
  const { favourites, watchList } = useContext(StoreContext);
  const [movies, setMovies] = useState([]);
  const { searchKeyword } = props;

  useEffect(() => {
    if (searchKeyword.length >= 1) {
      async function fetchMovies(searchKey) {
        const result = await apiCall(searchKey);
        setMovies(result.data.results);
      }

      fetchMovies(searchKeyword);
    }
  }, [searchKeyword]);

  return (
    movies.filter((movie) => movie.poster_path && movie.title)
      .map((mov) => {
        let isFavourite = false;
        let isWatchList = false;

        const checkFavourite = favourites.filter((s) => s.id === mov.id);
        const checkWatchList = watchList.filter((s) => s.id === mov.id);

        if (checkFavourite.length === 1) {
          isFavourite = true;
        }
        if (checkWatchList.length === 1) {
          isWatchList = true;
        }
        return (
          <Movie
            key={mov.id}
            movie={mov}
            isFavourite={isFavourite}
            isWatchList={isWatchList} />);
      })
  );
}
