import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardActions,
  CardContent, CardMedia, IconButton, Typography,
} from '@material-ui/core';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';

import useStyles from '../../hooks/useStyles';
import { StoreContext, FAVOURITES, WATCHLIST } from '../../provider/Provider';

export default function Movie(props) {
  const classes = useStyles(props);
  const {
    movie, isFavouriteItem,
    isWatchItem,
  } = props;
  const Store = useContext(StoreContext);

  const handleFavourites = (mov) => {
    const storedFavourites = Store.favourites;
    const existedList = storedFavourites.filter((s) => s.id === mov.id);
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
    const existedList = storedWatchList.filter((s) => s.id === mov.id);
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
    <Card className={classes.cardWidth}>
      {!isWatchItem && !isFavouriteItem
        ? <CardMedia
          className={classes.imageCard}
          component="img"
          height='300'
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
      </CardActions>
      <> {!props.isFavouriteItem && !props.isWatchItem
        ? <Typography variant="body2" color="textSecondary" component="p">
          <>&nbsp;&nbsp;Votes: {movie.vote_count} &nbsp; Rating: {movie.vote_average}</>
        </Typography> : null}
      </>
      <CardContent>
        <Typography >
          {movie.title}
        </Typography>
        {(isFavouriteItem || isWatchItem) ? <Typography variant="body2" color="textSecondary" component="p">
          {movie.overview}
        </Typography> : null}
      </CardContent>
    </Card>
  );
}

Movie.propTypes = {
  movie: PropTypes.shape({}).isRequired,
  isFavouriteItem: PropTypes.bool,
  isWatchItem: PropTypes.bool,
  isTrending: PropTypes.bool,
  isFavourite: PropTypes.bool,
  isWatchList: PropTypes.bool,
};
