import React, { useState } from 'react';

export const FAVOURITES = 'favourites';
export const WATCHLIST = 'watchlist';

let favouriteMovies = [];
let watchListMovies = [];

const getItem = (key) => {
  if (key === FAVOURITES) {
    return JSON.parse(window.localStorage.getItem(FAVOURITES));
  }
  return JSON.parse(window.localStorage.getItem(WATCHLIST));
};

const setItem = (key) => {
  if (key === FAVOURITES) {
    return window.localStorage.setItem(FAVOURITES, JSON.stringify(favouriteMovies));
  }
  return window.localStorage.setItem(WATCHLIST, JSON.stringify(watchListMovies));
};


export const StoreContext = React.createContext({
  favourites: [],
  watchList: [],
  setFavourites: () => { },
  updateFavourites: () => { },
  setWatchList: () => { },
  updateWatchList: () => { },
});


export default function Provider(props) {

  const getStore = (storeKey) => {
    if (storeKey === FAVOURITES) {
      if (window.localStorage.getItem(storeKey)) {
        favouriteMovies = getItem(storeKey);
      } else {
        setItem(FAVOURITES);
      }
      return favouriteMovies;
    }

    if (storeKey === WATCHLIST) {
      if (window.localStorage.getItem(storeKey)) {
        watchListMovies = getItem(WATCHLIST);
      } else {
        setItem(WATCHLIST);
      }
      return watchListMovies;
    }
  };

  const [favourites, setFavourites] = useState(getStore(FAVOURITES));
  const [watchList, setWatchList] = useState(getStore(WATCHLIST));

  const setStore = (data, key) => {
    if (key === FAVOURITES) {
      favouriteMovies = [...favourites, data];
      setItem(FAVOURITES);
      setFavourites(favouriteMovies);
    }

    if (key === WATCHLIST) {
      watchListMovies = [...watchList, data];
      setItem(WATCHLIST);
      setWatchList(watchListMovies);
    }
  };

  const updateStore = (movieId, key) => {
    if (key === FAVOURITES) {
      const updatedMovies = favourites.filter((s) => movieId !== s.id);
      window.localStorage.setItem(FAVOURITES, JSON.stringify(updatedMovies));
      setFavourites(updatedMovies);
    }

    if (key === WATCHLIST) {
      const updatedWatchList = watchList.filter((s) => movieId !== s.id);
      window.localStorage.setItem(WATCHLIST, JSON.stringify(updatedWatchList));
      setWatchList(updatedWatchList);
    }
  };

  return (
    <StoreContext.Provider value={
      {
        favourites,
        watchList,
        setFavourites: (data, key) => {
          setStore(data, key);
        },
        updateFavourites: (data, key) => {
          updateStore(data, key);
        },
        setWatchList: (data, key) => {
          setStore(data, key);
        },
        updateWatchList: (data, key) => {
          updateStore(data, key);
        },
      }
    }>
      {props.children}
    </StoreContext.Provider>
  );
}
