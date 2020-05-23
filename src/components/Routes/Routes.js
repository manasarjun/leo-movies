import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import MovieApi from '../MovieAPI/MovieApi';
import Login from '../Login/Login';
import Register from '../Register/Register';
import DisplayFavourite from '../Favourite/DisplayFavourite';

export default function Routes(props) {
  return (<Switch>
    <Route path="/" exact></Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/favourites">
      <DisplayFavourite />
    </Route>
    <Route path="/watchlist"></Route>
    <Route path="/search">
      <MovieApi searchKeyword={props.searchKeyword} />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </Switch>);
}
