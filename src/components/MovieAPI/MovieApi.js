import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from '../Movie/Movie';
import apiCall from '../../utils/apicall';
import { setStore, getStore } from '../../utils/store';


let movies = [];

export default function MovieApi(props) {
  //const [movies, setMovies] = useState(null);
  const { searchKeyword } = props;
  useEffect(() => {
    async function fetchMovies(searchKey) {
      const result = await axios(
        //  "https://api.themoviedb.org/3/trending/all/day?api_key=b92e553f9d2e936c9270209ffbc64c82"
        `https://api.themoviedb.org/3/search/movie?api_key=b92e553f9d2e936c9270209ffbc64c82&language=en-US&query=${
        searchKey
        }&page=1&include_adult=false`,
      );
      movies = result.data.results;
    }

    fetchMovies(searchKeyword);
  });
  const storedFavourites = getStore('favourites');

  return (
    movies.filter((movie) => movie.poster_path)
      .map((mov) => {
        const col = storedFavourites.filter((s) => s.id === mov.id);
        let isFavourite = false;
        if (col.length === 1) {
          isFavourite = true;
        }
        return (<Movie movie={mov} isFavourite={isFavourite} />);
      })
  );

};
