import axios from 'axios';


let result = [];

export default async function apiCall({ searchKeyword }) {
  result = await axios(
    //`https://api.themoviedb.org/3/search/movie?api_key=b92e553f9d2e936c9270209ffbc64c82&language=en-US&query=${searchKeyword}&page=1&include_adult=false`,
  );


  return result.data.results;
}
