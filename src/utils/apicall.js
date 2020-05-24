import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'b92e553f9d2e936c9270209ffbc64c82';

export default function apiCall(input) {
  if (input) {
    return axios(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`,
    );
  }

  return axios(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
}
