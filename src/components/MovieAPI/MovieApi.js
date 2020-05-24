import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import Movie from '../Movie/Movie';
import apiCall from '../../utils/apicall';

import { StoreContext } from '../../provider/Provider';

//let movies = [];

export default function MovieApi(props) {
  const { favourites } = useContext(StoreContext);
  const [movies, setMovies] = useState([]);
  const { searchKeyword } = props;
  useEffect(() => {
    if (searchKeyword.length >= 1) {
      async function fetchMovies(searchKey) {
        const result = await axios(
          `https://api.themoviedb.org/3/search/movie?api_key=b92e553f9d2e936c9270209ffbc64c82&language=en-US&query=${
          searchKey}&page=1&include_adult=false`,
        );
        setMovies(result.data.results);
      }
      fetchMovies(searchKeyword);
    }
  }, [searchKeyword]);

  return (
    movies.filter((movie) => movie.poster_path)
      .map((mov) => {
        const col = favourites.filter((s) => s.id === mov.id);
        let isFavourite = false;
        if (col.length === 1 && col.length < 2) {
          isFavourite = true;
        }
        return (<Movie movie={mov} isFavourite={isFavourite} />);
      })
  );
}
