import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent } from '@material-ui/core';

import Movie from '../Movie/Movie';
import apiCall from '../../utils/apicall';
import { StoreContext } from '../../provider/Provider';
import useStyles from '../../hooks/useStyles';

export default function MovieFilter(props) {
  const { favourites, watchList } = useContext(StoreContext);
  const [movies, setMovies] = useState([]);
  const { searchKeyword } = props;
  const classes = useStyles();

  useEffect(() => {
    if (searchKeyword.length >= 1) {
      // eslint-disable-next-line no-inner-declarations
      async function fetchMovies(searchKey) {
        const result = await apiCall(searchKey);
        setMovies(result.data.results);
      }

      fetchMovies(searchKeyword);
    }
  }, [searchKeyword]);

  const renderMovies = () => {
    if (searchKeyword.length === 0) {
      return (
        <Card className={classes.root}>
          <CardContent>Search Your Movies !</CardContent >
        </Card >
      );
    }

    return movies.filter((movie) => movie.poster_path && movie.title)
      .map((mov) => {
        let isFavourite = false;
        let isWatchList = false;

        const checkFavourite = favourites.filter((s) => s.id === mov.id);
        const checkWatchList = watchList.filter((s) => s.id === mov.id);

        if (checkFavourite.length === 1) {
          isFavourite = true;
        }
        if (checkWatchList.length === 1) {
          isWatchList = true;
        }
        return (
          <Movie
            key={mov.id}
            movie={mov}
            isFavourite={isFavourite}
            isWatchList={isWatchList} />);
      });
  };
  return renderMovies();
}

MovieFilter.propTypes = {
  searchKeyword: PropTypes.string,
};
