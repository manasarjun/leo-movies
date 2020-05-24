import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import { setStore, getStore, removeStore } from '../../utils/store';
import { StoreContext } from '../../provider/Provider';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    margin: '12px auto',
  },
  redd: {
    color: (props) => (props.isFavourite ? 'red' : null),
  },
});


export default function Movie(props) {
  const { movie, isFavourite } = props;
  const classes = useStyles(props);
  const storeData = useContext(StoreContext);

  const handleFavourites = (mov) => {
    const storedFavourites = getStore('favourites');
    const existedList = storedFavourites.filter(s => s.id === mov.id)
    if (existedList.length === 0) {
      const favourites = {
        id: mov.id,
        title: mov.title,
        overview: mov.overview,
      };
      storeData.setfavourites(favourites);
    } else {
      removeStore(mov.id);
    }
  };

  const handleWatchList = (mov) => {
    const watchList = {
      id: mov.id,
      title: mov.title,
      overview: mov.overview,
    };
    // store({ watchList });
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.sectionDesktop}
          component="img"
          height="300"
          image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        />
        <CardActions>
          <IconButton
            aria-label="add to favorites"
            onClick={() => handleFavourites(movie)}
          >
            <FavoriteIcon className={classes.redd} />
          </IconButton>
          <IconButton aria-label="share"
            onClick={() => handleWatchList(movie)}
          >
            <BookmarkIcon />
          </IconButton>
        </CardActions>
        <CardContent>
          <Typography variant="h5" component="h2">
            {movie.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.overview}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
