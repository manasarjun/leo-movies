import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { StoreContext } from '../../provider/Provider';
import useStyles from '../../hooks/useStyles';
import Movie from '../Movie/Movie';

const DisplayWatchList = () => {
  const classes = useStyles();

  const { watchList } = useContext(StoreContext);
  if (watchList.length === 0) {
    return <Card className={classes.root}> <CardContent>No WatchList Movies yet !  </CardContent ></Card >;
  }
  return (
    <>
      {watchList.map((movie) => (
        <Movie key={movie.id} isWatchItem={true} movie={movie} />

      ))}
    </>
  );
};

export default DisplayWatchList;
