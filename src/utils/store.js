
let favouriteMovies = [];
const watchListMovies = [];

export function setStore(favourites) {
  if (window.localStorage.getItem('favourites')) {
    favouriteMovies = [...JSON.parse(window.localStorage.getItem('favourites')), favourites];
    window.localStorage.setItem('favourites', JSON.stringify(favouriteMovies));
  } else {
    favouriteMovies.push(favourites);
    window.localStorage.setItem('favourites', JSON.stringify(favouriteMovies));
  }
  return favouriteMovies;
}

export function getStore(favourites) {
  let getFavourites = [];
  if (favourites === 'favourites' && window.localStorage.getItem('favourites')) {
    getFavourites = JSON.parse(window.localStorage.getItem(favourites));
  }
  return getFavourites;
}

export function removeStore(movieId) {
  if (window.localStorage.getItem('favourites')) {
    favouriteMovies = JSON.parse(window.localStorage.getItem('favourites'));
    const updatedMovies = favouriteMovies.filter((s) => movieId !== s.id);
    window.localStorage.setItem('favourites', JSON.stringify(updatedMovies));
  }
};
