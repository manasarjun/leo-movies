import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import { StoreContext } from '../../provider/Provider';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: '12px auto',
  },

});


const DisplayFavourite = () => {
  const classes = useStyles();
  const { favourites } = useContext(StoreContext);

  const renderFavourites = () => {
    if (favourites.length === 0) {
      return <Card className={classes.root}> <CardContent>No favourites yet ! </CardContent ></Card >;
    }
    return (
      <>
        <Card className={classes.root}>

          {favourites.map((movie) => (
            <CardContent>

              <Typography variant="h5" component="h2">
                {movie.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {movie.overview}
              </Typography>
            </CardContent>

          ))}
        </Card>

      </>
    );
  };
  return renderFavourites();
};

export default DisplayFavourite;
