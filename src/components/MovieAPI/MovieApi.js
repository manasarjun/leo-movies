import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Movie from '../Movie/Movie';

let movies = [];

export default function MovieApi(props) {
  // const [movies, setMovies] = useState(null);
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
  // {movies.map((movie) => movie.name).filter((movie) => movie)}
  console.log(movies);

  return movies.map((movie) => <Movie movie={movie} />);
}
