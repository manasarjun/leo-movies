import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const result = await axios('https://api.themoviedb.org/3/trending/all/day?api_key=b92e553f9d2e936c9270209ffbc64c82');
      setTrending(result.data.results);
    }
    fetchTrending();
  }, []);

  return (
    <ul>
      {trending
        .filter((movie) => movie.title)
        .map((t) => <li key={t.title}>{t.title}</li>)}
    </ul>
  );
}
