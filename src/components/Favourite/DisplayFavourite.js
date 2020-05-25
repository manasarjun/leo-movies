import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { StoreContext } from '../../provider/Provider';
import useStyles from "../../hooks/useStyles";
import Movie from "../Movie/Movie";




const DisplayFavourite = () => {
  const classes = useStyles();
  const { favourites } = useContext(StoreContext);

  const renderFavourites = () => {
    if (favourites.length === 0) {
      return <Card className={classes.root}> <CardContent>No favourites yet ! </CardContent ></Card >;
    }
    return (
      <>
        {favourites.map((movie) => (
          <Movie key={movie.id} isFavouriteItem={true} movie={movie} />

        ))}
      </>
    );
  };
  return renderFavourites();
};

export default DisplayFavourite;
