import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MovieApi() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const result = await axios(
        "https://api.themoviedb.org/3/trending/all/day?api_key=b92e553f9d2e936c9270209ffbc64c82"
      );
      setMovies(result.data.results);
    }
    fetchMovies();
  }, []);
  //{movies.map((movie) => movie.name).filter((movie) => movie)}

  console.log(movies);

  return <ul></ul>;
}
