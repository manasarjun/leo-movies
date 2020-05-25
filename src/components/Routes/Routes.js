import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import Login from '../Login/Login';
import Register from '../Register/Register';
import DisplayFavourite from '../Favourite/DisplayFavourite';
import DisplayWatchList from '../WatchList/DisplayWatchList';
import Home from '../Home/Home';
import MovieFilter from '../MovieFilter/MovieFilter';

export default function Routes(props) {
  return (<Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/favourites">
      <DisplayFavourite />
    </Route>
    <Route path="/watchlist">
      <DisplayWatchList />
    </Route>
    <Route path="/search">
      <MovieFilter searchKeyword={props.searchKeyword} />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </Switch>);
}
