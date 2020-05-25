import React, { useContext } from 'react';
import {
  Card, CardActions,
  CardContent, CardMedia, IconButton, Typography,
} from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { makeStyles } from '@material-ui/core/styles';

import { StoreContext, FAVOURITES, WATCHLIST } from '../../provider/Provider';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: '12px auto',
  },
  favourite: {
    color: (props) => (props.isFavourite ? 'red' : null),
  },
  watchlist: {
    color: (props) => (props.isWatchList ? 'red' : null),
  },
});


export default function Movie(props) {

  const classes = useStyles(props);
  const { movie, isFavouriteItem, isWatchItem, isTrending } = props;
  const Store = useContext(StoreContext);

  const handleFavourites = (mov) => {
    const storedFavourites = Store.favourites;
    const existedList = storedFavourites.filter(s => s.id === mov.id)
    if (existedList.length === 0) {
      const favourite = {
        id: mov.id,
        title: mov.title,
        overview: mov.overview,
      };
      Store.setFavourites(favourite, FAVOURITES);
    } else {
      Store.updateFavourites(mov.id, FAVOURITES);
    }
  };

  const handleWatchList = (mov) => {
    const storedWatchList = Store.watchList;
    const existedList = storedWatchList.filter(s => s.id === mov.id)
    if (existedList.length === 0) {
      const watchList = {
        id: mov.id,
        title: mov.title,
        overview: mov.overview,
      };
      Store.setWatchList(watchList, WATCHLIST);
    } else {
      Store.updateWatchList(mov.id, WATCHLIST);
    }
  };

  return (
    <Card className={classes.root}>
      {!isWatchItem && !isFavouriteItem ? <CardMedia
        className={classes.sectionDesktop}
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      /> : null}
      <CardActions>
        <IconButton
          aria-label="add to favorites"
          onClick={() => handleFavourites(movie)}
        >
          {!isWatchItem ? <FavoriteIcon className={classes.favourite} /> : null}
        </IconButton>
        <IconButton
          onClick={() => handleWatchList(movie)}
        >
          {!isFavouriteItem ? <BookmarkIcon className={classes.watchlist} /> : null}
        </IconButton>
        <> {isTrending ?
          <Typography variant="body2" color="textSecondary" component="p">
            <p>Votes: {movie.vote_count}    Rating: {movie.vote_average}</p>
          </Typography> : null}</>
      </CardActions>
      <CardContent>

        <Typography variant="h5" component="h2">
          {movie.title}

        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
          {movie.overview}
        </Typography>
      </CardContent>
    </Card>
  );
}
