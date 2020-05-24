import React, { useState } from 'react';


const FAVOURITES = 'favourites';
const WATCHLIST = 'watchlist';
let favouriteMovies = [];

export const StoreContext = React.createContext({
  favourites: [],
  setfavourites: () => { },
  updateFavourites: () => { },
});


export default function Provider(props) {


  const getStore = () => {
    if (window.localStorage.getItem(FAVOURITES)) {
      favouriteMovies = JSON.parse(window.localStorage.getItem(FAVOURITES));
    }
    return favouriteMovies;
  };

  const [favourites, setfavourites] = useState(getStore());

  const setStore = (favo) => {
    if (window.localStorage.getItem(FAVOURITES)) {
      favouriteMovies = [...favourites, favo];
      window.localStorage.setItem(FAVOURITES, JSON.stringify(favouriteMovies));
    } else {
      favouriteMovies.push(favo);
      window.localStorage.setItem(FAVOURITES, JSON.stringify(favouriteMovies));
    }
    setfavourites(favouriteMovies);
    return favouriteMovies;
  };

  const updateStore = (movieId) => {
    if (window.localStorage.getItem(FAVOURITES)) {
      const updatedMovies = favourites.filter((s) => movieId !== s.id);
      window.localStorage.setItem(FAVOURITES, JSON.stringify(updatedMovies));
      setfavourites(updatedMovies);
    }
  };

  return (
    <StoreContext.Provider value={
      {
        favourites,
        setfavourites: (returnVal) => {
          setStore(returnVal);
        },
        updateFavourites: (returnVal) => {
          updateStore(returnVal);
        },
      }
    }>
      {props.children}
    </StoreContext.Provider>


  )
}
