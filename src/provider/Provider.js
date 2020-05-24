import React, { useState } from 'react';
import { getStore, removeStore } from '../utils/store';


const FAVOURITES = 'favourites';
const WATCHLIST = 'watchlist';
let favouriteMovies = [];

export const StoreContext = React.createContext({
  favourites: [],
  storeFavourites: () => { },
});


export default function Provider(props) {

  const [favourites, setfavourites] = useState(getStore(FAVOURITES));

  const setStore = (favo) => {
    if (window.localStorage.getItem(FAVOURITES)) {
      favouriteMovies = [...JSON.parse(window.localStorage.getItem(FAVOURITES)), favo];
      window.localStorage.setItem(FAVOURITES, JSON.stringify(favouriteMovies));
    } else {
      favouriteMovies.push(favo);
      window.localStorage.setItem(FAVOURITES, JSON.stringify(favouriteMovies));
    }
    setfavourites(favouriteMovies);
    return favouriteMovies;
  };

  return (
    <StoreContext.Provider value={
      {
        favourites,
        setfavourites: (returnVal) => {
          setStore(returnVal);
        },
      }
    }>
      {props.children}
    </StoreContext.Provider>


  )
}
